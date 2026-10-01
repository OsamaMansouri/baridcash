import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");

  // Fallback text in case translations are not loaded
  const title = t("hero.title") || "Envoyez et recevez de l'argent";
  const cta = t("hero.cta") || "Découvrir";

  return (
    <section className="bg-barid-background overflow-hidden py-[30px]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center ${
              i18n.language === "ar" ? "md:text-right hero-rtl" : "md:text-left"
            } mb-10 md:mb-0`}
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {title}
            </h1>
            <button
              onClick={() =>
                navigate(
                  i18n.language === "ar"
                    ? "/ar/transfert-argent-national"
                    : "/transfert-argent-national"
                )
              }
              className="btn-orange mt-8 group"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {cta}
              <i
                className={`fas fa-arrow-right group-hover:translate-x-1 transition-transform`}
              ></i>
            </button>
          </div>

          {/* Image - FURTHER INCREASED SIZE */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Money Transfer Services"
              className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
              src="/lovable-uploads/00813324-a537-44db-82bd-d19f24db68cd.png"
              onLoad={() => console.log("Hero image loaded successfully")}
              onError={(e) => {
                console.error("Hero image failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
