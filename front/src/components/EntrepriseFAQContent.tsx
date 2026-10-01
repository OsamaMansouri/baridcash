import React, { useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { Package, CreditCard, HandCoins, FileText } from 'lucide-react';

const EntrepriseFAQContent: React.FC = () => {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Amana E-commerce Section */}
          <div 
            ref={(el) => sectionsRef.current[0] = el}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="flex items-center gap-4 mb-6">
              <Package className="h-8 w-8 text-barid-orange" />
              <h2 className="text-3xl font-bold text-barid-brown">Amana E-commerce :</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="amana-1" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez quels sont les e-commerçants concernés par ce service ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  Ce service est destiné à l'ensemble des e-commerçants quel que soit leur secteur d'activité.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="amana-2" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez quels sont les éléments à renseigner pour l'envoi de votre colis ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Le nom ou le numéro de contrat de votre client</li>
                    <li>Les informations liées au destinataire et à la destination d'envoi du colis</li>
                    <li>Le poids du colis</li>
                    <li>Le canal de livraison (à domicile, en agence ou point-relais)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Barid Pay Pro Section */}
          <div 
            ref={(el) => sectionsRef.current[1] = el}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="flex items-center gap-4 mb-6">
              <CreditCard className="h-8 w-8 text-barid-orange" />
              <h2 className="text-3xl font-bold text-barid-brown">Barid Pay Pro :</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="baridpay-1" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez quelles sont les pièces à fournir afin de souscrire au compte Barid Pay Pro ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4 space-y-6">
                  <div>
                    <h4 className="font-bold text-barid-brown mb-2">Professionnel – Entrepreneur individuel</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>CIN</li>
                      <li>Extrait du RC</li>
                      <li>Numéro d'identification fiscale</li>
                      <li>Numéro de patente</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-barid-brown mb-2">Professionnel – Auto-Entrepreneur</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>CIN</li>
                      <li>Attestation d'inscription au registre national de l'Auto-entrepreneur (le N° de patente et l'identifiant fiscal y figurent)</li>
                      <li>Carte de l'Auto-entrepreneur (le N° d'Auto-entrepreneur y figure)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-barid-brown mb-2">Professionnel – Artisan</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>CIN</li>
                      <li>Carte d'artisan</li>
                      <li>Extrait du RC</li>
                      <li>N° de patente</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-barid-brown mb-2">Professionnel – Profession libérale</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>CIN</li>
                      <li>Titre d'exercice délivré par un ordre (Médecin – Avocat – Notaire – Vétérinaire …)</li>
                      <li>Autorisation administrative d'exercer</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-barid-brown mb-2">Complément obligatoire</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Convention de Compte de paiement</li>
                      <li>Compte rendu d'entrée en relation signé par le client</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="baridpay-2" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez quel est le montant de la commission que vous percevez ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  <p className="mb-4 font-semibold">Commission selon tranche de montant :</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <p>1. Jusqu'à 200 dhs → 3 dhs</p>
                      <p>2. 201 – 500 dhs → 10 dhs</p>
                      <p>3. 501 – 1 000 dhs → 15 dhs</p>
                      <p>4. 1 001 – 2 000 dhs → 20 dhs</p>
                      <p>5. 2 001 – 3 000 dhs → 25 dhs</p>
                    </div>
                    <div className="space-y-2">
                      <p>6. 3 001 – 4 000 dhs → 25 dhs</p>
                      <p>7. 4 001 – 5 000 dhs → 25 dhs</p>
                      <p>8. 5 001 – 10 000 dhs → 35 dhs</p>
                      <p>9. 10 001 – 20 000 dhs → 0,35 % du montant</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Le service de mise à disposition Section */}
          <div 
            ref={(el) => sectionsRef.current[2] = el}
            className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <div className="flex items-center gap-4 mb-6">
              <HandCoins className="h-8 w-8 text-barid-orange" />
              <h2 className="text-3xl font-bold text-barid-brown">Le service de mise à disposition :</h2>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="service-1" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez comment disposer de ce service ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-barid-orange mt-1 flex-shrink-0" />
                    <div>
                      <p className="mb-3">
                        Il vous suffit de remplir le formulaire suivant :
                      </p>
                      <Link 
                        to="/devenir-partenaire"
                        className="text-barid-orange hover:text-barid-orange/80 font-semibold underline transition-colors duration-300"
                      >
                        Formulaire "Devenir Partenaire"
                      </Link>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="service-2" className="border border-gray-200 rounded-lg bg-barid-background px-6">
                <AccordionTrigger className="text-left text-lg font-semibold text-barid-brown hover:text-barid-orange transition-colors">
                  Vous vous demandez comment se fait le retrait d'argent ?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-4">
                  La personne concernée se présente à l'agence Barid Cash la plus proche, munie de sa carte d'identité en cours de validité.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EntrepriseFAQContent;