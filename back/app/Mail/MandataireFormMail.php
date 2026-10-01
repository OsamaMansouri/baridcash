<?php

namespace App\Mail;

use App\Models\MandataireSubmission;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MandataireFormMail extends Mailable
{
    use Queueable, SerializesModels;

    public $submission;

    public function __construct(MandataireSubmission $submission)
    {
        $this->submission = $submission;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Nouvelle demande mandataire - Barid Cash',
        );
    }

    public function content(): Content
    {
        return new Content(
            html: 'emails.mandataire-form',
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
