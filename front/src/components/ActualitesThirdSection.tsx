import React from "react";
import { useTranslation } from "react-i18next";

const ActualitesThirdSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="bg-barid-background overflow-hidden py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row" : "md:flex-row"
          } items-center gap-12`}
        >
          {/* Text content */}
          <div
            className="md:w-1/2 md:text-left"
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h2
              className="text-2xl md:text-3xl font-bold leading-tight text-gray-800 mb-6"
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
              {t("actualites.third.title")}{" "}
              <span className="text-barid-orange">
                {t("actualites.third.titleOrange")}
              </span>
            </h2>
            <p
              className="text-base text-gray-700 leading-relaxed mb-8"
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
              {t("actualites.third.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={
                  i18n.language === "ar"
                    ? "/pdfs/actualites/partenariat-fnacam-new-ar.pdf"
                    : "/pdfs/actualites/partenariat-fnacam-new.pdf"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="bg-barid-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-barid-orange/90 transition-colors flex items-center gap-2 inline-block w-fit"
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
                {t("actualites.third.cta")}
                <i className="fas fa-arrow-right"></i>
              </a>
              <a
                href={
                  i18n.language === "ar"
                    ? "/pdfs/actualites/partenariat-fnacam-new-ar.pdf"
                    : "/pdfs/actualites/partenariat-fnacam-new.pdf"
                }
                download={
                  i18n.language === "ar"
                    ? "BaridCash - FNACAM - AR.pdf"
                    : "BaridCash - FNACAM.pdf"
                }
                className="bg-white text-barid-orange border-2 border-barid-orange px-6 py-3 rounded-lg font-medium hover:bg-barid-orange hover:text-white transition-colors flex items-center gap-2 inline-block w-fit"
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
                {t("actualites.third.downloadCta")}
                <i className="fas fa-download"></i>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              alt={t("actualites.third.imageAlt")}
              className="max-w-full h-auto w-[60%] md:w-[70%]"
              src="/lovable-uploads/cb8f1cf1-f3cd-4831-b9d8-68213788b995.png"
              onLoad={() =>
                console.log("Actualites third image loaded successfully")
              }
              onError={(e) => {
                console.error("Actualites third image failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActualitesThirdSection;
