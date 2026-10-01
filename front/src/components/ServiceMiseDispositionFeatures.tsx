import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Shield, MapPin } from "lucide-react";

const ServiceMiseDispositionFeatures: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Des opérations flexibles",
      description:
        "Avec Barid Cash vous pouvez émettre des transferts massifs comme unitaires, aux destinataires que vous souhaitez.",
      color: "text-yellow-500",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Un service sécurisé et fiable",
      description:
        "Avant la récupération de tout mandat, Barid Cash s'assure de l'identité de la personne à travers la consultation de sa carte d'identité nationale.",
      color: "text-blue-500",
    },
    {
      icon: <MapPin className="h-12 w-12" />,
      title: "Un large réseau d'agences",
      description:
        "Grâce à son large réseau d'agences, Barid Cash vous permet l'envoi de mandats à vos collaborateurs ou employés où qu'ils soient.",
      color: "text-green-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-barid-brown via-barid-brown/90 to-barid-brown overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-lg rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-white text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Barid Cash c'est :
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 h-full hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div
                    className={`flex justify-center mb-6 ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={buttonRef}
            className="text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            <Link to="/devenir-partenaire">
              <Button className="bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105">
                Devenez partenaire
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMiseDispositionFeatures;
