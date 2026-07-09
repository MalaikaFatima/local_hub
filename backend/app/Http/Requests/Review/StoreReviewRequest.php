<?php

namespace App\Http\Requests\Review;

use Illuminate\Foundation\Http\FormRequest;

class StoreReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'service_id' => 'required|exists:services,id',
            'rating' => 'required|integer|min:1|max:5',
            'review' => 'required|string|max:1000',
        ];
    }
}