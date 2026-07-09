<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\StoreProductRequest;
use App\Http\Requests\Product\UpdateProductRequest;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json(
            Product::latest()->get()
        );
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create([

            ...$request->validated(),

            'user_id' => auth()->id(),

        ]);

        return response()->json($product, 201);
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update(
            $request->validated()
        );

        return response()->json($product);
    }

    public function destroy(Product $product)
    {
        $product->delete();

        return response()->json([
            'message' => 'Product deleted successfully'
        ]);
    }
}