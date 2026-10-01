import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CreditCard } from "lucide-react";

const PayExpressHeroSection: React.FC = () => {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Corporate geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-barid-orange/10 to-transparent transform -skew-x-12"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-2/3 bg-gradient-to-tl from-white/5 to-transparent transform skew-x-6"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-barid-orange/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center px-4 py-2 bg-barid-brown/10 rounded-full mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <CreditCard className="w-5 h-5 text-barid-brown mr-2" />
            <span className="text-barid-brown font-medium">
              Solutions de Paiement
            </span>
          </div>

          <h1
            className={`text-4xl lg:text-6xl font-bold text-barid-brown mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Les solutions de paiement
          </h1>

          <p
            className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Vous exercez une activité commerciale et vous souhaitez proposer une
            alternative de paiement à vos clients ? C'est possible ! Barid Cash
            permet à vos clients de payer en espèces leurs achats au sein de
            l'agence la plus proche de chez eux.
          </p>
        </div>
      </div>

      {/* Corporate design element */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
    </section>
  );
};

export default PayExpressHeroSection;
