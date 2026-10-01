import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface RTLHeroSectionProps {
  titleKey: string;
  titleLine2Key?: string;
  descriptionKey: string;
  imageSrc: string;
  imageAlt: string;
  imageSize?: string; // Default: "w-[80%]"
}

const RTLHeroSection: React.FC<RTLHeroSectionProps> = ({
  titleKey,
  titleLine2Key,
  descriptionKey,
  imageSrc,
  imageAlt,
  imageSize = "w-[80%]",
}) => {
  const { t, i18n } = useTranslation();
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
    <div className="min-h-screen bg-barid-background overflow-hidden py-[50px] flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {i18n.language === "ar" ? (
            <>
              {/* Text content - right side for Arabic */}
              <div
                className="md:w-1/2 mb-10 md:mb-0 text-center md:text-right"
                style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
              >
                <h1
                  ref={titleRef}
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                  className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0 lg:text-6xl pt-4 md:pt-0"
                >
                  {t(titleKey)}
                  {titleLine2Key && (
                    <>
                      <br />
                      {t(titleLine2Key)}
                    </>
                  )}
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
                  className="mt-4 text-lg text-gray-700 mb-4 leading-relaxed"
                >
                  {t(descriptionKey)}
                </p>
              </div>
              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt={imageAlt}
                  className={`max-w-full h-auto rounded-lg ${imageSize} md:${imageSize} lg:${imageSize}`}
                  src={imageSrc}
                  onLoad={() => console.log("Hero image loaded successfully")}
                  onError={() => console.log("Hero image failed to load")}
                />
              </div>
            </>
          ) : (
            <>
              {/* Text content - left side for French */}
              <div
                className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left"
                style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
              >
                <h1
                  ref={titleRef}
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                  className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-0 lg:text-6xl pt-4 md:pt-0"
                >
                  {t(titleKey)}
                  {titleLine2Key && (
                    <>
                      <br />
                      {t(titleLine2Key)}
                    </>
                  )}
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
                  className="mt-4 text-lg text-gray-700 mb-4 leading-relaxed"
                >
                  {t(descriptionKey)}
                </p>
              </div>
              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt={imageAlt}
                  className={`max-w-full h-auto rounded-lg ${imageSize} md:${imageSize} lg:${imageSize}`}
                  src={imageSrc}
                  onLoad={() => console.log("Hero image loaded successfully")}
                  onError={() => console.log("Hero image failed to load")}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RTLHeroSection;
