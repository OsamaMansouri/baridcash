
import React from 'react';

const BaridPayProcess: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#5A433D]">
          Comment utiliser Barid Pay ?
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-[#F27D30] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5A433D]">Téléchargez l'app</h3>
              <p className="text-gray-600">
                Téléchargez l'application Barid Pay depuis votre store mobile.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-[#F27D30] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5A433D]">Créez votre compte</h3>
              <p className="text-gray-600">
                Inscrivez-vous avec votre numéro de téléphone et validez votre identité.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-[#F27D30] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#5A433D]">Effectuez vos paiements</h3>
              <p className="text-gray-600">
                Rechargez votre compte et effectuez vos transactions en toute sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaridPayProcess;
