import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ForeverCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-40 h-40 bg-barid-orange rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-32 h-32 bg-barid-brown rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={sectionRef}
          className="max-w-2xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-barid-brown mb-8">
            Vous désirez en savoir plus ?
          </h2>

          <Link to="/nous-contacter">
            <Button className="bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-12 rounded-[1.5rem] uppercase text-lg w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Contactez-nous !
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ForeverCTA;
