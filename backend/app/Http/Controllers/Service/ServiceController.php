<?php

namespace App\Http\Controllers\Service;

use App\Http\Controllers\Controller;
use App\Http\Requests\Service\StoreServiceRequest;
use App\Http\Requests\Service\UpdateServiceRequest;
use App\Models\Service;

class ServiceController extends Controller
{

    public function index()
    {
        $user = auth()->user();

        if ($user->role === "admin") {

            $services = Service::with([
                'user',
                'reviews.customer'
            ])
            ->latest()
            ->get();


        } elseif ($user->role === "provider") {

            $services = Service::with([
                'user',
                'reviews.customer'
            ])
            ->where("user_id", $user->id)
            ->latest()
            ->get();


        } else {

            $services = Service::with([
                'user',
                'reviews.customer'
            ])
            ->where("status", "active")
            ->latest()
            ->get();

        }


        $services->transform(function ($service) {

            if ($service->image) {

                $service->image = asset("storage/" . $service->image);

            }

            return $service;

        });


        return response()->json($services);
    }



    public function store(StoreServiceRequest $request)
    {

        $image = null;


        if ($request->hasFile('image')) {

            $image = $request
                ->file('image')
                ->store('services', 'public');

        }


        $service = Service::create([

            'user_id' => auth()->id(),

            'title' => $request->title,

            'description' => $request->description,

            'category' => $request->category,

            'price' => $request->price,

            'delivery_time' => $request->delivery_time,

            'status' => $request->status,

            'image' => $image,

        ]);


        return response()->json($service, 201);

    }



    public function show(Service $service)
    {

        $service->load([
            'user',
            'reviews.customer'
        ]);


        if ($service->image) {

            $service->image = asset("storage/" . $service->image);

        }


        return response()->json($service);

    }



    public function update(UpdateServiceRequest $request, Service $service)
    {

        $user = auth()->user();


        if (
            $user->role !== "admin" &&
            $service->user_id != $user->id
        ) {

            return response()->json([
                "message" => "Unauthorized."
            ],403);

        }


        $data = $request->validated();


        if ($request->hasFile('image')) {

            $data['image'] = $request
                ->file('image')
                ->store('services','public');

        }


        $service->update($data);


        return response()->json($service);

    }



    public function destroy(Service $service)
    {

        $user = auth()->user();


        if (
            $user->role !== "admin" &&
            $service->user_id != $user->id
        ) {

            return response()->json([
                "message"=>"Unauthorized."
            ],403);

        }


        $service->delete();


        return response()->json([
            "message"=>"Service deleted successfully."
        ]);

    }

}