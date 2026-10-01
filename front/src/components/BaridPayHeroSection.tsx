import React from "react";
import { useTranslation } from "react-i18next";

const BaridPayHeroSection: React.FC = () => {
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
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-16 lg:text-6xl"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("baridPay.hero.title")}
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
              }}
            >
              {t("baridPay.hero.description")}
            </p>
          </div>

          {/* Image - reduced width from 100% to 80% on all screen sizes */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Barid Pay"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/7c4a8853-16b8-4797-8249-8b7140dae025.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default BaridPayHeroSection;
