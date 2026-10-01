import React from "react";
import { useTranslation } from "react-i18next";

const CartesMonetiquesHeroSection: React.FC = () => {
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
            style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-16"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("cartesMonetiques.hero.title")}
            </h1>
            <p
              className="mt-4 text-lg text-gray-700 mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("cartesMonetiques.hero.description")}
            </p>
          </div>

          {/* Image */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Cartes Monétiques"
              className="max-w-full h-auto rounded-lg w-[100%] md:w-[100%] lg:w-[100%]"
              src="/lovable-uploads/5714248b-ab13-4874-b4c3-9fa154523333.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartesMonetiquesHeroSection;
