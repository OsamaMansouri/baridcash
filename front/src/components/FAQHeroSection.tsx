import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FAQHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.transform = "translateY(0)";
      }
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
        imageRef.current.style.transform = "scale(1)";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 bg-barid-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {i18n.language === "ar" ? (
            <>
              {/* Text content - right side for Arabic */}
              <div
                className="md:w-1/2 text-center md:text-right mb-10 md:mb-0"
                style={{ textAlign: "right" }}
              >
                <h1
                  ref={titleRef}
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16"
                >
                  {t("faqs.hero.title")}
                </h1>
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
                  {t("faqs.hero.description")}
                </p>
                <Link to="/assistance-client">
                  <button
                    ref={buttonRef}
                    className="btn-orange mt-2 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                    lang="ar"
                    style={{
                      direction: "rtl",
                      fontFamily: "Cairo, Arial, sans-serif",
                      textAlign: "right",
                    }}
                  >
                    {t("faqs.hero.cta")}
                    <i className="fas fa-arrow-left ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </Link>
              </div>

              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  src="/lovable-uploads/15731a6b-368e-4029-a863-f091d3988d2c.png"
                  alt="أسئلة شائعة"
                  className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
                />
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
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16"
                >
                  {t("faqs.hero.title")}
                </h1>
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
                  {t("faqs.hero.description")}
                </p>
                <Link to="/assistance-client">
                  <button
                    ref={buttonRef}
                    className="btn-orange mt-2 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                    lang="fr"
                    style={{
                      direction: "ltr",
                      fontFamily: "Inter, Arial, sans-serif",
                      textAlign: "left",
                    }}
                  >
                    {t("faqs.hero.cta")}
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </Link>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  src="/lovable-uploads/15731a6b-368e-4029-a863-f091d3988d2c.png"
                  alt="FAQ Questions"
                  className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQHeroSection;
