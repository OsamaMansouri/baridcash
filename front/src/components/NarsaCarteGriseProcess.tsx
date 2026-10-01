import React from "react";
import { useTranslation } from "react-i18next";

const NarsaCarteGriseProcess: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Heading above the brown divs */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#5A433D] mb-2 ${
            i18n.language === "ar" ? "text-right" : "text-center"
          }`}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("narsaCarteGrise.process.title")}
        </h2>

        {/* First brown div - Renouvellement section */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <div
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaCarteGrise.process.renewal.title")}
            </h3>
            <p
              className={`mb-4 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>{t("narsaCarteGrise.process.renewal.subtitle")}</strong>
            </p>
            <ul
              className={`list-disc space-y-2 mb-6 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaCarteGrise.process.renewal.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <p
              className={`mb-4 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                {t("narsaCarteGrise.process.renewal.exchange.subtitle")}
              </strong>
            </p>
            <ul
              className={`list-disc space-y-2 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaCarteGrise.process.renewal.exchange.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second brown div - Duplicata section */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <div
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            <h3
              className={`text-xl font-bold mb-4 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaCarteGrise.process.duplicata.title")}
            </h3>
            <ul
              className={`list-disc space-y-2 mb-6 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaCarteGrise.process.duplicata.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <h4
              className={`text-lg font-bold mb-3 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaCarteGrise.process.duplicata.loss.subtitle")}
            </h4>
            <ul
              className={`list-disc space-y-1 mb-6 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaCarteGrise.process.duplicata.loss.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <h4
              className={`text-lg font-bold mb-3 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaCarteGrise.process.duplicata.exchange.subtitle")}
            </h4>
            <ul
              className={`list-disc space-y-1 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaCarteGrise.process.duplicata.exchange.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarsaCarteGriseProcess;
