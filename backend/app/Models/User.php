<?php

namespace App\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [

        'name',
        'email',
        'password',
        'role',

        'avatar',
        'bio',
        'phone',
        'location',
        'skills',

    ];

    protected $hidden = [

        'password',
        'remember_token',

    ];

    protected function casts(): array
    {
        return [

            'email_verified_at' => 'datetime',
            'password' => 'hashed',

        ];
    }

    // Customer Bookings
    public function bookings()
    {
        return $this->hasMany(
            Booking::class,
            'customer_id'
        );
    }

    // Customer Reviews
    public function reviews()
    {
        return $this->hasMany(
            Review::class,
            'customer_id'
        );
    }

    // Provider Services
    public function services()
    {
        return $this->hasMany(
            Service::class
        );
    }

    // Provider Products
    public function products()
    {
        return $this->hasMany(
            Product::class
        );
    }
}