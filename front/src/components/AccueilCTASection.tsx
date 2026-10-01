import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AccueilCTASection: React.FC = () => {
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
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-barid-brown via-barid-brown/95 to-barid-brown"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p
            className={`text-2xl lg:text-3xl text-white mb-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Pour davantage d'informations,
          </p>

          <Link to="/nous-contacter">
            <Button
              className={`bg-barid-orange hover:bg-barid-orange/90 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AccueilCTASection;
