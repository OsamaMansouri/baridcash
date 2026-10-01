<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'civility' => 'required|string|in:Mr,Mme',
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:20',
            'subject' => 'required|string|max:255',
            'city' => 'nullable|string|max:255',
            'message' => 'required|string|max:1000',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $submission = ContactSubmission::create([
                'civility' => $request->civility,
                'first_name' => $request->firstName,
                'last_name' => $request->lastName,
                'email' => $request->email,
                'phone' => $request->phone,
                'subject' => $request->subject,
                'city' => $request->city,
                'message' => $request->message,
                'form_type' => 'contact',
                'ip_address' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ]);

            // Send email notification
            try {
                Mail::to('mansouri.osama@gmail.com')->send(new ContactFormMail($submission));
            } catch (\Exception $mailException) {
                // Log email error but don't fail the form submission
                \Log::error('Email sending failed: ' . $mailException->getMessage());
            }

            return response()->json([
                'message' => 'Contact form submitted successfully!',
                'data' => $submission
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'An error occurred while processing your request',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
