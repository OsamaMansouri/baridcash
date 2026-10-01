import React from "react";
import { useTranslation } from "react-i18next";

const AnnoncesLegalesContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* White headline above the brown div */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-white mb-2 text-center ${
            i18n.language === "ar" ? "text-right" : "text-left"
          }`}
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("annoncesLegales.content.title")}
        </h2>

        {/* Brown div with content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <h3
            className={`text-xl font-bold mb-4 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("annoncesLegales.content.description")}
          </h3>

          <ul
            className={`list-disc space-y-1 mb-6 ${
              i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {(
              t("annoncesLegales.content.advantages", {
                returnObjects: true,
              }) as string[]
            ).map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>

          <h3
            className={`text-xl font-bold mb-4 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("annoncesLegales.content.process.title")}
          </h3>

          <ul
            className={`list-disc space-y-1 mb-6 ${
              i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
            }`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {(
              t("annoncesLegales.content.process.steps", {
                returnObjects: true,
              }) as string[]
            ).map((step, index) => (
              <li key={index}>
                {step.includes("www.annonceslegales.gov.ma") ? (
                  <>
                    {step.split("www.annonceslegales.gov.ma")[0]}
                    <a
                      href="http://www.annonceslegales.gov.ma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F27D30] hover:underline"
                    >
                      www.annonceslegales.gov.ma
                    </a>
                    {step.split("www.annonceslegales.gov.ma")[1]}
                  </>
                ) : (
                  step
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AnnoncesLegalesContent;
