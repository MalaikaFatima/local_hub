<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;

class AdminController extends Controller
{
    // Dashboard Stats
    public function dashboard()
    {
        return response()->json([
            "users" => User::count(),
        ]);
    }

    // Get All Users
    public function users()
    {
        return response()->json(
            User::select(
                "id",
                "name",
                "email",
                "role",
                "created_at"
            )
            ->latest()
            ->get()
        );
    }

    // Delete User
    public function destroy($id)
    {
        User::findOrFail($id)->delete();

        return response()->json([
            "message" => "User deleted successfully."
        ]);
    }
}