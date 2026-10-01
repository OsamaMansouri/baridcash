import React, { useEffect, useState, useRef } from "react";

const AccueilPartnersSection: React.FC = () => {
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

  const partners = [
    {
      id: 1,
      name: "Partner 1",
      logo: "/lovable-uploads/en-partenaires/img113254.png",
    },
    {
      id: 2,
      name: "Partner 2",
      logo: "/lovable-uploads/en-partenaires/img113258.png",
    },
    {
      id: 3,
      name: "Partner 3",
      logo: "/lovable-uploads/en-partenaires/img113259.png",
    },
    {
      id: 4,
      name: "Partner 4",
      logo: "/lovable-uploads/en-partenaires/img113260.png",
    },
    {
      id: 5,
      name: "Partner 5",
      logo: "/lovable-uploads/en-partenaires/img113261.png",
    },
    {
      id: 6,
      name: "Partner 6",
      logo: "/lovable-uploads/en-partenaires/img113262.png",
    },
    {
      id: 7,
      name: "Partner 7",
      logo: "/lovable-uploads/en-partenaires/img113263.png",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-barid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold text-barid-brown mb-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Nos partenaires
          </h2>
          <p
            className={`text-xl text-gray-700 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Une multitude de partenaires.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-4 flex items-center justify-center h-48 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-24 w-auto max-w-full object-contain"
                onLoad={() =>
                  console.log(`${partner.name} logo loaded successfully`)
                }
                onError={() =>
                  console.log(`${partner.name} logo failed to load`)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccueilPartnersSection;
