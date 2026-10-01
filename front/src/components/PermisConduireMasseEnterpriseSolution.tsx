import React, { useEffect, useState, useRef } from 'react';
import { Users, MapPin, Clock } from 'lucide-react';

const PermisConduireMasseEntrepriseSolution: React.FC = () => {
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

  const features = [
    {
      icon: Users,
      title: "Service sur site",
      description: "Nos équipes se déplacent directement dans vos locaux pour traiter les dossiers de renouvellement."
    },
    {
      icon: MapPin,
      title: "Partenariat NARSA",
      description: "Bénéficiez de notre partenariat officiel avec l'Agence nationale de la sécurité routière."
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Vos collaborateurs n'ont plus besoin de se déplacer, optimisant ainsi leur temps de travail."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Renouvellement du permis de conduire de masse
          </h2>
          <div className={`w-24 h-1 bg-barid-orange mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-xl text-white/95 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Une solution exclusive pour faciliter le renouvellement des permis de conduire de vos équipes directement dans vos locaux.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              {/* Corporate card design */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:bg-white/90 hover:transform hover:scale-105 transition-all duration-300">
                {/* Professional corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-barid-orange/20 rounded-bl-2xl rounded-tr-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-barid-orange/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-barid-orange/30 transition-colors duration-300">
                    <feature.icon className="w-10 h-10 text-barid-orange" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-black mb-4 text-center transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/90 group-hover:text-gray-700 text-center leading-relaxed transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermisConduireMasseEntrepriseSolution;