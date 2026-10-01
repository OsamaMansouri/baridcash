import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AmanaContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="py-16 bg-[#F27D30]">
      <div
        id="amana-content-container"
        className="container mx-auto px-4 flex flex-col gap-8 items-center"
      >
        {/* First section with original Amana content */}
        <div className="rounded-[1.5rem] bg-[#5A433D] p-8 w-[90%] md:w-[80%] lg:w-[70%] min-w-[300px] text-white">
          <h2
            className="text-2xl font-bold mb-4"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.content.title")}
          </h2>
          <p
            className="text-sm mb-6 font-bold"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.content.description")}
          </p>

          <Separator className="bg-white/30 my-4" />

          <h3
            className="text-lg font-bold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.content.national.title")}
          </h3>
          <ul
            className={`space-y-2 ${i18n.language === "ar" ? "pr-6" : "pl-6"}`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStylePosition: "inside",
            }}
          >
            <li
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("amana.content.national.description")}
            </li>
          </ul>

          <h3
            className="text-lg font-bold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.content.international.title")}
          </h3>
          <ul
            className={`space-y-2 ${i18n.language === "ar" ? "pr-6" : "pl-6"}`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStylePosition: "inside",
            }}
          >
            <li
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("amana.content.international.description")}
            </li>
          </ul>

          <h3
            className="text-lg font-bold mt-4 mb-2"
            lang={i18n.language === "ar" ? "ar" : "fr"}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              fontFamily:
                i18n.language === "ar"
                  ? "Cairo, Arial, sans-serif"
                  : "Inter, Arial, sans-serif",
            }}
          >
            {t("amana.content.7dak.title")}
          </h3>
          <ul
            className={`space-y-2 ${i18n.language === "ar" ? "pr-6" : "pl-6"}`}
            style={{
              direction: i18n.language === "ar" ? "rtl" : "ltr",
              listStylePosition: "inside",
            }}
          >
            <li
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("amana.content.7dak.description")}
            </li>
          </ul>

          <Link to="/nos-points-de-vente">
            <Button className="mt-6 bg-[#F27D30] hover:bg-[#E76D20] text-white font-bold py-2 px-4 rounded-lg inline-flex items-center gap-2">
              <span
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("amana.content.discoverButton")}
              </span>
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AmanaContent;
