import React from "react";
import { useTranslation } from "react-i18next";
const TaxesImpiotsPartnersSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-barid-brown mb-8"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("taxesImpots.partnersSection.title")}
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          {/* Direction Générale des Impôts logo */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-48 flex items-center justify-center">
              <img
                src="/lovable-uploads/098e251e-2dad-4d80-a940-ca4ea41b536d.png"
                alt="Direction Générale des Impôts"
                className="h-40 w-auto max-w-full object-contain"
              />
            </div>
          </div>

          {/* Trésorerie Générale du Royaume logo */}
          <div className="w-full md:w-1/2 max-w-md">
            <div className="bg-white rounded-2xl shadow-lg p-8 h-48 flex items-center justify-center">
              <img
                src="/lovable-uploads/e2865d20-5579-4ca8-bc1b-81ea062ea46c.png"
                alt="Trésorerie Générale du Royaume"
                className="h-40 w-auto max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TaxesImpiotsPartnersSection;
