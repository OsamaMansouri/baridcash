import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const FacturesEauElectriciteFaqSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section id="faq-factures" className="bg-barid-orange overflow-hidden">
      <div className="py-0">
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-col items-center justify-between gap-10 ${
              i18n.language === "ar" ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Left side: Text and button */}
            <div
              className={`lg:w-1/2 ${
                i18n.language === "ar" ? "lg:order-last" : ""
              }`}
            >
              <h2
                className={`text-4xl md:text-5xl font-bold text-white mb-6 ${
                  i18n.language === "ar" ? "text-right" : "text-left"
                }`}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("facturesEauElectricite.faq.title")}
              </h2>

              <Link to="/contactez-nous">
                <Button
                  className="bg-barid-brown text-white hover:bg-barid-brown/90 rounded-md py-3 px-6 flex items-center gap-2 transition-all duration-300"
                  variant="default"
                >
                  {t("facturesEauElectricite.faq.cta")}
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Right side: Question mark image */}
            <div
              className={`lg:w-1/2 flex justify-center ${
                i18n.language === "ar"
                  ? "lg:justify-start lg:order-first"
                  : "lg:justify-end"
              }`}
            >
              <img
                alt="Question mark"
                className="max-w-[300px] lg:max-w-[400px] h-auto"
                src="/lovable-uploads/7b3a1d33-f522-42f1-bbe1-4587d3da9f97.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FacturesEauElectriciteFaqSection;
