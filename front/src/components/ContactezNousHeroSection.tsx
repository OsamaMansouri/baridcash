import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const ContactezNousHeroSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
      if (buttonRef.current) {
        buttonRef.current.style.opacity = "1";
        buttonRef.current.style.transform = "translateY(0)";
      }
      if (imageRef.current) {
        imageRef.current.style.opacity = "1";
        imageRef.current.style.transform = "scale(1)";
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-barid-background overflow-hidden py-[50px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {i18n.language === "ar" ? (
            <>
              {/* Text content - right side for Arabic */}
              <div className="md:w-1/2 text-center md:text-right mb-10 md:mb-0">
                <h1
                  ref={titleRef}
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 pt-4 md:pt-0 text-right"
                >
                  {t("contactezNous.hero.title")}
                </h1>
                <p
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                    textAlign: "right",
                    lineHeight: "1.2",
                  }}
                  className="mt-4 text-lg text-gray-700 mb-4 text-right leading-relaxed"
                >
                  {t("contactezNous.hero.description")}
                </p>

                <div className="mt-6 space-y-4 text-gray-700 text-right">
                  <div>
                    <p
                      className="font-bold"
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.email")}
                    </p>
                    <p
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.emailValue")}
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-bold"
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.location")}
                    </p>
                    <p
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.locationValue")}
                    </p>
                  </div>
                </div>

                <button
                  ref={buttonRef}
                  className="btn-orange mt-8 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="ar"
                  style={{
                    direction: "rtl",
                    fontFamily: "Cairo, Arial, sans-serif",
                  }}
                  onClick={() => {
                    window.location.href = "/nos-points-de-vente";
                  }}
                >
                  {t("contactezNous.hero.cta")}
                  <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                </button>
              </div>

              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="اتصل بنا"
                  src="/lovable-uploads/8afd52e6-4c69-41e0-b984-8224dcb1946c.png"
                  className="max-w-full h-auto rounded-lg w-[70%] md:w-[70%] lg:w-[70%]"
                />
              </div>
            </>
          ) : (
            <>
              {/* Text content - left side for French */}
              <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                <h1
                  ref={titleRef}
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                  }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 pt-4 md:pt-0 text-left"
                >
                  {t("contactezNous.hero.title")}
                </h1>
                <p
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                    textAlign: "left",
                    lineHeight: "1.6",
                  }}
                  className="mt-4 text-lg text-gray-700 mb-4 text-left leading-relaxed"
                >
                  {t("contactezNous.hero.description")}
                </p>

                <div className="mt-6 space-y-4 text-gray-700 text-left">
                  <div>
                    <p
                      className="font-bold"
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.email")}
                    </p>
                    <p
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.emailValue")}
                    </p>
                  </div>

                  <div>
                    <p
                      className="font-bold"
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.location")}
                    </p>
                    <p
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("contactezNous.hero.locationValue")}
                    </p>
                  </div>
                </div>

                <button
                  ref={buttonRef}
                  className="btn-orange mt-8 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                  lang="fr"
                  style={{
                    direction: "ltr",
                    fontFamily: "Inter, Arial, sans-serif",
                  }}
                  onClick={() => {
                    window.location.href = "/nos-points-de-vente";
                  }}
                >
                  {t("contactezNous.hero.cta")}
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="Contactez Nous"
                  src="/lovable-uploads/8afd52e6-4c69-41e0-b984-8224dcb1946c.png"
                  className="max-w-full h-auto rounded-lg w-[70%] md:w-[70%] lg:w-[70%]"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactezNousHeroSection;
