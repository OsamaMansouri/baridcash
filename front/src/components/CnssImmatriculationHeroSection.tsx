import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
const CnssImmatriculationHeroSection: React.FC = () => {
  console.log("CnssImmatriculationHeroSection component is rendering");
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log("CnssImmatriculationHeroSection useEffect running");
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
        <div className="flex flex-col md:flex-row items-center">
          {i18n.language === "ar" ? (
            <>
              {/* Text content - right side for Arabic */}
              <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right">
                <h1
                  ref={titleRef}
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                  className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0 lg:text-6xl pt-4 md:pt-0 text-right"
                >
                  {t("cnss.immatriculation.hero.title")}
                </h1>
                <div className="h-8"></div>
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
                  {t("cnss.immatriculation.hero.description")}
                </p>
              </div>
              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="تسجيل CNSS"
                  className="max-w-full h-auto rounded-lg w-[60%] md:w-[60%] lg:w-[60%]"
                  src="/lovable-uploads/Group.png"
                  onLoad={() => console.log("Hero image loaded successfully")}
                  onError={() => console.log("Hero image failed to load")}
                />
              </div>
            </>
          ) : (
            <>
              {/* Text content - left side for French */}
              <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                <h1
                  ref={titleRef}
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                  className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0 lg:text-6xl pt-4 md:pt-0 text-left"
                >
                  {t("cnss.immatriculation.hero.title")}
                </h1>
                <div className="h-8"></div>
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
                  {t("cnss.immatriculation.hero.description")}
                </p>
              </div>
              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="Immatriculation CNSS"
                  className="max-w-full h-auto rounded-lg w-[60%] md:w-[60%] lg:w-[60%]"
                  src="/lovable-uploads/Group.png"
                  onLoad={() => console.log("Hero image loaded successfully")}
                  onError={() => console.log("Hero image failed to load")}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default CnssImmatriculationHeroSection;
