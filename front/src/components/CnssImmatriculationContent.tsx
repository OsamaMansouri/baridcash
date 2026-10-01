import React from "react";
import { useTranslation } from "react-i18next";
import LocationSection from "./LocationSection";
const CnssImmatriculationContent: React.FC = () => {
  console.log("CnssImmatriculationContent component is rendering");
  const { t, i18n } = useTranslation("common");

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

      <section className="py-16 bg-barid-orange">
        <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
          {/* White headline */}
          <h2
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            {t("cnss.immatriculation.content.title")}
          </h2>

          {/* Orange banner section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="rounded-2xl px-8 py-6 shadow-lg bg-barid-background">
              <p
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="text-base leading-relaxed text-black mb-4"
              >
                {t("cnss.immatriculation.content.description1")}
              </p>
              <p
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
                className="text-base leading-relaxed text-black"
              >
                {t("cnss.immatriculation.content.description2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationSection />

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
export default CnssImmatriculationContent;
