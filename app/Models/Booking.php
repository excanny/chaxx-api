<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = [
        'customer_name',
        'phone_number',
        'service_id',
        'appointment_time',
        'status',
        'payment_status',
        'transaction_id',
    ];
}
