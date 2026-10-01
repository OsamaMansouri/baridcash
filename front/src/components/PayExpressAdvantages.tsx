import React, { useEffect, useState, useRef } from "react";
import { Users, Shield, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PayExpressAdvantages: React.FC = () => {
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
      icon: Users,
      title: "Une cible plus étendue",
      description:
        "Avec Barid Cash vous pouvez toucher une cible plus élargie, qui ne dispose pas d'une carte bancaire.",
      accent: "from-blue-500/20 to-blue-600/20",
    },
    {
      icon: Shield,
      title: "Un service sécurisé et fiable",
      description:
        "Après chaque paiement, vous êtes directement notifiés et un token unique par client est alors généré, vous permettant une visibilité de l'ensemble des transactions.",
      accent: "from-green-500/20 to-green-600/20",
    },
    {
      icon: MapPin,
      title: "Un large réseau d'agences",
      description:
        "Grâce à son large réseau d'agences, Barid Cash vous permet la réception des paiements sur l'ensemble du territoire marocain.",
      accent: "from-orange-500/20 to-orange-600/20",
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
            Barid Cash c'est :
          </h2>
          <div
            className={`w-24 h-1 bg-white mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
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
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 group-hover:transform group-hover:scale-105 overflow-hidden h-full">
                {/* Professional geometric accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${advantage.accent} rounded-bl-3xl opacity-50`}
                ></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-2xl"></div>

                <div className="relative z-10 text-center">
                  {/* Professional icon container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gradient-to-br group-hover:from-white/30 group-hover:to-white/20 transition-all duration-300">
                    <advantage.icon className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-barid-orange transition-colors duration-300">
                    {advantage.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                {/* Corporate hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-barid-orange to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transition-all duration-1000 delay-1000 relative z-50 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button
            onClick={() => {
              console.log("Button clicked!");
              window.location.href = "/devenir-partenaire";
            }}
            className="bg-white text-barid-brown hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer relative z-50"
            style={{ pointerEvents: "auto" }}
          >
            Devenez partenaire
          </button>
        </div>

        {/* Corporate design element */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default PayExpressAdvantages;
