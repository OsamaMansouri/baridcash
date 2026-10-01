import React from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, ArrowRight } from "lucide-react";
const FacturesEauElectriciteQuestions: React.FC = () => {
  return (
    <section className="bg-barid-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-barid-brown text-center mb-12">
            Nous répondons à vos questions
          </h2>
          
          <div className="bg-barid-brown rounded-2xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left group">
                  <span>Comment payer mes factures d'eau et d'électricité ?</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90">
                  Vous pouvez payer vos factures de deux façons : en vous rendant dans une agence Barid Cash avec votre facture, ou directement depuis l'application Barid Pay en sélectionnant "Paiement factures".
                  <Link to="/nos-points-de-vente" className="inline-flex items-center text-barid-orange hover:text-barid-orange/80 mt-2 font-medium">
                    Trouvez votre agence
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left group">
                  <span>Quels documents dois-je apporter en agence ?</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90">
                  Vous devez apporter votre facture originale ou votre numéro de contrat. Une pièce d'identité peut également être demandée selon le montant.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left group">
                  <span>Y a-t-il des frais pour le paiement de factures ?</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90">
                  Le paiement de factures via Barid Pay est gratuit. En agence, des frais de service minimes peuvent s'appliquer selon le type de facture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-white/20">
                <AccordionTrigger className="text-white hover:text-white/80 text-left group">
                  <span>Puis-je programmer des paiements automatiques ?</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-white transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </AccordionTrigger>
                <AccordionContent className="text-white/90">
                  Actuellement, les paiements automatiques ne sont pas disponibles. Vous devez effectuer chaque paiement manuellement via l'application ou en agence.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FacturesEauElectriciteQuestions;