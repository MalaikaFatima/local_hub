<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [

        "customer_id",

        "service_id",

        "rating",

        "review",

    ];

    public function customer()
    {
        return $this->belongsTo(User::class,"customer_id");
    }

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}