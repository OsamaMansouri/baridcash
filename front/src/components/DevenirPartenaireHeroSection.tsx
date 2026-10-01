import React, { useEffect, useState, useRef } from 'react';

const DevenirPartenaireHeroSection: React.FC = () => {
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

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden bg-gradient-to-br from-barid-background to-white">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-barid-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-barid-brown/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className={`text-4xl lg:text-6xl font-bold text-gray-900 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Devenir Partenaire
          </h1>
          
          <div className={`w-24 h-1 bg-barid-orange mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          
          <div className={`space-y-6 text-lg text-gray-700 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p>
              Vous souhaitez devenir partenaire ? Barid Cash est à votre disposition afin de répondre à toutes vos questions. Contactez-nous !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevenirPartenaireHeroSection;