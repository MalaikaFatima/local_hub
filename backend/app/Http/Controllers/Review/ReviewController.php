<?php

namespace App\Http\Controllers\Review;

use App\Http\Controllers\Controller;
use App\Http\Requests\Review\StoreReviewRequest;
use App\Http\Requests\Review\UpdateReviewRequest;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    // Get all reviews
    public function index()
    {
        return response()->json(
            Review::with(['customer', 'service'])->latest()->get()
        );
    }

    // Store review
    public function store(StoreReviewRequest $request)
    {
        $review = Review::create([
            'customer_id' => auth()->id(),
            'service_id'  => $request->service_id,
            'rating'      => $request->rating,
            'review'      => $request->review,
        ]);

        return response()->json([
            'message' => 'Review added successfully.',
            'review' => $review
        ], 201);
    }

    // Show single review
    public function show(Review $review)
    {
        return response()->json($review);
    }

    // Update review
    public function update(UpdateReviewRequest $request, Review $review)
    {
        if ($review->customer_id != auth()->id()) {
            return response()->json([
                'message' => 'Unauthorized.'
            ], 403);
        }

        $review->update([
            'rating' => $request->rating,
            'review' => $request->review,
        ]);

        return response()->json([
            'message' => 'Review updated successfully.',
            'review' => $review
        ]);
    }

    // Delete review
    public function destroy(Review $review)
    {
        if ($review->customer_id != auth()->id()) {
            return response()->json([
                'message' => 'Unauthorized.'
            ], 403);
        }

        $review->delete();

        return response()->json([
            'message' => 'Review deleted successfully.'
        ]);
    }
}