import React, { useEffect, useRef } from 'react';

const EntrepriseContactHeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 300 },
      { ref: introRef, delay: 600 }
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
    <section className="bg-barid-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-barid-brown mb-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out pt-12 md:pt-0"
          >
            Contact
          </h1>
          
          <p 
            ref={introRef}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Vous avez des questions concernant nos services ? Barid Cash est à votre disposition afin d'y répondre. Contactez-nous !
          </p>
        </div>
      </div>
    </section>
  );
};

export default EntrepriseContactHeroSection;