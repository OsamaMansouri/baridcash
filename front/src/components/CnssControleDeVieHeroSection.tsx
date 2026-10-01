import React from "react";
import { useTranslation } from "react-i18next";

const CnssControleDeVieHeroSection: React.FC = () => {
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
            className={`md:w-1/2 mb-10 md:mb-0 text-center ${
              i18n.language === "ar" ? "md:text-right" : "md:text-left"
            }`}
          >
            <h1
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
              className={`text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-0 lg:text-6xl pt-4 md:pt-0 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("cnss.controleDeVie.hero.title")}
              <br />
              {t("cnss.controleDeVie.hero.titleLine2")}
            </h1>
            <div className="h-8"></div>
            <p
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
                lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
              }}
              className={`mt-4 text-lg text-gray-700 mb-4 leading-relaxed ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("cnss.controleDeVie.hero.description")}
            </p>
          </div>

          {/* Image */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt={
                i18n.language === "ar"
                  ? "مراقبة الحياة CNSS"
                  : "Contrôle de vie CNSS"
              }
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/Group.png"
              onLoad={() => console.log("Hero image loaded successfully")}
              onError={() => console.log("Hero image failed to load")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CnssControleDeVieHeroSection;
