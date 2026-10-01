import React from "react";
import { useTranslation } from "react-i18next";
import LocationSection from "./LocationSection";

const TaxesImpiotsContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  console.log("TaxesImpiotsContent component is rendering");

  return (
    <>
      {/* Image before the section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/bce65ab6-0ef7-41ba-9dd4-1fbf7d3c22d7.png"
          alt="BaridCash Decorative Banner"
          className="w-full h-auto"
        />
      </div>

      <LocationSection customTitle={t("taxesImpots.content.title")} />

      {/* Brown background section - now placed under the map */}
      <div className="w-full py-16 bg-barid-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-barid-brown p-8 shadow-lg">
              <h3
                className="text-lg font-semibold text-white mb-4"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("taxesImpots.contentSection.subtitle")}
              </h3>
              <p
                className="text-base leading-relaxed text-white"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("taxesImpots.contentSection.description")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image after the orange section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/b91171c2-7f53-48e8-b87e-021ce116cea1.png"
          alt="BaridCash Decorative Banner"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};

export default TaxesImpiotsContent;
