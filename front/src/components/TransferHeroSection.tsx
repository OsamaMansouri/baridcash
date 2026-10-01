import React, { useEffect, useRef } from "react";
import { animations } from "../utils/animation";
import { useTranslation } from "react-i18next";

const TransferHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Add animations on component mount
  useEffect(() => {
    const elements = [
      {
        ref: titleRef,
        delay: 300,
      },
      {
        ref: descriptionRef,
        delay: 450,
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
    <section className="py-24 bg-barid-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center ${
              i18n.language === "ar" ? "md:text-right hero-rtl" : "md:text-left"
            } mb-10 md:mb-0`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("transferNational.hero.title")}
            </h1>

            <p
              ref={descriptionRef}
              className="text-lg text-gray-700 mt-6 mb-8 leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("transferNational.hero.description")}
            </p>
          </div>

          {/* Image - FURTHER INCREASED SIZE */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt={
                i18n.language === "ar"
                  ? "خدمات تحويل الأموال"
                  : "Money Transfer Services"
              }
              className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
              src="/lovable-uploads/7d054606-1133-4991-9f96-616b97ec55ef.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransferHeroSection;
