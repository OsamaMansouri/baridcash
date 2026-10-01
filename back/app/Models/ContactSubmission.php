<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSubmission extends Model
{
    use HasFactory;

    protected $fillable = [
        'civility',
        'first_name',
        'last_name',
        'email',
        'phone',
        'subject',
        'city',
        'message',
        'form_type',
        'additional_data',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'additional_data' => 'array',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Accessor for full name
    public function getFullNameAttribute()
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    // Scope for filtering by form type
    public function scopeByFormType($query, $formType)
    {
        return $query->where('form_type', $formType);
    }

    // Scope for recent submissions
    public function scopeRecent($query, $days = 7)
    {
        return $query->where('created_at', '>=', now()->subDays($days));
    }
}
