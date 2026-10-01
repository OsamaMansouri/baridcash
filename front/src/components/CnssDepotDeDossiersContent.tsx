import React from "react";
import { useTranslation } from "react-i18next";
import LocationSection from "./LocationSection";

const CnssDepotDeDossiersContent: React.FC = () => {
  console.log("CnssDepotDeDossiersContent component is rendering");
  const { t, i18n } = useTranslation("common");

  return (
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
          {t("cnss.depotDeDossiers.content.title")}
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
              className="text-base leading-relaxed text-black"
            >
              {t("cnss.depotDeDossiers.content.description")}
            </p>
          </div>
        </div>
      </div>

      <LocationSection />
    </section>
  );
};

export default CnssDepotDeDossiersContent;
