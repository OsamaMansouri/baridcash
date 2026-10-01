import React, { useState, useEffect, useRef } from "react";
import { animations } from "@/utils/animation";
import { useTranslation } from "react-i18next";

const TransferFaqSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Detect when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <section
      id="faq"
      className="bg-barid-background py-20 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-start gap-10`}
        >
          {/* Text Column */}
          <div
            className={`lg:w-1/2 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h2
              ref={titleRef}
              className={`text-4xl font-bold text-barid-brown mb-8 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("transferNational.faq.title")}
            </h2>

            <p
              ref={descriptionRef}
              className={`text-lg text-gray-700 leading-relaxed transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${i18n.language === "ar" ? "text-right" : "text-left"}`}
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("transferNational.faq.description")}
            </p>
          </div>

          {/* Image Column */}
          <div
            className={`lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            } ${i18n.language === "ar" ? "lg:order-first" : ""}`}
          >
            <img
              ref={imageRef}
              alt="Barid Cash Mobile Services"
              className="max-w-[90%] h-auto rounded-lg"
              src="/lovable-uploads/4a8d79a9-a249-4ba7-b469-1dc9354a4ab1.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TransferFaqSection;
