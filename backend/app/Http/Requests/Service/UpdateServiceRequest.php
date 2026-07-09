<?php

namespace App\Http\Requests\Service;

use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
    
            'title' => 'required|max:255',
    
            'description' => 'required',
    
            'category' => 'required',
    
            'price' => 'required|numeric',
    
            'delivery_time' => 'required|integer',
    
            'status' => 'required|in:active,inactive',
    
            'image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    
        ];
    }}