import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TaxesImpiotsFaq: React.FC = () => {
  console.log("TaxesImpiotsFaq component is rendering");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-barid-background">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Brown div container for FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* Text content about tax payment process */}
            <div>
              <h2 className="text-xl font-semibold mb-6 text-white">
                Comment effectuer le paiement de vos taxes et impôts ?
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="mb-2">
                    <span className="font-semibold">1.</span> Rendez-vous à
                    l'agence Barid Cash qui permet le paiement des taxes et
                    impôts, la plus proche de chez vous muni de :
                  </p>
                  <ul className="ml-4 space-y-1">
                    <li>- Votre carte d'identité nationale ;</li>
                    <li>- Votre avis d'imposition ou document de paiement ;</li>
                    <li>- Le montant exact à régler ;</li>
                  </ul>
                </div>
                <p>
                  <span className="font-semibold">2.</span> Présentez les
                  documents mentionnés ci-dessus à l'agent.
                </p>
                <p>
                  <span className="font-semibold">3.</span> Effectuez le
                  paiement et recevez votre reçu de paiement.
                </p>
              </div>

              {/* CTA Section */}
              <div className="mt-6 text-center">
                <Link to="/contactez-nous">
                  <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg hover:bg-[#E26A20] transition-colors font-medium">
                    Découvrez l'agence la plus proche
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxesImpiotsFaq;
