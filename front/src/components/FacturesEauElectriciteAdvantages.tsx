import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FacturesEauElectriciteAdvantages: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    <section ref={sectionRef} className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl md:text-4xl font-bold mb-12 text-barid-brown transition-all duration-700 ease-out ${
            i18n.language === "ar" ? "text-right" : "text-center"
          } ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("facturesEauElectricite.advantages.title")}
        </h2>

        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-500 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-barid-brown rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* En agence column */}
                <div
                  className={`transition-all duration-700 delay-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
                  }`}
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold text-white mb-6 ${
                      i18n.language === "ar" ? "text-right" : "text-left"
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("facturesEauElectricite.advantages.inAgency.title")}
                  </h3>
                  <ul
                    className={`text-white space-y-3 text-sm md:text-base leading-relaxed ${
                      i18n.language === "ar"
                        ? "text-right list-inside"
                        : "text-left list-inside"
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {(
                      t("facturesEauElectricite.advantages.inAgency.steps", {
                        returnObjects: true,
                      }) as string[]
                    ).map((step, index) => (
                      <li
                        key={index}
                        className={
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vertical white separator */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white transform -translate-x-1/2"></div>

                {/* Avec Barid Pay column */}
                <div
                  className={`transition-all duration-700 delay-900 ease-out ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                >
                  <h3
                    className={`text-xl md:text-2xl font-bold text-white mb-6 ${
                      i18n.language === "ar" ? "text-right" : "text-left"
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("facturesEauElectricite.advantages.withBaridPay.title")}
                  </h3>
                  <ul
                    className={`text-white space-y-3 text-sm md:text-base leading-relaxed ${
                      i18n.language === "ar"
                        ? "text-right list-inside"
                        : "text-left list-inside"
                    }`}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      listStyleType: "disc",
                      listStylePosition: "inside",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {(
                      t(
                        "facturesEauElectricite.advantages.withBaridPay.steps",
                        { returnObjects: true }
                      ) as string[]
                    ).map((step, index) => (
                      <li
                        key={index}
                        className={
                          i18n.language === "ar" ? "text-right" : "text-left"
                        }
                      >
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacturesEauElectriciteAdvantages;
