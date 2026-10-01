
import React, { useRef, useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NosPartenairesAdvantages: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Auto-scroll effect - moves carousel every 5 seconds
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const advantages = [
    {
      title: "UN RÉSEAU ÉTENDU",
      description: "Bénéficiez d'un large réseau de partenaires de confiance pour répondre à tous vos besoins.",
      icon: "/lovable-uploads/feb819c2-f71b-46f4-86f9-0a12da6b2be3.png"
    },
    {
      title: "DES SERVICES DIVERSIFIÉS",
      description: "Accès à une multitude de services financiers.\nPartenaires certifiés et vérifiés pour votre sécurité.",
      icon: "/lovable-uploads/c29fee47-c583-4b91-914a-6623c16e4d56.png"
    },
    {
      title: "UNE COLLABORATION DE QUALITÉ",
      description: "Des partenariats solides pour garantir la meilleure expérience client.",
      icon: "/lovable-uploads/443d5930-1882-40f5-bfa4-831211b01fba.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center text-[#5A433D] mb-12 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Nos avantages
        </h2>
        
        <div className={`relative max-w-6xl mx-auto transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel
            setApi={setApi}
            opts={{ 
              align: "center",
              loop: true,
              containScroll: false,
            }}
            className="py-12"
          >
            <div className="flex items-center justify-center relative">
              <div className="absolute left-0 z-20">
                <CarouselPrevious 
                  className={`h-14 w-14 bg-[#F27D30] text-white border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                  <ArrowLeft className="h-6 w-6" />
                </CarouselPrevious>
              </div>
              
              <CarouselContent className="-ml-4">
                {advantages.map((advantage, index) => {
                  const isActive = activeIndex === index;
                  
                  return (
                    <CarouselItem 
                      key={advantage.title}
                      className={`pl-4 basis-full md:basis-1/3 py-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                      style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                    >
                      <div 
                        className={`bg-[#5A433D] text-white rounded-2xl p-8 shadow-lg h-full flex flex-col items-center justify-center transition-all duration-300
                          ${isActive 
                            ? 'transform scale-110 z-10 border border-[#F27D30]/30' 
                            : 'scale-90 opacity-80'}`}
                        style={{
                          height: isActive ? '360px' : '320px',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div className="mb-8">
                          <img 
                            alt={`${advantage.title} Icon`} 
                            className={`object-contain transition-all duration-300 ${
                              isActive ? 'w-28 h-28' : 'w-24 h-24'
                            }`} 
                            src={advantage.icon} 
                          />
                        </div>
                        <div className={`h-[2px] bg-white mb-4 mx-auto transition-all duration-300 ${
                          isActive ? 'w-24' : 'w-20'
                        }`}></div>
                        <h3 className={`font-bold text-center uppercase mb-4 transition-all duration-300 ${
                          isActive ? 'text-xl' : 'text-lg'
                        }`}>
                          {advantage.title}
                        </h3>
                        <p className="text-center text-sm leading-relaxed whitespace-pre-line px-2">{advantage.description}</p>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              <div className="absolute right-0 z-20">
                <CarouselNext 
                  className={`h-14 w-14 bg-[#F27D30] text-white border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                >
                  <ArrowRight className="h-6 w-6" />
                </CarouselNext>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default NosPartenairesAdvantages;
