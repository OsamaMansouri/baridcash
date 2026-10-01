import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const NarsaReclamationsInfractionsHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Add animations on component mount
  useEffect(() => {
    const elements = [
      { ref: titleRef, delay: 300 },
      { ref: buttonRef, delay: 600 },
      { ref: imageRef, delay: 900 },
    ];

    // Staggered animation timing
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100"
          );
        }, delay);
      }
    });
  }, []);

  return (
    <section className="bg-barid-background overflow-hidden py-[50px]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 ${
              i18n.language === "ar"
                ? "text-center md:text-right"
                : "text-center md:text-left"
            } mb-10 md:mb-0`}
          >
            <h1
              ref={titleRef}
              className={`text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 lg:text-6xl pt-4 md:pt-0 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("narsaReclamationsInfractions.hero.title")}
            </h1>
            <p
              className={`mt-4 text-lg text-gray-700 mb-4 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("narsaReclamationsInfractions.hero.description")}
            </p>
          </div>

          {/* Image - reduced width from 100% to 80% on all screen sizes */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out ${
              i18n.language === "ar" ? "md:order-first" : "md:order-last"
            }`}
          >
            <img
              alt="Réclamations Infractions NARSA"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/0b7eb8dc-d4ee-4647-9a6b-357542bb1d90.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarsaReclamationsInfractionsHeroSection;
