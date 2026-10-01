import React, { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const BaridPayProFAQ: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  const faqData = [
    {
      question:
        "Vous vous demandez quelles sont les pièces à fournir afin de souscrire au compte Barid Pay Pro ?",
      answer: {
        sections: [
          {
            title: "Professionnel – Entrepreneur individuel",
            items: [
              "CIN",
              "Extrait du RC",
              "Numéro d'identification fiscale",
              "Numéro de patente",
            ],
          },
          {
            title: "Professionnel – Auto-Entrepreneur",
            items: [
              "CIN",
              "Attestation d'inscription au registre national de l'Auto-entrepreneur (le N° de patente et l'identifiant fiscal y figurent)",
              "Carte de l'Auto-entrepreneur (le N° d'Auto-entrepreneur y figure)",
            ],
          },
          {
            title: "Professionnel – Artisan",
            items: ["CIN", "Carte d'artisan", "Extrait du RC", "N° de patente"],
          },
          {
            title: "Professionnel – Profession libérale",
            items: [
              "CIN",
              "Titre d'exercice délivré par un ordre (Médecin – Avocat – Notaire – Vétérinaire …)",
              "Autorisation administrative d'exercer",
            ],
          },
          {
            title: "Complément obligatoire",
            items: [
              "Convention de Compte de paiement",
              "Compte rendu d'entrée en relation signé par le client",
            ],
            highlight: true,
          },
        ],
      },
    },
    {
      question:
        "Vous vous demandez quel est le plafond du compte destiné aux professionnels ?",
      answer: {
        text: "Le compte destiné au professionnel est déplafonné",
      },
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nous répondons à vos questions
          </h2>
          <div
            className={`w-24 h-1 bg-barid-orange mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Corporate card design */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden group/card hover:bg-white/90 transition-all duration-300">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="flex justify-between items-center group px-8 py-6 hover:bg-white/5 transition-colors">
                      <h3 className="text-white group-hover:text-barid-brown text-lg font-semibold text-left pr-4 transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <ChevronDown className="h-6 w-6 shrink-0 text-barid-orange transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </AccordionTrigger>
                    <AccordionContent className="px-8 pb-6">
                      <div className="pt-6 space-y-6">
                        {faq.answer.sections &&
                          faq.answer.sections.map((section, sectionIndex) => (
                            <div
                              key={sectionIndex}
                              className={`rounded-lg p-6 ${
                                section.highlight
                                  ? "bg-barid-orange/20 border border-barid-orange/30 group-hover/card:bg-barid-orange/10"
                                  : "bg-white/20 group-hover/card:bg-gray-100"
                              }`}
                            >
                              <h4 className="font-bold text-white group-hover/card:text-gray-900 mb-3 transition-colors duration-300">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="text-white/90 group-hover/card:text-gray-700 leading-relaxed flex items-start transition-colors duration-300"
                                  >
                                    <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                        {(faq.answer as any).table && (
                          <div className="bg-white/20 group-hover/card:bg-gray-100 rounded-lg p-6 transition-colors duration-300">
                            <h4 className="font-bold text-white group-hover/card:text-gray-900 mb-6 transition-colors duration-300">
                              Commission selon tranche de montant :
                            </h4>
                            <div className="overflow-x-auto">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b border-white/20 group-hover/card:border-gray-300">
                                    <th className="text-left py-3 text-white group-hover/card:text-gray-900 font-semibold transition-colors duration-300">
                                      N° Tranche
                                    </th>
                                    <th className="text-left py-3 text-white group-hover/card:text-gray-900 font-semibold transition-colors duration-300">
                                      Tranches de montants
                                    </th>
                                    <th className="text-right py-3 text-white group-hover/card:text-gray-900 font-semibold transition-colors duration-300">
                                      Commissions en Dh TTC
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {(faq.answer as any).table.map((row, rowIndex) => (
                                    <tr
                                      key={rowIndex}
                                      className="border-b border-white/10 group-hover/card:border-gray-200"
                                    >
                                      <td className="py-3 text-white/90 group-hover/card:text-gray-700 transition-colors duration-300">
                                        {row.slice}
                                      </td>
                                      <td className="py-3 text-white/90 group-hover/card:text-gray-700 transition-colors duration-300">
                                        {row.range}
                                      </td>
                                      <td className="py-3 text-right font-semibold text-barid-orange">
                                        {row.commission}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {faq.answer.text && (
                          <div className="bg-white/20 group-hover/card:bg-gray-100 rounded-lg p-6 transition-colors duration-300">
                            <p className="text-white/90 group-hover/card:text-gray-700 leading-relaxed text-lg">
                              {faq.answer.text}
                            </p>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BaridPayProFAQ;
