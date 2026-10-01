
import React, { useRef, useEffect, useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const NousConnaitreEngagements: React.FC = () => {
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
    
    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
    
    setActiveIndex(api.selectedScrollSnap());
  }, [api]);

  const engagements = [
    {
      title: "UNE PROXIMITÉ DE NOS AGENCES",
      description: "Avec plus de 1800 réseau d'agences dans tout le Maroc, Barid Cash est à vos côtés pour vous simplifier votre quotidien.",
      icon: "/lovable-uploads/feb819c2-f71b-46f4-86f9-0a12da6b2be3.png"
    },
    {
      title: "LA SÉCURITÉ DES OPÉRATIONS",
      description: "L'ensemble des transferts sont réalisés à travers le réseau postal, garantissant leur fiabilité et leur sécurité.",
      icon: "/lovable-uploads/443d5930-1882-40f5-bfa4-831211b01fba.png"
    },
    {
      title: "DES FRAIS ÉTUDIÉS",
      description: "Barid Cash c'est aussi des frais avantageux.",
      icon: "/lovable-uploads/c29fee47-c583-4b91-914a-6623c16e4d56.png"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-white mb-12 text-left transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Nos engagements
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
                  className={`h-14 w-14 bg-white text-barid-orange border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                >
                  <ArrowLeft className="h-6 w-6" />
                </CarouselPrevious>
              </div>
              
              <CarouselContent className="-ml-4">
                {engagements.map((engagement, index) => (
                  <CarouselItem 
                    key={engagement.title} 
                    className={`pl-4 basis-full md:basis-1/3 py-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                    style={{ transitionDelay: `${600 + (index * 100)}ms` }}
                  >
                    <div 
                      className={`bg-[#5A433D] text-white rounded-2xl p-8 shadow-lg h-full flex flex-col items-center justify-center transition-all duration-300
                        ${activeIndex === index 
                          ? 'transform scale-110 z-10 border border-white/30' 
                          : 'scale-90 opacity-80'}`}
                      style={{
                        height: activeIndex === index ? '320px' : '280px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div className="mb-8">
                        <img 
                          alt={`${engagement.title} Icon`} 
                          className={`object-contain transition-all duration-300 ${
                            activeIndex === index ? 'w-28 h-28' : 'w-24 h-24'
                          }`} 
                          src={engagement.icon} 
                        />
                      </div>
                      <div className={`h-[2px] bg-white mb-4 mx-auto transition-all duration-300 ${
                        activeIndex === index ? 'w-24' : 'w-20'
                      }`}></div>
                      <h3 className={`font-bold text-center uppercase mb-4 transition-all duration-300 ${
                        activeIndex === index ? 'text-xl' : 'text-lg'
                      }`}>
                        {engagement.title}
                      </h3>
                      <p className="text-center text-sm">{engagement.description}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="absolute right-0 z-20">
                <CarouselNext 
                  className={`h-14 w-14 bg-white text-barid-orange border-none shadow-md rounded-full hover:scale-110 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
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

export default NousConnaitreEngagements;
