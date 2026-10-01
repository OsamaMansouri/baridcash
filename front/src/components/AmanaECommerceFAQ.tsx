import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AmanaECommerceFAQ: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (accordionRef.current) observer.observe(accordionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Nous répondons à vos questions
          </h2>

          <div
            ref={accordionRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-barid-orange transition-colors">
                  Vous vous demandez quels sont les e-commerçants concernés par
                  ce service ?
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pt-4">
                  Ce service est destiné à l'ensemble des e-commerçants quel que
                  soit leur secteur d'activité.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-barid-orange transition-colors">
                  Vous vous demandez quels sont les éléments à renseigner pour
                  l'envoi de votre colis :
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pt-4">
                  <p className="mb-4">
                    Afin d'envoyer votre colis, il vous suffira de renseigner :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Le nom ou le numéro de contrat de votre client
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Les informations liées au destinataire et à la
                        destination d'envoi du colis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Le poids du colis</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Le canal de livraison (à domicile, en agence ou point
                        relai)
                      </span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="/devenir-partenaire"
              className="inline-block bg-white hover:bg-gray-100 text-barid-brown font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg"
            >
              En savoir plus !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmanaECommerceFAQ;
