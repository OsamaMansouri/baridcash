<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle demande mandataire - Barid Cash</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #ffffff;
            margin: 0;
            padding: 20px;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
        }

        .header {
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 24px;
            font-weight: 600;
            color: #333;
            margin: 0 0 5px 0;
        }

        .header p {
            font-size: 14px;
            color: #666;
            margin: 0;
        }

        .content {
            margin-bottom: 30px;
        }

        .intro {
            margin-bottom: 25px;
        }

        .intro p {
            font-size: 16px;
            color: #333;
            margin: 0;
        }

        .details-section {
            margin-bottom: 25px;
        }

        .details-section h2 {
            font-size: 18px;
            font-weight: 600;
            color: #333;
            margin: 0 0 15px 0;
        }

        .detail-item {
            margin-bottom: 15px;
        }

        .detail-label {
            font-weight: 600;
            color: #333;
            font-size: 14px;
            margin-bottom: 3px;
        }

        .detail-value {
            color: #333;
            font-size: 15px;
        }

        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e9ecef;
        }

        .footer p {
            margin: 5px 0;
            color: #666;
            font-size: 14px;
        }

        .signature {
            font-weight: 500;
            color: #333;
        }

        .copyright {
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }

        .timestamp {
            color: #666;
            font-size: 12px;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="email-container">
        <div class="header">
            <h1>Nouvelle demande mandataire</h1>
            <p>Barid Cash - Mandataires</p>
        </div>

        <div class="content">
            <div class="intro">
                <p>Vous avez reçu une nouvelle demande pour devenir mandataire via le formulaire "Devenir mandataire" de Barid Cash.</p>
            </div>

            <div class="details-section">
                <h2>Informations du candidat mandataire</h2>

                <div class="detail-item">
                    <div class="detail-label">Civilité</div>
                    <div class="detail-value">{{ $submission->civility }}</div>
                </div>

                <div class="detail-item">
                    <div class="detail-label">Nom complet</div>
                    <div class="detail-value">{{ $submission->first_name }} {{ $submission->last_name }}</div>
                </div>

                <div class="detail-item">
                    <div class="detail-label">Email</div>
                    <div class="detail-value">{{ $submission->email }}</div>
                </div>

                <div class="detail-item">
                    <div class="detail-label">Téléphone</div>
                    <div class="detail-value">{{ $submission->phone }}</div>
                </div>

                <div class="detail-item">
                    <div class="detail-label">Ville</div>
                    <div class="detail-value">{{ $submission->city }}</div>
                </div>

                <div class="detail-item">
                    <div class="detail-label">Possède un local</div>
                    <div class="detail-value">{{ $submission->has_local ? 'Oui' : 'Non' }}</div>
                </div>

                @if($submission->gps_coordinates)
                <div class="detail-item">
                    <div class="detail-label">Coordonnées GPS</div>
                    <div class="detail-value">{{ $submission->gps_coordinates }}</div>
                </div>
                @endif

                @if($submission->local_address)
                <div class="detail-item">
                    <div class="detail-label">Adresse du local</div>
                    <div class="detail-value">{{ $submission->local_address }}</div>
                </div>
                @endif
            </div>

            <div class="timestamp">
                Reçu le {{ $submission->created_at->format('d/m/Y à H:i') }} | IP: {{ $submission->ip_address }}
            </div>
        </div>

        <div class="footer">
            <p class="signature">Cordialement,</p>
            <p><strong>L'équipe Barid Cash</strong></p>
            <p>Service Mandataires</p>

            <div class="copyright">
                <p>&copy; {{ date('Y') }} Barid Cash. Tous droits réservés.</p>
            </div>
        </div>
    </div>
</body>

</html>
