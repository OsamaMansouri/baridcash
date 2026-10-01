import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const BaridESignFAQ: React.FC = () => {
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
            Nous répondons à vos questions :
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
                  Vous vous demandez comment signer électroniquement vos
                  documents ?
                </AccordionTrigger>
                <AccordionContent className="text-white/90 pt-4">
                  <p>
                    C'est très simple, il vous suffit d'introduire la clé USB
                    BARID E SIGN dans votre ordinateur, de saisir le code PIN
                    associé et de confirmer votre signature.
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

export default BaridESignFAQ;
