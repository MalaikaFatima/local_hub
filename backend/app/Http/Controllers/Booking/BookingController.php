<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;
use App\Http\Requests\Booking\StoreBookingRequest;
use App\Http\Requests\Booking\UpdateBookingRequest;
use App\Models\Booking;

class BookingController extends Controller
{
    // Get bookings according to role
    public function index()
    {
        $user = auth()->user();

        // Customer
        if ($user->role == "customer") {

            return Booking::with("service")
                ->where("customer_id", $user->id)
                ->latest()
                ->get();
        }

        // Provider
        if ($user->role == "provider") {

            return Booking::with(["customer", "service"])
                ->whereHas("service", function ($query) use ($user) {

                    $query->where("user_id", $user->id);

                })
                ->latest()
                ->get();
        }

        // Admin
        return Booking::with(["customer", "service"])
            ->latest()
            ->get();
    }

    // Create Booking
    public function store(StoreBookingRequest $request)
    {
        $booking = Booking::create([

            "customer_id" => auth()->id(),

            "service_id" => $request->service_id,

            "requirements" => $request->requirements,

            "budget" => $request->budget,

            "deadline" => $request->deadline,

            "status" => "pending",

        ]);

        return response()->json($booking, 201);
    }

    // Show Single Booking
    public function show(Booking $booking)
    {
        return $booking->load([
            "customer",
            "service",
        ]);
    }

    // Update Booking
    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        $booking->update($request->validated());

        return response()->json($booking);
    }

    // Delete Booking
    public function destroy(Booking $booking)
    {
        $booking->delete();

        return response()->json([
            "message" => "Booking deleted successfully"
        ]);
    }
}