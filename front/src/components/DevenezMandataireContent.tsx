import React from "react";
import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator";

const DevenezMandataireContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div className="container mx-auto px-4 flex flex-col gap-12 items-center">
        {/* Section 1: Devenir mandataire avec une panoplie de produits financiers */}
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-white text-4xl font-bold text-center"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("devenezMandataire.productsTitle")}
          </h2>

          <div
            className="mt-8 bg-[#5A433D] p-8 rounded-[1.5rem] text-white w-full lg:w-[70%]"
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
              className="text-xl font-semibold mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.productsSubtitle")}
            </h3>
            <ul
              className="space-y-2 list-disc"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
                marginRight: i18n.language === "ar" ? "24px" : "0",
                marginLeft: i18n.language === "ar" ? "0" : "24px",
              }}
            >
              <li>{t("devenezMandataire.products.transfer")}</li>
              <li>{t("devenezMandataire.products.bills")}</li>
              <li>{t("devenezMandataire.products.accounts")}</li>
              <li>{t("devenezMandataire.products.egov")}</li>
              <li>{t("devenezMandataire.products.narsa")}</li>
              <li>{t("devenezMandataire.products.cnss")}</li>
              <li>{t("devenezMandataire.products.postal")}</li>
              <li>{t("devenezMandataire.products.insurance")}</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Les avantages d'être mandataire */}
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-white text-4xl font-bold"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("devenezMandataire.advantagesTitle")}
          </h2>

          <div
            className="mt-8 bg-[#5A433D] p-8 rounded-[1.5rem] text-white w-full lg:w-[70%]"
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
              className="text-xl font-semibold mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.advantagesSubtitle")}
            </h3>
            <ul
              className="space-y-2 list-disc"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
                marginRight: i18n.language === "ar" ? "24px" : "0",
                marginLeft: i18n.language === "ar" ? "0" : "24px",
              }}
            >
              <li>{t("devenezMandataire.advantages.revenue")}</li>
              <li>{t("devenezMandataire.advantages.services")}</li>
              <li>{t("devenezMandataire.advantages.range")}</li>
              <li>{t("devenezMandataire.advantages.exclusive")}</li>
              <li>{t("devenezMandataire.advantages.training")}</li>
              <li>{t("devenezMandataire.advantages.support")}</li>
              <li>{t("devenezMandataire.advantages.technology")}</li>
            </ul>
          </div>
        </div>

        {/* Section 3: Les critères pour devenir mandataire */}
        <div className="w-full flex flex-col items-center">
          <h2
            className="text-white text-4xl font-bold"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
              textAlign: i18n.language === "ar" ? "right" : "left",
            }}
          >
            {t("devenezMandataire.criteriaTitle")}
          </h2>

          <div
            className="mt-8 bg-[#5A433D] p-8 rounded-[1.5rem] text-white w-full lg:w-[70%]"
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
              className="text-xl font-semibold mb-4"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.criteriaSubtitle")}
            </h3>
            <ul
              className="space-y-2 list-disc"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
                marginRight: i18n.language === "ar" ? "24px" : "0",
                marginLeft: i18n.language === "ar" ? "0" : "24px",
              }}
            >
              <li>{t("devenezMandataire.criteria.legal")}</li>
              <li>{t("devenezMandataire.criteria.premises")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevenezMandataireContent;
