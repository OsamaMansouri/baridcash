import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { animations } from "../utils/animation";

const TransferInternationalHeroSection: React.FC = () => {
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
          {i18n.language === "ar" ? (
            <>
              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out md:order-first"
              >
                <img
                  alt="خدمات تحويل الأموال الدولية"
                  src="/lovable-uploads/625e080e-dc91-498f-9dc9-aa8de7d870e2.png"
                  className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
                />
              </div>

              {/* Text content - right side for Arabic */}
              <div
                className="md:w-1/2 text-center md:text-right mb-10 md:mb-0 md:order-last"
                style={{ textAlign: "right" }}
              >
                <h1
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                >
                  {t("transferInternational.hero.title")}
                </h1>

                <p
                  ref={descriptionRef}
                  className="text-lg text-gray-700 mt-6 mb-8 leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                    lineHeight: "1.2",
                  }}
                >
                  {t("transferInternational.hero.description")}
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Text content - left side for French */}
              <div
                className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
                style={{ textAlign: "left" }}
              >
                <h1
                  ref={titleRef}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                >
                  {t("transferInternational.hero.title")}
                </h1>

                <p
                  ref={descriptionRef}
                  className="text-lg text-gray-700 mt-6 mb-8 leading-relaxed opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}
                >
                  {t("transferInternational.hero.description")}
                </p>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="International Money Transfer Services"
                  src="/lovable-uploads/625e080e-dc91-498f-9dc9-aa8de7d870e2.png"
                  className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
export default TransferInternationalHeroSection;
