<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RecruitmentSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'civility',
        'first_name',
        'last_name',
        'email',
        'phone',
        'current_function',
        'cv_file_path',
        'ip_address',
        'user_agent',
    ];
}
