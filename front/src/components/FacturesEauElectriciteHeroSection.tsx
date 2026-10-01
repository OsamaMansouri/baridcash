import React from "react";
import { useTranslation } from "react-i18next";

const FacturesEauElectriciteHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="bg-barid-background overflow-hidden py-[50px]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center ${
              i18n.language === "ar" ? "md:text-right" : "md:text-left"
            } mb-10 md:mb-0`}
          >
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-0 lg:text-6xl"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesEauElectricite.hero.title")}
            </h1>
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesEauElectricite.hero.description")}
            </p>
            <div className="h-8"></div>
          </div>

          {/* Image */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Paiement des factures eau et électricité"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/70c06173-d417-4e78-8521-85379c9a2c7e.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacturesEauElectriciteHeroSection;
