
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const FacturesEauElectriciteTrainTicket: React.FC = () => {
  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-barid-brown mb-4">
            Achetez votre billet de train en agence Barid Cash
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-barid-brown text-white p-8 md:p-12 rounded-2xl relative">
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Barid Cash vous permet d'acheter vos billets de voyage ONCF à travers notre large réseau d'agences.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <span className="mr-3 text-white">•</span>
                <span className="text-base md:text-lg">Rendez-vous à l'agence Barid Cash la plus proche de chez vous.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-white">•</span>
                <span className="text-base md:text-lg">Choisissez votre trajet.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-white">•</span>
                <span className="text-base md:text-lg">Récupérez votre ticket.</span>
              </li>
            </ul>
            
            <Button className="bg-barid-orange hover:bg-barid-orange/90 text-white font-semibold px-6 py-3 rounded-lg inline-flex items-center gap-2">
              Découvrez l'agence la plus proche de chez vous
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacturesEauElectriciteTrainTicket;
