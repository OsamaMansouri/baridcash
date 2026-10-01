import React, { useEffect, useRef } from 'react';

const AmanaECommerceHeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 300 },
      { ref: textRef, delay: 600 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0');
        }, delay);
      }
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-barid-background to-gray-100 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-barid-orange rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-barid-brown rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-barid-brown mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Amana E-Commerce
          </h1>
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-gray-700 leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out max-w-3xl mx-auto"
          >
            Service destiné aux e-commerçants, Amana E-Commerce permet le dépôt des colis en agence avec des tarifs avantageux.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmanaECommerceHeroSection;