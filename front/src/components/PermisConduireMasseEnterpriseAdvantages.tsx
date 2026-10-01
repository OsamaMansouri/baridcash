import React, { useEffect, useState, useRef } from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const PermisConduireMasseEnterpriseAdvantages: React.FC = () => {
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
      title: "Sécurité et fiabilité",
      description: "Processus sécurisé en partenariat avec la NARSA pour garantir la validité des renouvellements.",
      accentColor: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Rapidité d'exécution",
      description: "Traitement rapide et efficace directement dans vos locaux, sans interruption de service.",
      accentColor: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "Service personnalisé",
      description: "Équipe dédiée qui s'adapte à vos besoins spécifiques et à votre planning d'entreprise.",
      accentColor: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-barid-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-barid-brown/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Pourquoi choisir notre service ?
          </h2>
          <div className={`w-24 h-1 bg-barid-orange mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Corporate card with enhanced hover effects */}
              <div className="relative bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100">
                {/* Gradient accent corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${advantage.accentColor} opacity-10 rounded-bl-2xl rounded-tr-2xl`}></div>
                
                {/* Icon with gradient background */}
                <div className={`w-20 h-20 bg-gradient-to-br ${advantage.accentColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <advantage.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-barid-brown transition-colors duration-300">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 text-center leading-relaxed">
                  {advantage.description}
                </p>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${advantage.accentColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PermisConduireMasseEnterpriseAdvantages;