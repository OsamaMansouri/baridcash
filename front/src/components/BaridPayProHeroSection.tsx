import React, { useState, useRef, useEffect } from "react";

const BaridPayProHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-barid-brown/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-barid-orange/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-barid-brown to-barid-orange opacity-20 rounded-lg rotate-45"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[60vh]">
          {/* Text content */}
          <div className="space-y-6">
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold text-barid-brown leading-tight transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Barid Pay Pro
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-700 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Destinée aux commerçants, Barid Pay Pro est une application mobile
              qui permet aux professionnels d'effectuer une multitude
              d'opérations financières, instantanées et sécurisées.
            </p>
          </div>

          {/* Illustration */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-barid-brown to-barid-orange rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-barid-brown">Pro</div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-barid-orange rounded-lg rotate-12 shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-barid-brown rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BaridPayProHeroSection;
