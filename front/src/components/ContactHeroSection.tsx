import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ContactHeroSection: React.FC = () => {
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
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-barid-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-barid-brown/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-barid-orange/5 rounded-full blur-3xl"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-barid-orange rotate-45 opacity-60"></div>
        <div className="absolute top-1/3 left-1/4 w-6 h-6 border-2 border-barid-brown/30 rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-1 bg-barid-brown/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-5xl">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-barid-brown/10 rounded-full mb-8">
              <MessageCircle className="w-5 h-5 text-barid-brown mr-2" />
              <span className="text-barid-brown font-medium">Contact</span>
            </div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-barid-brown mb-8 leading-tight">
              Nous <span className="text-barid-orange">Contacter</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Vous avez des questions concernant nos services ? Barid Cash est à votre disposition afin d'y répondre. Contactez-nous !
            </p>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactHeroSection;