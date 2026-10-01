import React from "react";
import { useTranslation } from "react-i18next";

const TransferInternationalPartnersSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10`}
        >
          {i18n.language === "ar" ? (
            <>
              {/* Text Column - right side for Arabic */}
              <div className="lg:w-1/2" style={{ textAlign: "right" }}>
                <h2
                  className="text-4xl font-bold text-white mb-6"
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                >
                  {t("transferInternational.partnersSection.title")}
                </h2>
                <p
                  className="text-lg text-white leading-relaxed mb-8"
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                    lineHeight: "1.2",
                  }}
                >
                  {t("transferInternational.partnersSection.description")}
                </p>
              </div>

              {/* Image Column - left side for Arabic */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  alt="شركاؤنا الدوليون"
                  className="max-w-full h-auto rounded-lg"
                  src="/lovable-uploads/03c03592-56be-4f2e-8de9-5f774e3e73f0.png"
                />
              </div>
            </>
          ) : (
            <>
              {/* Text Column - left side for French */}
              <div className="lg:w-1/2" style={{ textAlign: "left" }}>
                <h2
                  className="text-4xl font-bold text-white mb-6"
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                >
                  {t("transferInternational.partnersSection.title")}
                </h2>
                <p
                  className="text-lg text-white leading-relaxed mb-8"
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}
                >
                  {t("transferInternational.partnersSection.description")}
                </p>
              </div>

              {/* Image Column - right side for French */}
              <div className="lg:w-1/2 flex justify-center">
                <img
                  alt="Nos partenaires internationaux"
                  className="max-w-full h-auto rounded-lg"
                  src="/lovable-uploads/03c03592-56be-4f2e-8de9-5f774e3e73f0.png"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default TransferInternationalPartnersSection;
