import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const SolutionsPaiementCTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="max-w-2xl mx-auto text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
        >
          <Link to="/devenir-partenaire">
            <Button className="bg-barid-orange hover:bg-barid-orange/90 text-white font-bold py-4 px-12 rounded-[1.5rem] uppercase text-lg w-full md:w-auto">
              Devenez partenaire
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPaiementCTA;