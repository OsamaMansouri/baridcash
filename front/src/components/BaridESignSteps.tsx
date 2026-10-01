import React, { useEffect, useState, useRef } from "react";
import { Globe, MapPin, CreditCard, User, Award } from "lucide-react";
import { Link } from "react-router-dom";

const BaridESignSteps: React.FC = () => {
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

  const steps = [
    {
      icon: Globe,
      title: "Saisir votre demande en ligne",
      description: "Connectez-vous sur le site : ",
      number: "01",
      hasExternalLink: true,
      externalLink: "https://online.baridesign.ma/logon/auth.do",
      externalLinkText: "https://online.baridesign.ma/logon/auth.do",
    },
    {
      icon: MapPin,
      title: "Déposer votre dossier en agence",
      description:
        "Rendez-vous à l'agence Barid Cash la plus proche avec votre dossier papier. Découvrez l'agence la plus proche !",
      number: "02",
      hasLink: true,
    },
    {
      icon: CreditCard,
      title: "Effectuer le paiement",
      description:
        "Payez par chèque la somme qui vous est due selon le tarif en vigueur.",
      number: "03",
    },
    {
      icon: User,
      title: "Se présenter en agence",
      description:
        "Présentez-vous à l'agence dès le traitement de votre demande pour finaliser la procédure.",
      number: "04",
    },
    {
      icon: Award,
      title: "Récupérer votre certificat",
      description:
        "Récupérez votre certificat électronique Barid e-sign en toute sécurité.",
      number: "05",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-barid-brown mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Votre demande en quelques étapes
          </h2>
          <div
            className={`w-24 h-1 bg-barid-orange mx-auto mb-8 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Il vous suffit de suivre ces étapes simples pour obtenir votre
            certificat Barid e-sign
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:grid-rows-1">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${400 + index * 200}ms` }}
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-barid-orange/30 to-barid-orange/15 z-0"></div>
                )}

                {/* Step card */}
                <div className="relative bg-barid-orange/5 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 group hover:transform hover:scale-102 border border-gray-100 min-h-[280px] flex flex-col h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-6 w-12 h-12 bg-gradient-to-br from-barid-orange to-barid-orange/80 rounded-full flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-lg">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon container */}
                  <div className="w-16 h-16 bg-barid-orange/5 rounded-2xl flex items-center justify-center mb-6 mt-4 mx-auto group-hover:bg-barid-orange/10 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-barid-brown" />
                  </div>

                  <h3 className="text-base font-bold text-barid-brown mb-3 text-center leading-tight">
                    {step.title}
                  </h3>

                  <p className="text-gray-500 text-center leading-relaxed text-sm flex-grow break-words overflow-wrap-anywhere">
                    {step.description}
                    {step.hasExternalLink && (
                      <a
                        href={step.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-barid-orange hover:text-barid-orange/80 font-medium transition-colors duration-300 hover:underline break-all"
                      >
                        {step.externalLinkText}
                      </a>
                    )}
                  </p>

                  {step.hasLink && (
                    <div className="mt-auto pt-3 text-center">
                      <Link
                        to="/nos-points-de-vente-en"
                        className="text-barid-orange hover:text-barid-orange/80 font-medium text-sm transition-colors duration-300 hover:underline"
                      >
                        Trouver une agence →
                      </Link>
                    </div>
                  )}

                  {/* Corporate accent corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-barid-orange/5 rounded-tl-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate design elements */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-barid-orange/5 to-transparent h-1 top-1/2 transform -translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default BaridESignSteps;
