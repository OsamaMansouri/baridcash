import React, { useEffect, useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VosQuestionsContent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const commissionData = [
    { tranche: "1", montant: "0 à 200", commission: "3 Dhs" },
    { tranche: "2", montant: "201 à 500", commission: "10 Dhs" },
    { tranche: "3", montant: "501 à 1 000", commission: "10 Dhs" },
    { tranche: "4", montant: "1 001 à 2 000", commission: "20 Dhs" },
    { tranche: "5", montant: "2 001 à 3 000", commission: "25 Dhs" },
    { tranche: "6", montant: "3 001 à 4 000", commission: "25 Dhs" },
    { tranche: "7", montant: "4 001 à 5 000", commission: "25 Dhs" },
    { tranche: "8", montant: "5 001 à 10 000", commission: "35 Dhs" },
    {
      tranche: "9",
      montant: "10 001 à 20 000",
      commission: "0,35 % du montant",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative bg-barid-brown">
      {/* Brown background overlay */}
      <div className="absolute inset-0 bg-barid-brown"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Accordion type="single" collapsible className="w-full space-y-8">
              {/* Amana E-commerce Section */}
              <AccordionItem value="amana-ecommerce" className="border-0">
                <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/95 transition-all duration-300">
                  <AccordionTrigger className="text-white hover:text-barid-orange px-8 py-6 text-left bg-barid-brown/80">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-2xl font-bold">Amana E-commerce</h2>
                      <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez quels sont les e-commerces
                          concernés par ce service ?
                        </h3>
                        <p className="text-gray-700">
                          Ce service est destiné à l'ensemble des e-commerces
                          quel que soit leur secteur d'activité.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez quels sont les éléments à
                          renseigner pour l'envoi de votre colis ?
                        </h3>
                        <p className="text-gray-700 mb-3">
                          Afin d'envoyer votre colis, il vous suffit de
                          renseigner :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                          <li>
                            Le nom ou le numéro de contact de votre client
                          </li>
                          <li>
                            Les informations liées au destinataire et à la
                            destination d'envoi du colis
                          </li>
                          <li>Le poids du colis</li>
                          <li>
                            La contre remboursement (si applicable, sur point
                            relais)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>

              {/* Barid Pay Pro Section */}
              <AccordionItem value="barid-pay-pro" className="border-0">
                <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/95 transition-all duration-300">
                  <AccordionTrigger className="text-white hover:text-barid-orange px-8 py-6 text-left bg-barid-brown/80">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-2xl font-bold">Barid Pay Pro</h2>
                      <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez quelles sont les pièces à fournir
                          afin de souscrire au compte Barid Pay Pro ?
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Les pièces nécessaires pour souscrire au compte Barid
                          Pay Pro, en tant que :
                        </p>

                        <div className="space-y-4">
                          <div className="bg-barid-orange/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-barid-brown mb-2">
                              Professionnel - Entrepreneur individuel :
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• CIN (Carte d'identité nationale)</li>
                              <li>• Extrait du RC (Registre de commerce)</li>
                              <li>• Numéro d'identification fiscale</li>
                              <li>• Numéro de patente</li>
                            </ul>
                          </div>

                          <div className="bg-barid-orange/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-barid-brown mb-2">
                              Professionnel - Auto-Entrepreneur :
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• CIN (Carte d'identité nationale)</li>
                              <li>
                                • Attestation d'inscription au registre national
                                de l'Auto-entrepreneur (incluant le numéro de
                                patente et l'identifiant fiscal)
                              </li>
                              <li>
                                • Carte de l'Auto-entrepreneur (incluant le
                                numéro d'Auto-entrepreneur)
                              </li>
                            </ul>
                          </div>

                          <div className="bg-barid-orange/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-barid-brown mb-2">
                              Professionnel - Artisan :
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• CIN (Carte d'identité nationale)</li>
                              <li>• Carte d'artisan</li>
                              <li>• Extrait du RC (Registre de commerce)</li>
                              <li>• N° de patente</li>
                            </ul>
                          </div>

                          <div className="bg-barid-orange/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-barid-brown mb-2">
                              Professionnel - Profession libérale :
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• CIN (Carte d'identité nationale)</li>
                              <li>
                                • Titre d'exercice délivré par un ordre (ex:
                                Médecin - Avocat - Notaire - Vétérinaire...)
                              </li>
                              <li>• Autorisation administrative d'exercer</li>
                            </ul>
                          </div>

                          <div className="bg-barid-orange/10 p-4 rounded-lg">
                            <h4 className="font-semibold text-barid-brown mb-2">
                              Les compléments obligatoires :
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Convention de Compte de paiement</li>
                              <li>
                                • Compte rendu d'entrée en relation signé par le
                                client
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez quel est le montant de la
                          commission que vous percevez ?
                        </h3>

                        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-200">
                          <table className="w-full border-collapse text-sm">
                            <thead>
                              <tr className="bg-gradient-to-r from-barid-brown to-barid-brown/90 text-white">
                                <th className="px-6 py-4 text-left font-semibold">
                                  Tranche
                                </th>
                                <th className="px-6 py-4 text-left font-semibold">
                                  Montant (Dhs)
                                </th>
                                <th className="px-6 py-4 text-left font-semibold">
                                  Commission
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white">
                              {commissionData.map((row, index) => (
                                <tr
                                  key={index}
                                  className={`transition-colors hover:bg-barid-orange/5 ${
                                    index % 2 === 0
                                      ? "bg-gray-50/50"
                                      : "bg-white"
                                  }`}
                                >
                                  <td className="px-6 py-4 text-center font-medium text-barid-brown">
                                    {row.tranche}
                                  </td>
                                  <td className="px-6 py-4 text-gray-700">
                                    {row.montant}
                                  </td>
                                  <td className="px-6 py-4">
                                    <div className="font-semibold text-barid-orange">
                                      {row.commission}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>

              {/* Service disponible Section */}
              <AccordionItem value="service-disponible" className="border-0">
                <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:bg-white/95 transition-all duration-300">
                  <AccordionTrigger className="text-white hover:text-barid-orange px-8 py-6 text-left bg-barid-brown/80">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-2xl font-bold">
                        Le service de mise à disposition
                      </h2>
                      <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 py-6 bg-white">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez comment disposer de ce service ?
                        </h3>
                        <p className="text-gray-700 mb-4">
                          Afin de disposer de ce service, il vous suffit de
                          remplir le formulaire suivant :{" "}
                          <Link
                            to="/devenir-partenaire"
                            className="text-barid-orange hover:text-barid-orange/80 font-semibold underline transition-colors duration-300"
                          >
                            devenir partenaire
                          </Link>
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-barid-brown mb-3">
                          Vous vous demandez comment se fait le retrait d'argent
                          ?
                        </h3>
                        <p className="text-gray-700">
                          Il suffit à la personne concernée de se présenter à
                          l'agence <strong>Barid Cash</strong>, la plus proche
                          de chez elle, munie de sa carte d'identité ou carte de
                          séjour valide.
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VosQuestionsContent;
