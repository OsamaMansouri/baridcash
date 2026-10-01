import React, { useEffect, useState, useRef } from "react";
import { Shield, Zap, MapPin } from "lucide-react";

const BaridESignAdvantages: React.FC = () => {
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

  const advantages = [
    {
      icon: Shield,
      title: "La sécurité des opérations",
      description:
        "Avec Barid Cash, effectuez votre demande et récupérez votre certification en toute sécurité.",
      accent: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Zap,
      title: "Un service simple",
      description:
        "Barid Cash vous permet de réaliser votre demande de manière rapide et en toute simplicité.",
      accent: "from-green-500/20 to-green-600/20",
    },
    {
      icon: MapPin,
      title: "Une proximité de nos agences",
      description:
        "Avec son large réseau d'agences dans tout le Maroc, Barid Cash est à vos côtés pour vous simplifier votre quotidien.",
      accent: "from-purple-500/20 to-purple-600/20",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Corporate background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-barid-brown/5 to-transparent transform -skew-x-12"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-gradient-to-tl from-barid-orange/5 to-transparent transform skew-x-6"></div>

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

                  <p className="text-gray-700 leading-relaxed">
                    {advantage.description}
                  </p>
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

export default BaridESignAdvantages;
