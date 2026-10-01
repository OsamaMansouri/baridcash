import React from "react";
import { useTranslation } from "react-i18next";

const FacturesAchatHeroSection: React.FC = () => {
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
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-4 lg:text-6xl"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesAchat.hero.title")}
            </h1>
          </div>

          {/* Image */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Paiement des partenaires achat e-commerce, transport, sport"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/9930c419-d1a9-4eaa-9d1f-f80d0d3abbe4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacturesAchatHeroSection;
