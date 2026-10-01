import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ProduitsAssuranceHeroSection: React.FC = () => {
  console.log("ProduitsAssuranceHeroSection component is rendering");
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("ProduitsAssuranceHeroSection useEffect running");
    const elements = [
      {
        ref: titleRef,
        delay: 300,
      },
      {
        ref: imageRef,
        delay: 900,
      },
    ];
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
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0 lg:text-6xl pt-4 md:pt-0"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("produitsAssurance.hero.title")}
            </h1>
            <div className="h-8"></div>
            <p
              className="mt-4 text-lg text-gray-700 mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("produitsAssurance.hero.description")}
            </p>
            <div
              className="text-lg text-gray-700 mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("produitsAssurance.hero.description2")
                .split("\n")
                .map((line, index) => (
                  <p key={index} className="mb-1">
                    {line.startsWith("•") ? (
                      <>
                        <span>•</span>
                        <span className="mr-2">{line.substring(1)}</span>
                      </>
                    ) : (
                      line
                    )}
                  </p>
                ))}
            </div>
          </div>
          {/* Image - conditional side based on language */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out ${
              i18n.language === "ar" ? "md:order-first" : "md:order-last"
            }`}
          >
            <img
              alt="Produits d'assurance"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              onLoad={() => console.log("Hero image loaded successfully")}
              onError={() => console.log("Hero image failed to load")}
              src="/lovable-uploads/861f2964-e8b9-4707-b8ad-d8fa2ad2ad1a.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProduitsAssuranceHeroSection;
