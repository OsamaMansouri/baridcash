<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\FormSubmissionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Contact form submission
Route::post('/contact', [ContactController::class, 'submit']);

// Form submissions (for various forms like devenez-mandataire, nous-rejoindre, etc.)
Route::post('/form-submissions', [FormSubmissionController::class, 'submit']);

// Get form submissions (admin only - you can add middleware later)
Route::get('/form-submissions', [FormSubmissionController::class, 'index']);

// Health check
Route::get('/health', function () {
    return response()->json(['status' => 'ok', 'message' => 'API is running']);
});

// CORS test endpoint
Route::options('/cors-test', function () {
    return response()->json(['status' => 'ok', 'message' => 'CORS preflight successful']);
});
Route::get('/cors-test', function () {
    return response()->json(['status' => 'ok', 'message' => 'CORS test successful', 'timestamp' => now()]);
});
