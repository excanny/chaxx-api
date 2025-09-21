<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Booking;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use Carbon\Carbon;

class BookingController extends Controller
{
    /**
     * Display a listing of bookings.
     */
    public function index()
    {
        $bookings = Booking::orderBy('appointment_time', 'desc')->get();

        return response()->json([
            'success'  => true,
            'bookings' => $bookings
        ]);
    }

    /**
     * Display a specific booking.
     */
    public function show($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json([
                'success' => false,
                'message' => 'Booking not found.'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'booking' => $booking
        ]);
    }

    /**
     * Get available time slots for a specific date.
     */
    public function availableSlots(Request $request)
    {
        $request->validate([
            'date' => 'required|date|date_format:Y-m-d'
        ]);

        $date = $request->input('date');
        
        // Define all possible time slots for the day
        $allSlots = [
            '09:00', '10:00', '11:00', '12:00', 
            '14:00', '15:00', '16:00'
        ];

        // Get booked time slots for the specified date
        $bookedSlots = Booking::whereDate('appointment_time', $date)
            ->where('status', '!=', 'cancelled') // Exclude cancelled bookings
            ->get()
            ->map(function ($booking) {
                return Carbon::parse($booking->appointment_time)->format('H:i');
            })
            ->toArray();

        // Calculate available slots by removing booked ones
        $availableSlots = array_diff($allSlots, $bookedSlots);
        
        // Reset array keys to maintain proper JSON array format
        $availableSlots = array_values($availableSlots);

        return response()->json([
            'success' => true,
            'date' => $date,
            'available_slots' => $availableSlots,
            'booked_slots' => $bookedSlots,
            'total_slots' => count($allSlots),
            'available_count' => count($availableSlots)
        ]);
    }
    
    /**
     * Store a newly created booking (payment optional).
     */
    public function store(Request $request)
    {
        $request->validate([
            //'service_id'       => 'required|exists:services,id',
            'customer_name'    => 'required|string|max:255',
            'phone_number'     => 'required|string|max:20',
            'appointment_time' => 'required|date|after:now',
            'email'            => 'nullable|email',
            'pay_now'          => 'boolean'
        ]);

        // Check if the selected time slot is still available
        $appointmentDate = Carbon::parse($request->appointment_time);
        $requestedTime = $appointmentDate->format('H:i');
        $requestedDate = $appointmentDate->format('Y-m-d');

        $existingBooking = Booking::whereDate('appointment_time', $requestedDate)
            ->whereTime('appointment_time', $requestedTime)
            ->where('status', '!=', 'cancelled')
            ->first();

        if ($existingBooking) {
            return response()->json([
                'success' => false,
                'message' => 'This time slot is no longer available. Please select another time.'
            ], 422);
        }

        //$service = Service::findOrFail($request->service_id);

        // Create booking
        $booking = Booking::create([
            'customer_name'    => $request->customer_name,
            'phone_number'     => $request->phone_number,
            'service_id'       => $request->service_id,
            'appointment_time' => $request->appointment_time,
            'status'           => 'pending',
            'payment_status'   => 'unpaid',
        ]);

        // If user chooses to pay now, initialize Stripe Checkout
        if ($request->pay_now && $request->email) {
            // Set Stripe API key
            Stripe::setApiKey(config('services.stripe.secret'));

            try {
                $session = Session::create([
                    'payment_method_types' => ['card'],
                    'line_items' => [[
                        'price_data' => [
                            'currency' => 'usd', // Change to your preferred currency
                            'product_data' => [
                                'name' => $service->name,
                                'description' => $service->description ?? 'Service booking',
                            ],
                            'unit_amount' => $service->price * 100, // Stripe expects cents
                        ],
                        'quantity' => 1,
                    ]],
                    'mode' => 'payment',
                    'success_url' => url('/booking/success?session_id={CHECKOUT_SESSION_ID}'),
                    'cancel_url' => url('/booking/cancel'),
                    'customer_email' => $request->email,
                    'metadata' => [
                        'booking_id' => $booking->id,
                        'service_name' => $service->name,
                    ],
                    'expires_at' => now()->addMinutes(30)->timestamp, // Session expires in 30 minutes
                ]);

                // Store the Stripe session ID for later reference
                $booking->stripe_session_id = $session->id;
                $booking->save();

                return response()->json([
                    'success'     => true,
                    'message'     => 'Booking created. Redirect to Stripe for payment.',
                    'payment_url' => $session->url,
                    'booking'     => $booking
                ]);
            } catch (\Stripe\Exception\ApiErrorException $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Payment initialization failed: ' . $e->getMessage()
                ], 500);
            } catch (\Exception $e) {
                return response()->json([
                    'success' => false,
                    'message' => 'Payment initialization failed: ' . $e->getMessage()
                ], 500);
            }
        }

        // If booking is without payment
        return response()->json([
            'success' => true,
            'message' => 'Booking created successfully (without payment).',
            'booking' => $booking
        ]);
    }

    /**
     * Update a booking.
     */
    public function update(Request $request, $id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json([
                'success' => false,
                'message' => 'Booking not found.'
            ], 404);
        }

        $request->validate([
            'customer_name'    => 'sometimes|string|max:255',
            'phone_number'     => 'sometimes|string|max:20',
            'appointment_time' => 'sometimes|date|after:now',
            'status'           => 'sometimes|in:pending,confirmed,cancelled,completed',
            'payment_status'   => 'sometimes|in:unpaid,paid'
        ]);

        $booking->update($request->only([
            'customer_name',
            'phone_number',
            'appointment_time',
            'status',
            'payment_status'
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Booking updated successfully.',
            'booking' => $booking
        ]);
    }

    /**
     * Delete a booking.
     */
    public function destroy($id)
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json([
                'success' => false,
                'message' => 'Booking not found.'
            ], 404);
        }

        $booking->delete();

        return response()->json([
            'success' => true,
            'message' => 'Booking deleted successfully.'
        ]);
    }
}