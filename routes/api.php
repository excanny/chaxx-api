<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\PaymentController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Booking without authentication
Route::post('/bookings', [BookingController::class, 'store']);

// Available slots endpoint (public)
Route::get('/available-slots', [BookingController::class, 'availableSlots']);

// Payment routes
Route::get('/checkout/{booking}', [BookingController::class, 'checkout'])->name('checkout');
Route::post('/payment/callback', [BookingController::class, 'paymentCallback'])->name('payment.callback');

Route::post('/create-payment-intent', [PaymentController::class, 'createPaymentIntent']);
Route::post('/stripe-webhook', [PaymentController::class, 'handleWebhook']);

// Protected routes
// Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('services', ServiceController::class)->except(['index', 'show']); 
    Route::apiResource('bookings', BookingController::class)->except(['store']);
// });