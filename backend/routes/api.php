<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Service\ServiceController;
use App\Http\Controllers\Booking\BookingController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Profile\ProfileController;
use App\Http\Controllers\Review\ReviewController;


/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


// Home Page Data (NO LOGIN REQUIRED)

Route::get('/products', [ProductController::class, 'index']);

Route::get('/services', [ServiceController::class, 'index']);

Route::get('/reviews', [ReviewController::class, 'index']);


/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {


    Route::post('/logout', [AuthController::class, 'logout']);


    // Product CRUD
    Route::post('/products', [ProductController::class, 'store']);
    Route::put('/products/{product}', [ProductController::class, 'update']);
    Route::delete('/products/{product}', [ProductController::class, 'destroy']);


    // Service CRUD
    Route::post('/services', [ServiceController::class, 'store']);
    Route::put('/services/{service}', [ServiceController::class, 'update']);
    Route::delete('/services/{service}', [ServiceController::class, 'destroy']);


    // Booking
    Route::apiResource('bookings', BookingController::class);


    // Dashboard
    Route::get('/dashboard', [DashboardController::class, 'index']);


    // Admin
    Route::get('/users',[AdminController::class,"users"]);

    Route::delete("/users/{id}",[AdminController::class,"destroy"]);


    // Profile
    Route::get("/profile",[ProfileController::class,"index"]);

    Route::put("/profile",[ProfileController::class,"update"]);


    // Booking status
    Route::patch(
        "/bookings/{booking}/status",
        [BookingController::class,"updateStatus"]
    );


    // Reviews create/update/delete
    Route::post('/reviews', [ReviewController::class,'store']);

    Route::put('/reviews/{review}', [ReviewController::class,'update']);

    Route::delete('/reviews/{review}', [ReviewController::class,'destroy']);


});