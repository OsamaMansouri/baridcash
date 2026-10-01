<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ContactSubmission;
use App\Models\RecruitmentSubmission;
use App\Models\MandataireSubmission;
use App\Mail\ContactFormMail;
use App\Mail\RecruitmentFormMail;
use App\Mail\MandataireFormMail;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;

class FormSubmissionController extends Controller
{
    public function submit(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'formType' => 'required|string|in:devenez-mandataire,nous-rejoindre,assistance,devenir-partenaire',
            'data' => 'required|array',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation failed',
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $formData = $request->data;
            $formType = $request->formType;

            // Common fields validation based on form type
            $commonRules = [
                'civility' => 'required|string|in:Mr,Mme',
                'firstName' => 'required|string|max:255',
                'lastName' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:20',
            ];

            // Add specific rules based on form type
            switch ($formType) {
                case 'devenez-mandataire':
                    $commonRules['city'] = 'required|string|max:255';
                    $commonRules['hasLocal'] = 'required|boolean';
                    $commonRules['gpsCoordinates'] = 'nullable|string|max:255';
                    $commonRules['localAddress'] = 'nullable|string|max:255';
                    break;
                case 'nous-rejoindre':
                    $commonRules['currentFunction'] = 'required|string|max:255';
                    $commonRules['cv'] = 'nullable|file|mimes:pdf,doc,docx|max:2048';
                    break;
                case 'assistance':
                    $commonRules['subject'] = 'required|string|max:255';
                    $commonRules['message'] = 'required|string|max:1000';
                    break;
                case 'devenir-partenaire':
                    $commonRules['companyName'] = 'required|string|max:255';
                    $commonRules['businessType'] = 'required|string|max:255';
                    break;
            }

            $formValidator = Validator::make($formData, $commonRules);

            if ($formValidator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Form validation failed',
                    'errors' => $formValidator->errors()
                ], 422);
            }

            // Create submission based on form type
            $submission = $this->createSubmission($formType, $formData, $request);

            // Send email notification based on form type
            try {
                $recipientEmail = $this->getRecipientEmail($formType);
                $this->sendEmail($formType, $submission, $recipientEmail);
            } catch (\Exception $mailException) {
                // Log email error but don't fail the form submission
                \Log::error('Email sending failed for ' . $formType . ': ' . $mailException->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => 'Form submitted successfully!',
                'data' => $submission
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function index(Request $request): JsonResponse
    {
        try {
            $submissions = ContactSubmission::orderBy('created_at', 'desc')
                ->paginate(20);

            return response()->json([
                'success' => true,
                'data' => $submissions
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred while fetching submissions',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Create submission based on form type
     */
    private function createSubmission(string $formType, array $formData, Request $request)
    {
        $commonData = [
            'civility' => $formData['civility'],
            'first_name' => $formData['firstName'],
            'last_name' => $formData['lastName'],
            'email' => $formData['email'],
            'phone' => $formData['phone'],
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ];

        switch ($formType) {
            case 'nous-rejoindre':
                return RecruitmentSubmission::create(array_merge($commonData, [
                    'current_function' => $formData['currentFunction'],
                    'cv_file_path' => $formData['cvFilePath'] ?? null,
                ]));

            case 'devenez-mandataire':
                return MandataireSubmission::create(array_merge($commonData, [
                    'city' => $formData['city'],
                    'has_local' => $formData['hasLocal'],
                    'gps_coordinates' => $formData['gpsCoordinates'] ?? null,
                    'local_address' => $formData['localAddress'] ?? null,
                ]));

            default:
                return ContactSubmission::create(array_merge($commonData, [
                    'subject' => $formData['subject'] ?? null,
                    'city' => $formData['city'] ?? null,
                    'message' => $formData['message'] ?? null,
                    'form_type' => $formType,
                    'additional_data' => json_encode($formData),
                ]));
        }
    }

    /**
     * Send email based on form type
     */
    private function sendEmail(string $formType, $submission, string $recipientEmail)
    {
        switch ($formType) {
            case 'nous-rejoindre':
                Mail::to($recipientEmail)->send(new RecruitmentFormMail($submission));
                break;

            case 'devenez-mandataire':
                Mail::to($recipientEmail)->send(new MandataireFormMail($submission));
                break;

            default:
                Mail::to($recipientEmail)->send(new ContactFormMail($submission));
                break;
        }
    }

    /**
     * Get recipient email based on form type
     */
    private function getRecipientEmail(string $formType): string
    {
        // Using test email for local testing
        // return 'mansouri.osama@gmail.com';

        // Production emails (commented out for local testing)

        switch ($formType) {
            case 'nous-rejoindre':
                return 'Recrute@Baridcash.ma';
            case 'devenez-mandataire':
                return 'Z.FAOUZAOUI@baridcash.ma';
            case 'assistance':
                return 'h.lakbir@baridcash.ma';
            case 'devenir-partenaire':
                return 'h.lakbir@baridcash.ma';
            default:
                return 'h.lakbir@baridcash.ma';
        }
    }
}
