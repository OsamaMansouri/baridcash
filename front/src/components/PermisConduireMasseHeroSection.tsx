import React, { useEffect, useRef } from 'react';

const PermisConduireMasseHeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraph1Ref = useRef<HTMLParagraphElement>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 300 },
      { ref: paragraph1Ref, delay: 600 },
      { ref: paragraph2Ref, delay: 900 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0');
        }, delay);
      }
    });
  }, []);

  return (
    <section className="bg-barid-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-barid-brown mb-12 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out pt-4 md:pt-0"
          >
            Exclusif : Renouvellement des permis de conduire en masse
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p 
              ref={paragraph1Ref}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              Grâce à son partenariat avec la NARSA (l'Agence nationale de la sécurité routière), Barid Cash vous offre la possibilité d'effectuer le renouvellement en masse des permis de conduire au sein de vos locaux.
            </p>
            <p 
              ref={paragraph2Ref}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              Vos collaborateurs n'ont plus besoin de se déplacer pour renouveler leur permis de conduire. Les équipes Barid Cash se déplacent directement sur place, munies des éléments nécessaires pour le traitement des dossiers et le renouvellement des permis de conduire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PermisConduireMasseHeroSection;