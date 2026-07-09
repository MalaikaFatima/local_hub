<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\UpdateProfileRequest;

class ProfileController extends Controller
{
    // Logged In User Profile
    public function index()
    {
        $user = auth()->user();

        if ($user->avatar) {
            $user->avatar = asset("storage/" . $user->avatar);
        }

        return response()->json($user);
    }

    // Update Profile
    public function update(UpdateProfileRequest $request)
    {
        $user = auth()->user();

        $data = $request->validated();

        // Upload Avatar
        if ($request->hasFile("avatar")) {

            $data["avatar"] = $request
                ->file("avatar")
                ->store("avatars", "public");
        }

        $user->update($data);

        if ($user->avatar) {
            $user->avatar = asset("storage/" . $user->avatar);
        }

        return response()->json([

            "message" => "Profile updated successfully.",

            "user" => $user,

        ]);
    }
}