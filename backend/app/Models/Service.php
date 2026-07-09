<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [

        'user_id',

        'title',

        'description',

        'category',

        'price',

        'delivery_time',

        'status',
        'image',


    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function bookings()
{
    return $this->hasMany(Booking::class);
}
public function reviews()
{
    return $this->hasMany(Review::class);
}
}