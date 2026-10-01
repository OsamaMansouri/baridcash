import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const AccueilHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Corporate geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-barid-brown/5 to-transparent transform skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-3/4 bg-gradient-to-tr from-barid-orange/5 to-transparent transform -skew-x-6"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`text-5xl lg:text-7xl font-bold text-barid-brown mb-8 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            lang={i18n.language}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("accueil.hero.title")}
          </h1>

          <p
            className={`text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            lang={i18n.language}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
              lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
            }}
          >
            {t("accueil.hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AccueilHeroSection;
