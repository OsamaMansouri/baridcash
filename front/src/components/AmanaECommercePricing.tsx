import React, { useRef, useEffect, useState } from 'react';

const AmanaECommercePricing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const intraVillePricing = [
    { weight: "De 0,01 jusqu'à 1 kg", domicile: "30 DH TTC", agence: "25 DH TTC" },
    { weight: "De 1,01 jusqu'à 2 kg", domicile: "35 DH TTC", agence: "30 DH TTC" },
    { weight: "De 2,01 jusqu'à 10 kg", domicile: "40 DH TTC", agence: "35 DH TTC" },
    { weight: "De 10,01 jusqu'à 31 kg", domicile: "75 DH TTC", agence: "70 DH TTC" }
  ];

  const interVillePricing = [
    { weight: "De 0,01 jusqu'à 1 kg", domicile: "40 DH TTC", agence: "35 DH TTC" },
    { weight: "De 1,01 jusqu'à 2 kg", domicile: "45 DH TTC", agence: "40 DH TTC" },
    { weight: "De 2,01 jusqu'à 10 kg", domicile: "55 DH TTC", agence: "50 DH TTC" },
    { weight: "De 10,01 jusqu'à 31 kg", domicile: "100 DH TTC", agence: "95 DH TTC" }
  ];

  const PricingTable = ({ title, data, delay }: { title: string, data: any[], delay: number }) => (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-barid-brown text-white p-4">
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-barid-orange text-white">
            <tr>
              <th className="p-3 text-left font-semibold">Poids</th>
              <th className="p-3 text-center font-semibold">À domicile</th>
              <th className="p-3 text-center font-semibold">En agence / Au point relais</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="p-3 text-sm font-medium text-gray-800">{row.weight}</td>
                <td className="p-3 text-center text-sm font-semibold text-barid-brown">{row.domicile}</td>
                <td className="p-3 text-center text-sm font-semibold text-barid-brown">{row.agence}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl md:text-4xl font-bold text-center text-barid-brown mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Tarifs
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <PricingTable 
            title="Tarifs pour l'intra-ville" 
            data={intraVillePricing} 
            delay={300} 
          />
          <PricingTable 
            title="Tarifs pour l'inter-ville" 
            data={interVillePricing} 
            delay={500} 
          />
        </div>
      </div>
    </section>
  );
};

export default AmanaECommercePricing;