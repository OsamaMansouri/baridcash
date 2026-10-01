import React, { useRef, useEffect, useState } from "react";
import { Smartphone, Settings, Clock, Shield, DollarSign } from "lucide-react";

const BaridPayProAdvantages: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const advantages = [
    {
      title: "Un service accessible",
      icon: Smartphone,
      points: [
        "Quel que soit l'opérateur téléphonique",
        "Quelle que soit la génération du Smartphone",
        "Avec une couverture nationale, aussi bien urbaine que rurale",
      ],
      accent: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "Un service simple d'utilisation",
      icon: Settings,
      points: [
        "Une ergonomie simple et adaptée.",
        "Une application disponible en 2 versions : en Arabe et en Français",
      ],
      accent: "from-green-500/20 to-green-600/20",
    },
    {
      title: "Un service commode",
      icon: Clock,
      points: ["Les services sont disponibles 7j/7 et 24h/24."],
      accent: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Un service sécurisé",
      icon: Shield,
      points: [
        "Barid Pay Pro est une application sécurisée qui se base sur un système à double code :",
        "Un code d'activation : il s'agit du code à usage unique que vous recevez par sms sur votre téléphone pour accéder à l'application lors de la 1ère connexion au service.",
        "Un code d'authentification : il s'agit du code exigé à chaque connexion et à chaque transaction.",
      ],
      accent: "from-red-500/20 to-red-600/20",
    },
    {
      title: "Une tarification avantageuse",
      icon: DollarSign,
      points: [
        "Souscription gratuite",
        "Sans frais de tenue de compte",
        "Tarification à l'acte",
      ],
      accent: "from-yellow-500/20 to-yellow-600/20",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-barid-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-barid-brown mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Barid Pay Pro c'est :
          </h2>
          <div
            className={`w-24 h-1 bg-barid-orange mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              {/* Corporate card with geometric design */}
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 border border-gray-100 overflow-hidden h-full">
                {/* Professional geometric accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${advantage.accent} rounded-bl-3xl opacity-50`}
                ></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-barid-orange/10 rounded-tr-2xl"></div>

                <div className="relative z-10 text-center">
                  {/* Professional icon container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-barid-brown/10 to-barid-brown/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-barid-brown/20 group-hover:to-barid-brown/10 transition-all duration-300">
                    <advantage.icon className="w-10 h-10 text-barid-brown group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-barid-brown mb-4 group-hover:text-barid-orange transition-colors duration-300">
                    {advantage.title}
                  </h3>

                  <div className="space-y-3 text-left">
                    {advantage.points.map((point, pointIndex) => (
                      <div
                        key={pointIndex}
                        className="text-gray-700 leading-relaxed"
                      >
                        {point ===
                        "Barid Pay Pro est une application sécurisée qui se base sur un système à double code :" ? (
                          <span className="font-medium">{point}</span>
                        ) : (
                          <div className="flex items-start">
                            <div className="w-2 h-2 bg-barid-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span
                              className={pointIndex === 0 ? "font-medium" : ""}
                            >
                              {point}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corporate hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-barid-orange to-barid-brown transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BaridPayProAdvantages;
