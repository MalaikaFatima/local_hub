<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Product;
use App\Models\Service;
use App\Models\User;

class DashboardController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        // ==========================
        // ADMIN DASHBOARD
        // ==========================
        if ($user->role === "admin") {

            return response()->json([

                "users" => User::count(),

                "products" => Product::count(),

                "services" => Service::count(),

                "bookings" => Booking::count(),

            ]);
        }

        // ==========================
        // PROVIDER DASHBOARD
        // ==========================
        if ($user->role === "provider") {

            return response()->json([

                "users" => 0,

                "products" => Product::where("user_id", $user->id)->count(),

                "services" => Service::where("user_id", $user->id)->count(),

                "bookings" => Booking::whereHas("service", function ($query) use ($user) {

                    $query->where("user_id", $user->id);

                })->count(),

            ]);
        }

        // ==========================
        // CUSTOMER DASHBOARD
        // ==========================
        return response()->json([

            "users" => 0,

            "products" => 0,

            "services" => Service::count(),

            "bookings" => Booking::where(
                "customer_id",
                $user->id
            )->count(),

        ]);
    }
}