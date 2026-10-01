import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const SolutionsPaiementHeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 300 },
      { ref: introRef, delay: 600 },
      { ref: ctaRef, delay: 900 }
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
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-barid-brown mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Les solutions de paiement
          </h1>
          
          <p 
            ref={introRef}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Vous exercez une activité commerciale et vous souhaitez proposer une alternative de paiement à vos clients ? C'est possible ! Barid Cash permet à vos clients de payer en espèces leurs achats au sein de l'agence la plus proche de chez eux.
          </p>

          <div 
            ref={ctaRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <Link to="/devenir-partenaire">
              <Button className="bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-8 rounded-[1.5rem] uppercase text-lg">
                En savoir plus
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPaiementHeroSection;