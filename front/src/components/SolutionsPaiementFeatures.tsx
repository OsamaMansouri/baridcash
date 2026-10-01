import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Users, Shield, MapPin } from 'lucide-react';

const SolutionsPaiementFeatures: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Users className="h-12 w-12 text-barid-orange" />,
      title: "Une cible plus étendue",
      description: "Avec Barid Cash vous pouvez toucher une cible plus élargie, qui ne dispose pas d'une carte bancaire."
    },
    {
      icon: <Shield className="h-12 w-12 text-barid-orange" />,
      title: "Un service sécurisé et fiable",
      description: "Après chaque paiement, vous êtes directement notifiés et un token unique par client est alors généré, vous permettant une visibilité de l'ensemble des transactions."
    },
    {
      icon: <MapPin className="h-12 w-12 text-barid-orange" />,
      title: "Un large réseau d'agences",
      description: "Grâce à son large réseau d'agences, Barid Cash vous permet la réception des paiements sur l'ensemble du territoire marocain."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-barid-brown text-center mb-12 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Barid Cash c'est :
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={(el) => cardsRef.current[index] = el}
                className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="p-8 h-full text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-barid-brown mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPaiementFeatures;