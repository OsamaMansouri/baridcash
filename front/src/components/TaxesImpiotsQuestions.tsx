import React from "react";
import { useTranslation } from "react-i18next";
const TaxesImpiotsQuestions: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      {/* Image before the section */}
      <div className="w-full">
        <img
          src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
          alt="BaridCash Decorative Banner"
          className="w-full h-auto"
        />
      </div>

      <section className="py-16 bg-barid-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-barid-brown p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3
                    className="font-semibold text-white mb-4 text-lg"
                    style={{
                      direction: i18n.language === "ar" ? "rtl" : "ltr",
                      fontFamily:
                        i18n.language === "ar"
                          ? "Cairo, Arial, sans-serif"
                          : "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("taxesImpots.questionsSection.title")}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4
                        className="font-semibold text-white mb-3"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("taxesImpots.questionsSection.agencyTitle")}
                      </h4>
                      <ul
                        className={`${
                          i18n.language === "ar" ? "mr-4" : "ml-4"
                        } space-y-2 text-white`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("taxesImpots.questionsSection.agencySteps", {
                          returnObjects: true,
                        }).map((step: string, index: number) => (
                          <li key={index}>• {step}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4
                        className="font-semibold text-white mb-3"
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("taxesImpots.questionsSection.appTitle")}
                      </h4>
                      <ul
                        className={`${
                          i18n.language === "ar" ? "mr-4" : "ml-4"
                        } space-y-2 text-white`}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("taxesImpots.questionsSection.appSteps", {
                          returnObjects: true,
                        }).map((step: string, index: number) => (
                          <li key={index}>• {step}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New decorative image after the section with no padding */}
      <div className="w-full">
        <img
          src="/lovable-uploads/dbbf3408-853a-45d3-9da4-0cafeb21faad.png"
          alt="BaridCash Decorative Footer"
          className="w-full h-auto"
        />
      </div>
    </>
  );
};
export default TaxesImpiotsQuestions;
