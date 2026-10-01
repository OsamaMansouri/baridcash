import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const NousRejoindreHeroSection: React.FC = () => {
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 pt-4 md:pt-0 text-right"
                >
                  {t("nousRejoindre.hero.title")}
                </h1>

                <p
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                    lineHeight: "1.2",
                  }}
                  className="mt-4 text-gray-700 mb-4 text-lg text-right leading-relaxed"
                >
                  {renderTextWithLineBreaks(
                    t("nousRejoindre.hero.description")
                  )}
                </p>
              </div>

              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="انضم إلينا"
                  src="/lovable-uploads/e9f59ab7-8d3f-4115-a7dc-7de226271795.png"
                  className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 pt-4 md:pt-0 text-left"
                >
                  {t("nousRejoindre.hero.title")}
                </h1>

                <p
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}
                  className="mt-4 text-gray-700 mb-4 text-lg text-left leading-relaxed"
                >
                  {renderTextWithLineBreaks(
                    t("nousRejoindre.hero.description")
                  )}
                </p>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="Nous rejoindre"
                  src="/lovable-uploads/e9f59ab7-8d3f-4115-a7dc-7de226271795.png"
                  className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default NousRejoindreHeroSection;
