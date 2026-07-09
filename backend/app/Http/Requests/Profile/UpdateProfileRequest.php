<?php

namespace App\Http\Requests\Profile;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProfileRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            "name"=>"required|string|max:100",

            "email"=>"required|email|unique:users,email,".$this->user()->id,

            "phone"=>"nullable|string|max:20",

            "location"=>"nullable|string|max:255",

            "skills"=>"nullable|string|max:255",

            "bio"=>"nullable|string|max:1000",

            "avatar"=>"nullable|image|mimes:jpg,jpeg,png|max:2048",

        ];
    }
}