import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DevenezMandataireHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Add animations on component mount
  useEffect(() => {
    const elements = [
      {
        ref: titleRef,
        delay: 300,
      },
      {
        ref: buttonRef,
        delay: 600,
      },
      {
        ref: imageRef,
        delay: 900,
      },
    ];

    // Staggered animation timing
    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add(
            "opacity-100",
            "translate-y-0",
            "scale-100"
          );
        }, delay);
      }
    });
  }, []);
  return (
    <section className="bg-barid-background overflow-hidden py-[50px]">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          } items-center`}
        >
          {/* Text content */}
          <div
            className={`md:w-1/2 text-center ${
              i18n.language === "ar" ? "md:text-right" : "md:text-left"
            } mb-10 md:mb-0`}
            style={{ textAlign: i18n.language === "ar" ? "right" : "left" }}
          >
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 lg:text-5xl"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.title")}
            </h1>

            <p
              className="mt-4 text-gray-700 mb-4 text-lg"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.description1")}
            </p>

            <p
              className="mt-4 text-gray-700 mb-4 text-lg"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.description2")}
            </p>

            <p
              className="mt-4 text-gray-700 mb-4 text-lg"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
                textAlign: i18n.language === "ar" ? "right" : "left",
              }}
            >
              {t("devenezMandataire.description3")}
            </p>

            <div className="mt-6 space-y-4 text-gray-700">
              <div></div>

              <div></div>
            </div>

            <Link
              to={
                i18n.language === "ar"
                  ? "/ar/contactez-nous"
                  : "/contactez-nous"
              }
            >
              <button
                ref={buttonRef}
                className="btn-orange mt-8 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                lang={i18n.language === "ar" ? "ar" : "fr"}
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                  textAlign: i18n.language === "ar" ? "right" : "left",
                }}
              >
                {t("devenezMandataire.contactButton")}
                <i
                  className={`fas fa-arrow-${
                    i18n.language === "ar" ? "left" : "right"
                  } ${
                    i18n.language === "ar" ? "mr-2" : "ml-2"
                  } group-hover:translate-x-${
                    i18n.language === "ar" ? "-1" : "1"
                  } transition-transform`}
                ></i>
              </button>
            </Link>
          </div>

          {/* Updated image with your new upload */}
          <div
            ref={imageRef}
            className={`md:w-1/2 flex justify-center transition-all duration-1000 ease-out ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              alt="Devenez Mandataire"
              src="/lovable-uploads/ef9fb839-da57-4895-9ea5-0918a7415011.png"
              className="max-w-full h-auto rounded-lg w-[70%] md:w-[70%] lg:w-[70%]"
              onLoad={() => console.log("Image loaded successfully")}
              onError={(e) => {
                console.error("Image failed to load:", e);
                // Fallback to a placeholder or different image
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default DevenezMandataireHeroSection;
