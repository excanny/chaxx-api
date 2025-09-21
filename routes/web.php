<?php

use Illuminate\Support\Facades\Route;

// Serve React app for all routes
Route::get('/{any}', function () {
    return view('app'); // resources/views/app.blade.php
})->where('any', '.*');
