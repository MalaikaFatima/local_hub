<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Register User
     */
    public function register(RegisterRequest $request)
    {
        $user = User::create([

            'name' => $request->name,
            
            'email' => $request->email,
            
            'password' => Hash::make($request->password),
            
            'role' => $request->role ?? 'customer',
            
            ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([

            'success' => true,

            'message' => 'Registration Successful.',

            'token' => $token,

            'user' => $user,

        ], 201);
    }

    /**
     * Login User
     */
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {

            return response()->json([

                'success' => false,

                'message' => 'Invalid credentials.'

            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([

            'success' => true,

            'message' => 'Login Successful.',

            'token' => $token,

            'user' => $user,

        ]);
    }

    /**
     * Logout User
     */
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([

            'success' => true,

            'message' => 'Logout Successful.'

        ]);
    }
}