
import React from 'react';

const NousConnaitreContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-barid-brown mb-6">
            À propos de nous
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            BARIDCASH est votre partenaire de confiance pour tous vos besoins financiers. 
            Avec une expertise reconnue dans le domaine des services financiers, nous nous 
            engageons à vous offrir des solutions innovantes et sécurisées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/56d8d169-db11-4f8f-85b4-526348e4f206.png" 
              alt="BARIDCASH Services" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-barid-brown mb-4">
              Notre mission
            </h3>
            <p className="text-gray-700 mb-6">
              Faciliter l'accès aux services financiers pour tous les Marocains, 
              en proposant des solutions simples, rapides et sécurisées adaptées 
              à leurs besoins quotidiens.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Excellence dans le service client</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Innovation technologique continue</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700">Sécurité et fiabilité garanties</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NousConnaitreContent;
