
import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NosPartenairesQuestions: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

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
    <section ref={sectionRef} className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Nous répondons à vos questions</h2>
        
        {/* Brown div container for all FAQ content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white mx-auto">
          <div className="max-w-3xl mx-auto">
            {/* First question */}
            <div className="border-b border-white/100 pb-4 mb-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="overflow-hidden rounded-xl border-none">
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div className="flex-1 text-left font-medium text-lg">
                      Vous vous demandez qui sont nos partenaires ?
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p>Nous collaborons avec des partenaires reconnus dans le secteur financier pour vous offrir les meilleurs services.</p>
                    <div className="mt-4">
                      <p className="mb-2 font-medium">
                        Pour plus d'informations{' '}
                        <Link to="/types-de-comptes" className="text-[#F27D30] underline hover:text-[#E26A20]">
                          cliquez ici
                        </Link>
                      </p>
                      <Link to="/contactez-nous">
                        <button className="bg-[#F27D30] text-white px-6 py-3 rounded-lg hover:bg-[#E26A20] transition-colors font-medium">
                          Découvrez l'agence la plus proche
                        </button>
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Second question */}
            <div className="border-b border-white/100 pb-4 mb-5">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-2" className="overflow-hidden rounded-xl border-none">
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div className="flex-1 text-left font-medium text-lg">
                      Vous vous demandez quels services proposent nos partenaires ?
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p>Nos partenaires offrent une gamme complète de services financiers incluant les transferts d'argent, les paiements mobiles et bien plus encore.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            {/* Third question */}
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-3" className="overflow-hidden rounded-xl border-none">
                  <AccordionTrigger className="bg-[#5A433D] text-white p-5 pt-0 rounded-t-xl hover:no-underline group">
                    <div className="flex-1 text-left font-medium text-lg">
                      Vous vous demandez comment accéder aux services de nos partenaires ?
                    </div>
                    <ChevronDown className="h-6 w-6 shrink-0 text-white transition-transform duration-300 group-data-[state=open]:text-[#F27D30] group-data-[state=open]:rotate-180" />
                  </AccordionTrigger>
                  <AccordionContent className="bg-[#5A433D] text-white px-5 pb-5 pt-2 rounded-b-xl">
                    <p>Vous pouvez accéder aux services de nos partenaires directement dans nos agences Barid Cash ou via l'application Barid Pay.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosPartenairesQuestions;
