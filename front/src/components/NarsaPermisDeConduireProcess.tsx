import React from "react";
import { useTranslation } from "react-i18next";

const NarsaPermisDeConduireProcess: React.FC = () => {
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
          {t("narsaPermisDeConduire.process.title")}
        </h2>

        {/* First brown div - Renewal section */}
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
              {t("narsaPermisDeConduire.process.renewal.title")}
            </h3>

            <p
              className={`mb-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                1. {t("narsaPermisDeConduire.process.renewal.step1")}
              </strong>
            </p>
            <ul
              className={`list-disc space-y-1 mb-4 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaPermisDeConduire.process.renewal.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <p
              className={`mb-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                2. {t("narsaPermisDeConduire.process.renewal.step2")}
              </strong>
            </p>
            <p
              className={`text-sm ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                3. {t("narsaPermisDeConduire.process.renewal.step3")}
              </strong>
            </p>
          </div>
        </div>

        {/* Second brown div - Lost license section */}
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
              {t("narsaPermisDeConduire.process.duplicate.title")}
            </h3>

            <p
              className={`mb-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                1. {t("narsaPermisDeConduire.process.duplicate.step1")}
              </strong>
            </p>
            <ul
              className={`list-disc space-y-1 mb-4 text-sm ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaPermisDeConduire.process.duplicate.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <p
              className={`mb-2 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                2. {t("narsaPermisDeConduire.process.duplicate.step2")}
              </strong>
            </p>
            <p
              className={`text-sm ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              <strong>
                3. {t("narsaPermisDeConduire.process.duplicate.step3")}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarsaPermisDeConduireProcess;
