import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const AnnoncesLegalesHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
        imageRef.current.style.transform = "scale(1)";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-barid-background overflow-hidden py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {i18n.language === "ar" ? (
            <>
              {/* Text content - right side for Arabic */}
              <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-0">
                <h1
                  ref={titleRef}
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 text-right"
                >
                  {t("annoncesLegales.hero.title")}
                </h1>
                <p
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                    lineHeight: "1.2",
                  }}
                  className="mt-4 text-lg text-gray-700 mb-4 text-right leading-relaxed"
                >
                  {t("annoncesLegales.hero.description")}
                </p>
              </div>

              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="الإعلانات القانونية"
                  className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
                  src="/lovable-uploads/de0b4c39-c137-476b-a5fb-5b63b8a19256.png"
                />
              </div>
            </>
          ) : (
            <>
              {/* Text content - left side for French */}
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1
                  ref={titleRef}
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 text-left"
                >
                  {t("annoncesLegales.hero.title")}
                </h1>
                <p
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}
                  className="mt-4 text-lg text-gray-700 mb-4 text-left leading-relaxed"
                >
                  {t("annoncesLegales.hero.description")}
                </p>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="Annonces Légales"
                  className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
                  src="/lovable-uploads/de0b4c39-c137-476b-a5fb-5b63b8a19256.png"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AnnoncesLegalesHeroSection;
