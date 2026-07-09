<?php

namespace App\Http\Requests\Booking;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [

            'service_id' => 'required|exists:services,id',

            'requirements' => 'required|string',

            'budget' => 'required|numeric|min:1',

            'deadline' => 'required|date',

            'status' => 'required|in:pending,accepted,in_progress,completed,cancelled',

        ];
    }
}