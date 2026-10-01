import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
const NosComptesDePaiementsHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  // Function to render text with line breaks
  const renderTextWithLineBreaks = (text: string) => {
    return text.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split("\n").length - 1 && <br />}
      </span>
    ));
  };
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Add animations on component mount
  useEffect(() => {
    const elements = [
      {
        ref: titleRef,
        delay: 300,
      },
      {
        ref: buttonRef,
        delay: 600,
      },
      {
        ref: imageRef,
        delay: 900,
      },
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
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center mb-10 md:mb-0 ${
              i18n.language === "ar" ? "md:text-right" : "md:text-left"
            }`}
          >
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 lg:text-6xl"
            >
              {t("nosComptesDePaiements.hero.title")}
            </h1>
            <p className="mt-4 text-lg text-gray-700 mb-4">
              {renderTextWithLineBreaks(
                t("nosComptesDePaiements.hero.description")
              )}
            </p>
          </div>

          {/* Image - reduced width from 100% to 80% on all screen sizes */}
          <div
            ref={imageRef}
            className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
          >
            <img
              alt={t("nosComptesDePaiements.hero.title")}
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/4a1d9599-0675-4bb1-884d-7047e546a636.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default NosComptesDePaiementsHeroSection;
