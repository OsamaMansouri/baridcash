import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

const VosQuestionsHeroSection: React.FC = () => {
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
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-barid-brown/5 to-transparent transform skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-gradient-to-tr from-barid-orange/5 to-transparent transform -skew-x-6"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div
                className={`inline-flex items-center px-4 py-2 bg-barid-brown/10 rounded-full mb-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <HelpCircle className="w-5 h-5 text-barid-brown mr-2" />
                <span className="text-barid-brown font-medium">
                  Service Client Entreprise
                </span>
              </div>

              <h1
                className={`text-5xl lg:text-7xl font-bold text-barid-brown mb-8 transition-all duration-1000 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Vos Questions
              </h1>

              <p
                className={`text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8 transition-all duration-1000 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Nous répondons à vos questions. Si votre question ne figure pas
                ci-dessous, nous restons à votre disposition pour y répondre. Il
                vous suffit de{" "}
                <Link
                  to="/assistance-client"
                  className="text-barid-orange hover:text-barid-orange/80 font-semibold underline transition-colors duration-300"
                >
                  cliquer ici
                </Link>
              </p>
            </div>

            {/* Professional illustration */}
            <div
              className={`text-center transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-barid-brown/10 to-barid-orange/10 rounded-full flex items-center justify-center mx-auto">
                <HelpCircle className="w-32 h-32 text-barid-brown" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VosQuestionsHeroSection;
