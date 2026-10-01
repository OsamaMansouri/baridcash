<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MandataireSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'civility',
        'first_name',
        'last_name',
        'email',
        'phone',
        'city',
        'has_local',
        'gps_coordinates',
        'local_address',
        'ip_address',
        'user_agent',
    ];
}
