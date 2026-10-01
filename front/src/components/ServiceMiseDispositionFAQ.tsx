import React, { useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const ServiceMiseDispositionFAQ: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
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
            Nous répondons à vos questions :
          </h2>
          
          <div 
            ref={accordionRef}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-barid-orange transition-colors">
                  Vous vous demandez comment disposer de ce service ?
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pt-4">
                  <p className="mb-3">
                    Afin de disposer de ce service, il vous suffit de remplir le formulaire suivant :
                  </p>
                  <Link 
                    to="/devenir-partenaire"
                    className="inline-flex items-center text-barid-orange hover:text-barid-orange/80 font-medium"
                  >
                    📋 Accéder au formulaire →
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-barid-orange transition-colors">
                  Vous vous demandez comment se fait le retrait d'argent ?
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pt-4">
                  <p>
                    Il suffit à la personne concernée de se présenter à l'agence Barid Cash, la plus proche de chez elle, 
                    munie de sa carte d'identité en cours de validité.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMiseDispositionFAQ;