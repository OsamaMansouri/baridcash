import React from "react";
import { useTranslation } from "react-i18next";

const NarsaMutationProcess: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#fef6e4]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* Heading above the brown div */}
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
          {t("narsaMutation.process.title")}
        </h2>

        {/* Brown div with content from the image */}
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
            <p
              className={`text-lg mb-6 ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaMutation.process.description")}
            </p>

            <ul
              className={`list-disc space-y-2 mb-6 ${
                i18n.language === "ar" ? "pr-6 text-right" : "pl-6 text-left"
              }`}
              style={{ listStylePosition: "inside" }}
            >
              {t("narsaMutation.process.documents", {
                returnObjects: true,
              }).map((doc: string, index: number) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>

            <p
              className={`text-lg ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t("narsaMutation.process.conclusion")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarsaMutationProcess;
