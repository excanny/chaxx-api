<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\AuthController;

// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public posts routes (read-only)
// Route::get('/posts', [PostController::class, 'index']);
// Route::get('/posts/{id}', [PostController::class, 'show']);

// Protected routes
// Route::middleware('auth:sanctum')->group(function () {
//     // Auth routes
//     Route::get('/profile', [AuthController::class, 'profile']);
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::post('/logout-all', [AuthController::class, 'logoutAll']);
    
//     // Protected post routes
//     Route::post('/posts', [PostController::class, 'store']);
//     Route::put('/posts/{id}', [PostController::class, 'update']);
//     Route::delete('/posts/{id}', [PostController::class, 'destroy']);
//     Route::get('/my-posts', [PostController::class, 'myPosts']);
// });