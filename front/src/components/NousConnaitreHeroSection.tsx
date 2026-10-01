import React, { useEffect, useRef } from "react";
const NousConnaitreHeroSection: React.FC = () => {
  console.log("NousConnaitreHeroSection component is rendering");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("NousConnaitreHeroSection useEffect running");
    const elements = [{
      ref: titleRef,
      delay: 300
    }, {
      ref: imageRef,
      delay: 900
    }, {
      ref: timelineRef,
      delay: 1200
    }];
    elements.forEach(({
      ref,
      delay
    }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add("opacity-100", "translate-y-0", "scale-100");
        }, delay);
      }
    });
  }, []);
  return <section style={{
    backgroundImage: `url('/lovable-uploads/e7d9b3ba-817d-4746-ac04-9e4998f93980.png')`
  }} className="bg-barid-background overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen w-full flex items-center justify-center">
      <div className="container mx-auto px-4 w-full">
        {/* Title at the top */}
        <div className="text-center -mt-32">
          <h1 ref={titleRef} className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0">
            Barid Cash, à vos côtés depuis 2014 !
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="h-8"></div>
          </div>
          
          {/* Image - right side */}
          <div ref={imageRef} className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out">
            
          </div>
        </div>
        
        {/* Timeline image */}
        <div ref={timelineRef} className="mt-16 flex justify-center opacity-0 translate-y-8 transition-all duration-1000 ease-out my-0">
          
        </div>
      </div>
    </section>;
};
export default NousConnaitreHeroSection;
