<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {

            $table->id();

            $table->foreignId('customer_id')
                  ->constrained('users')
                  ->cascadeOnDelete();

            $table->foreignId('service_id')
                  ->constrained()
                  ->cascadeOnDelete();

            $table->text('requirements');

            $table->decimal('budget', 10, 2);

            $table->date('deadline');

            $table->enum('status', [
                'pending',
                'accepted',
                'in_progress',
                'completed',
                'cancelled'
            ])->default('pending');

            $table->timestamps();

        });
    }

    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};