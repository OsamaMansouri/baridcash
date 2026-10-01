import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const ChronopostHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
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
    <section className="bg-barid-background overflow-hidden py-0">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center ${
              i18n.language === "ar" ? "md:text-right" : "md:text-left"
            } mb-10 md:mb-0`}
          >
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("chronopost.hero.title")}
            </h1>
            <p
              className="mt-4 text-lg text-gray-700 mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("chronopost.hero.description")}
            </p>
          </div>

          {/* Updated image with your new upload */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Contactez Nous"
              className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
              src="/lovable-uploads/dc4ed6de-ec76-4a6f-ac4d-e8f3e6dd9fcc.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChronopostHeroSection;
