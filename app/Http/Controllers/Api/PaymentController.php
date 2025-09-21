<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        $request->validate([
            'amount' => 'required|numeric',
            'currency' => 'sometimes|string|in:cad,usd',
        ]);

        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            $paymentIntent = PaymentIntent::create([
                'amount' => $request->amount * 100, // Stripe expects cents
                'currency' => $request->currency ?? 'cad',
                'payment_method_types' => ['card'],
                'metadata' => [
                    'customer_name' => $request->customer_name ?? null, // optional
                    'booking_id' => $request->booking_id ?? null, // optional
                ],
            ]);

            return response()->json([
                'client_secret' => $paymentIntent->client_secret
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function handleWebhook(Request $request)
    {
        $payload = $request->getContent();
        $sig_header = $request->header('Stripe-Signature');
        $endpoint_secret = 'whsec_XXXXXXXXXXXXXXXX'; // Stripe dashboard

        try {
            $event = \Stripe\Webhook::constructEvent($payload, $sig_header, $endpoint_secret);

            switch ($event->type) {
                case 'payment_intent.succeeded':
                    $paymentIntent = $event->data->object;
                    // TODO: Update booking/payment status in database
                    break;
                case 'payment_intent.payment_failed':
                    $paymentIntent = $event->data->object;
                    // TODO: Handle failed payments
                    break;
            }

            return response()->json(['status' => 'success']);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
