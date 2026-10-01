import React from "react";
import { useTranslation } from "react-i18next";

const CartesMonetiquesContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-8 items-center">
        {/* White headline above the brown div */}
        <h2
          className="text-3xl md:text-4xl font-bold text-white mb-2"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
            textAlign: i18n.language === "ar" ? "right" : "left",
          }}
        >
          {t("cartesMonetiques.content.title")}
        </h2>

        {/* Brown div with content from the image */}
        <div
          className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white"
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
            textAlign: i18n.language === "ar" ? "right" : "left",
          }}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("cartesMonetiques.content.operational.title")}
          </h3>
          <ul
            className="list-disc space-y-1 mb-6"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
              paddingRight: i18n.language === "ar" ? "24px" : "0",
              paddingLeft: i18n.language === "ar" ? "0" : "24px",
            }}
          >
            {(
              t("cartesMonetiques.content.operational.items", {
                returnObjects: true,
              }) || []
            ).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-bold mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("cartesMonetiques.content.simple.title")}
          </h3>
          <ul
            className="list-disc space-y-1 mb-6"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
              paddingRight: i18n.language === "ar" ? "24px" : "0",
              paddingLeft: i18n.language === "ar" ? "0" : "24px",
            }}
          >
            {(
              t("cartesMonetiques.content.simple.items", {
                returnObjects: true,
              }) || []
            ).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-bold mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("cartesMonetiques.content.secure.title")}
          </h3>
          <ul
            className="list-disc space-y-1 mb-6"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
              paddingRight: i18n.language === "ar" ? "24px" : "0",
              paddingLeft: i18n.language === "ar" ? "0" : "24px",
            }}
          >
            {(
              t("cartesMonetiques.content.secure.items", {
                returnObjects: true,
              }) || []
            ).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3
            className="text-xl font-bold mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("cartesMonetiques.content.accessible.title")}
          </h3>
          <ul
            className="list-disc space-y-1 mb-6"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
              paddingRight: i18n.language === "ar" ? "24px" : "0",
              paddingLeft: i18n.language === "ar" ? "0" : "24px",
            }}
          >
            {(
              t("cartesMonetiques.content.accessible.items", {
                returnObjects: true,
              }) || []
            ).map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CartesMonetiquesContent;
