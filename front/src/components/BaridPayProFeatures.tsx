import React, { useRef, useEffect, useState } from 'react';
import { CreditCard, Users, ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

const BaridPayProFeatures: React.FC = () => {
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

  const features = [
    {
      title: "Accepter le paiement mobile",
      description: "D'accepter le paiement mobile de marchandises ou services de la part des clients Barid Cash ou confrères",
      icon: CreditCard
    },
    {
      title: "Paiement des fournisseurs",
      description: "D'effectuer le paiement des fournisseurs",
      icon: Users
    },
    {
      title: "Dépôt d'argent",
      description: "De faire un dépôt d'argent sur le compte de paiement d'un client Barid Cash",
      icon: ArrowDownCircle
    },
    {
      title: "Retrait d'argent",
      description: "De faire un retrait d'argent du compte de paiement d'un client Barid Cash",
      icon: ArrowUpCircle
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-white mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Elle vous permet :
          </h2>
          <div className={`w-24 h-1 bg-barid-orange mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

export default BaridPayProFeatures;