import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const AccueilServicesSection: React.FC = () => {
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

  const services = [
    {
      id: 1,
      title: "Barid Pay Pro",
      description:
        "Destinée aux commerçants, Barid Pay Pro est une application mobile qui permet aux professionnels d'effectuer une multitude d'opérations financières, instantanées et sécurisées.",
      path: "/barid-pay-pro",
    },
    {
      id: 2,
      title: "Amana Pro",
      description:
        "Service destiné aux e-commerçants, Amana E-Commerce permet le dépôt des colis en agence avec des tarifs avantageux.",
      path: "/amana-ecommerce",
    },
    {
      id: 3,
      title: "Barid e-sign",
      description:
        "Barid Cash vous permet de bénéficier de Barid e-sign, une solution d'authentification électronique pour vos différents échanges électroniques.",
      path: "/barid-e-sign",
    },
    {
      id: 4,
      title: "Renouvellement du permis de conduire de masse",
      description:
        "Exclusif : Renouvellement des permis de conduire en masse pour les entreprises et organisations.",
      path: "/permis-conduire-masse-entreprise",
    },
    {
      id: 5,
      title: "Service de mise à disposition",
      description:
        "Solution complète pour la mise à disposition de personnel et services pour votre entreprise.",
      path: "/service-mise-disposition",
    },
    {
      id: 6,
      title: "Forever",
      description:
        "Vous êtes distributeur Forever ? Avec Barid Cash vous êtes en mesure de payer vos commandes en toute facilité.",
      path: "/forever",
    },
    {
      id: 7,
      title: "PayExpress",
      description:
        "Les solutions de paiement rapides et sécurisées pour votre entreprise.",
      path: "/pay-express",
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
            Nos Services
          </h2>
          <div
            className={`w-24 h-1 bg-barid-orange mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <Link to={service.path}>
                <div className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-barid-orange/5 border border-gray-100 h-full group">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-barid-brown mb-4 group-hover:text-barid-orange transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-barid-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-barid-orange/20 rounded-full group-hover:bg-barid-orange/40 transition-colors duration-300"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccueilServicesSection;
