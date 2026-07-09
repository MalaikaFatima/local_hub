<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reviews', function (Blueprint $table) {

            $table->id();

            // Customer who wrote the review
            $table->foreignId('customer_id')
                ->constrained('users')
                ->cascadeOnDelete();

            // Service being reviewed
            $table->foreignId('service_id')
                ->constrained('services')
                ->cascadeOnDelete();

            // Rating (1 to 5)
            $table->tinyInteger('rating');

            // Review text
            $table->text('review');

            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reviews');
    }
};