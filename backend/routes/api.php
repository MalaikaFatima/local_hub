<?php

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

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::apiResource('products', ProductController::class);

    Route::apiResource('services', ServiceController::class);

    Route::apiResource('bookings', BookingController::class);

        Route::get('/dashboard', [DashboardController::class, 'index']);
        Route::get("/users",[AdminController::class,"users"]);

        Route::delete("/users/{id}",[AdminController::class,"destroy"]);

        Route::get("/profile",[ProfileController::class,"index"]);

Route::put("/profile",[ProfileController::class,"update"]);
Route::patch(
    "/bookings/{booking}/status",
    [BookingController::class,"updateStatus"]
);
Route::apiResource("reviews", ReviewController::class);


});