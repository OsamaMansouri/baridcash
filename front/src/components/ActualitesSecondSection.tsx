import React from "react";
import { useTranslation } from "react-i18next";

const ActualitesSecondSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="bg-barid-orange overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar"
              ? "md:flex-row-reverse"
              : "md:flex-row-reverse"
          } items-center gap-12`}
        >
          {/* Image */}
          <div className="md:w-1/2 flex justify-center order-1">
            <img
              alt={t("actualites.second.imageAlt")}
              className="max-w-full h-auto w-[60%] md:w-[70%]"
              src="/lovable-uploads/84d8938f-c10c-4e0c-844c-a8da8cea80a5.png"
              onLoad={() =>
                console.log("Actualites second image loaded successfully")
              }
              onError={(e) => {
                console.error("Actualites second image failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>

          {/* Text content */}
          <div
            className="md:w-1/2 md:text-left order-2"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight text-white mb-6"
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
              {t("actualites.second.title")}{" "}
              <span className="text-black">
                {t("actualites.second.titleBlack")}
              </span>
            </h2>
            <p
              className="text-base text-white leading-relaxed mb-8"
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
              {t("actualites.second.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={
                  i18n.language === "ar"
                    ? "/pdfs/actualites/convention-axa-assurance-new-ar.pdf"
                    : "/pdfs/actualites/convention-axa-assurance-new.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-barid-orange px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2 inline-block w-fit"
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
                {t("actualites.second.cta")}
                <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href={
                  i18n.language === "ar"
                    ? "/pdfs/actualites/convention-axa-assurance-new-ar.pdf"
                    : "/pdfs/actualites/convention-axa-assurance-new.pdf"
                }
                download={
                  i18n.language === "ar"
                    ? "BaridCash - AXA ASSURANCE - AR.pdf"
                    : "BaridCash - AXA ASSURANCE.pdf"
                }
                className="bg-barid-orange text-white border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-barid-orange transition-colors flex items-center gap-2 inline-block w-fit"
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
                {t("actualites.second.downloadCta")}
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActualitesSecondSection;
