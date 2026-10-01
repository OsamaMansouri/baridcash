import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FacturesAchatTrainTicket: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-barid-background">
      <div className="container mx-auto px-4">
        <div
          className={`mb-12 ${
            i18n.language === "ar" ? "text-right" : "text-center"
          }`}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-barid-brown mb-4"
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("facturesAchat.trainTicket.title")}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-barid-brown text-white p-8 md:p-12 rounded-2xl relative">
            <p
              className="text-lg md:text-xl mb-6 leading-relaxed"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("facturesAchat.trainTicket.description")}
            </p>

            <ul
              className={`space-y-3 mb-8 ${
                i18n.language === "ar"
                  ? "text-right list-inside"
                  : "text-left list-inside"
              }`}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                listStyleType: "disc",
                listStylePosition: "inside",
              }}
            >
              {(
                t("facturesAchat.trainTicket.steps", {
                  returnObjects: true,
                }) as string[]
              ).map((step, index) => (
                <li
                  key={index}
                  className={`text-base md:text-lg ${
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
                  {step}
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-barid-orange hover:bg-barid-orange/90 text-white font-semibold px-4 py-3 rounded-lg w-full md:w-auto inline-flex items-center justify-center gap-2 whitespace-normal text-center"
            >
              <Link to="/nos-points-de-vente">
                <span
                  className="flex-1"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {t("facturesAchat.trainTicket.cta")}
                </span>
                <ArrowRight className="w-4 h-4 flex-shrink-0" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FacturesAchatTrainTicket;
