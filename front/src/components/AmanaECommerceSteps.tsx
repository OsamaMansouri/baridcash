import React, { useRef, useEffect, useState } from "react";
import { UserPlus, MapPin, Package, CreditCard } from "lucide-react";

const AmanaECommerceSteps: React.FC = () => {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const processSteps = [
    {
      number: 1,
      title: "Rendez-vous à l'agence",
      description:
        "Rendez-vous en agence Barid Cash muni de votre carte d'identité en cours de validité et de votre colis.",
      icon: MapPin,
    },
    {
      number: 2,
      title: "Déposez votre colis",
      description:
        "Déposez votre colis en agence et remplir le formulaire d'envoi.",
      icon: Package,
    },
    {
      number: 3,
      title: "Payez les frais",
      description: "Payez les frais d'envoi de votre colis.",
      icon: CreditCard,
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-barid-cream">
      <div className="container mx-auto px-4">
        {/* Registration Section */}
        <div
          className={`max-w-4xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg p-8 shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-barid-orange p-4 rounded-full">
                <UserPlus className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-barid-brown mb-4">
              Inscription au service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Afin de bénéficier du service Amana E-Commerce, il vous suffit de
              vous inscrire en tant que « e-commerçant particulier » en
              remplissant le formulaire dédié au niveau de l'agence Barid Cash.
            </p>
          </div>
        </div>

        {/* Steps Section */}
        <div>
          <h2
            className={`text-3xl md:text-4xl font-bold text-center text-barid-brown mb-12 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Étapes après inscription
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className={`text-center transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${400 + index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="bg-barid-brown text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="bg-barid-orange p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto -mt-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-barid-brown mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmanaECommerceSteps;
