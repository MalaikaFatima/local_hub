<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Validation rules.
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:100',

            'email' => 'required|email|unique:users,email',

            'password' => 'required|min:8|confirmed',
            'role' => 'nullable|in:customer,provider,admin',
        ];
    }

    /**
     * Custom error messages.
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Full name is required.',

            'email.required' => 'Email is required.',
            'email.email' => 'Enter a valid email address.',
            'email.unique' => 'This email is already registered.',

            'password.required' => 'Password is required.',
            'password.min' => 'Password must be at least 8 characters.',
            'password.confirmed' => 'Passwords do not match.',
        ];
    }
}