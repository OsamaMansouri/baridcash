
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const FacturesAchatFaq: React.FC = () => {
  console.log("FacturesAchatFaq component is rendering");
  
  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-barid-brown mb-4">
            Questions fréquemment posées
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-barid-brown/20 border-b pb-4">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-3 no-underline hover:no-underline">
                <h3 className="text-barid-brown text-lg font-medium text-left">
                  Comment effectuer un paiement chez nos partenaires ?
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-2 text-barid-brown/90 text-base">
                Rendez-vous dans l'une de nos agences avec votre pièce d'identité et le montant à payer. Nos conseillers vous accompagneront dans toutes vos démarches.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-barid-brown/20 border-b pb-4">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-3 no-underline hover:no-underline">
                <h3 className="text-barid-brown text-lg font-medium text-left">
                  Quels sont les horaires d'ouverture des agences ?
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-2 text-barid-brown/90 text-base">
                Nos agences sont ouvertes du lundi au vendredi de 8h à 16h30 et le samedi de 8h à 12h30.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-barid-brown/20 border-b pb-4">
              <AccordionTrigger className="flex justify-between items-center group p-0 py-3 no-underline hover:no-underline">
                <h3 className="text-barid-brown text-lg font-medium text-left">
                  Y a-t-il des frais pour les paiements partenaires ?
                </h3>
                <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </AccordionTrigger>
              <AccordionContent className="pt-3 pb-2 text-barid-brown/90 text-base">
                Les frais varient selon le type de service et le partenaire. Consultez nos agences pour connaître le détail de notre grille tarifaire.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FacturesAchatFaq;
