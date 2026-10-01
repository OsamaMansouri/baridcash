import React, { useRef, useEffect, useState } from "react";
import { MapPin, Calendar, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const AmanaECommerceAdvantages: React.FC = () => {
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
      title: "Une proximité de service",
      description:
        "Grâce au large réseau d'agences Barid Cash, réparties dans les différentes régions du royaume, la distribution des colis est possible où que vous soyez.",
      additionalText: "Découvrez l'agence la plus proche de chez vous !",
      hasLink: true,
      icon: MapPin,
      accent: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "Un service disponible 6 jours sur 7",
      description: "Les agences Barid Cash sont ouvertes du lundi au samedi.",
      additionalText: "",
      hasLink: false,
      icon: Calendar,
      accent: "from-green-500/20 to-green-600/20",
    },
    {
      title: "Un service sécurisé",
      description:
        "Les colis sont bien préservés afin d'éviter toute perte, dommage ou vol.",
      additionalText: "",
      hasLink: false,
      icon: Shield,
      accent: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Des tarifs avantageux",
      description: "Profitez de tarifs compétitifs pour vos envois e-commerce.",
      additionalText: "",
      hasLink: false,
      icon: DollarSign,
      accent: "from-yellow-500/20 to-yellow-600/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Corporate background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-barid-orange/5 to-transparent transform -skew-x-12"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-gradient-to-tl from-barid-brown/5 to-transparent transform skew-x-6"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-barid-brown mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Barid Cash c'est :
          </h2>
          <div
            className={`w-24 h-1 bg-barid-orange mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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

                  <p className="text-gray-700 leading-relaxed mb-4">
                    {advantage.description}
                  </p>

                  {advantage.additionalText && (
                    <div className="text-center">
                      {advantage.hasLink ? (
                        <Link
                          to="/nos-points-de-vente-en"
                          className="text-barid-orange hover:text-barid-brown transition-colors duration-300 font-semibold text-sm underline"
                        >
                          {advantage.additionalText}
                        </Link>
                      ) : (
                        <p className="text-gray-600 text-sm">
                          {advantage.additionalText}
                        </p>
                      )}
                    </div>
                  )}
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

export default AmanaECommerceAdvantages;
