import React from "react";
import { useTranslation } from "react-i18next";

const NousConnaitreV2HeroSection: React.FC = () => {
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
                textAlign: i18n.language === "ar" ? "right" : "left",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("nousConnaitre.hero.title")}
            </h1>
            <p
              className="mt-4 text-lg text-gray-700 mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                textAlign: i18n.language === "ar" ? "right" : "left",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
              }}
            >
              {t("nousConnaitre.hero.description")}
            </p>
          </div>

          {/* Image - right side */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="À propos de Barid Cash"
              className="max-w-full h-auto rounded-lg w-[80%] md:w-[80%] lg:w-[80%]"
              src="/lovable-uploads/739f7dfd-fa09-4a55-9a07-adb60fefc24b.png"
              onLoad={() => console.log("Image loaded successfully")}
              onError={(e) => {
                console.error("Image failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NousConnaitreV2HeroSection;
