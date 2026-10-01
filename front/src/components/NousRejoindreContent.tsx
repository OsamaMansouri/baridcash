import React from "react";
import { useTranslation } from "react-i18next";

const NousRejoindreContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-12 items-center">
        {/* Section 1: Pourquoi rejoindre Barid Cash ? */}
        <div className="w-full flex flex-col items-center">
          <h2
            className={`text-white text-4xl font-bold mb-8 w-full max-w-6xl ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
            lang={i18n.language}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("nousRejoindre.content.title")}
          </h2>

          <div className="bg-[#5A433D] p-8 rounded-[1.5rem] text-white w-full max-w-6xl">
            <div
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                i18n.language === "ar" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {t("nousRejoindre.content.reasons.workplace.title")}
                  </h3>
                  <p
                    className="text-white/90"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                      lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
                    }}
                  >
                    {t("nousRejoindre.content.reasons.workplace.description")}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {t("nousRejoindre.content.reasons.opportunities.title")}
                  </h3>
                  <p
                    className="text-white/90"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                      lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
                    }}
                  >
                    {t(
                      "nousRejoindre.content.reasons.opportunities.description"
                    )}
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                    }}
                  >
                    {t("nousRejoindre.content.reasons.impact.title")}
                  </h3>
                  <p
                    className="text-white/90"
                    lang={i18n.language}
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                      textAlign: i18n.language === "ar" ? "right" : "left",
                      lineHeight: i18n.language === "ar" ? "1.2" : "1.6",
                    }}
                  >
                    {t("nousRejoindre.content.reasons.impact.description")}
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="flex-shrink-0">
                <img
                  alt={
                    i18n.language === "ar"
                      ? "رسم توضيحي للتعاون في الفريق"
                      : "Team collaboration illustration"
                  }
                  className="max-w-sm w-full h-auto"
                  src="/lovable-uploads/d805d038-1a06-4616-935a-37efc6dcb930.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NousRejoindreContent;
