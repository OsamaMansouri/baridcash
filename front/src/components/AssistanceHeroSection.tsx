import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AssistanceHeroSection: React.FC = () => {
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 text-right"
                >
                  {t("assistanceClient.hero.title")}
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
                  {t("assistanceClient.hero.description")}
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
                      {t("assistanceClient.hero.email")}
                    </p>
                    <p
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.emailValue")}
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
                      {t("assistanceClient.hero.location")}
                    </p>
                    <p
                      lang="ar"
                      style={{
                        direction: "rtl",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.locationValue")}
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
                      {t("assistanceClient.hero.phone")}
                    </p>
                    <p
                      lang="ar"
                      className="phone-number"
                      style={{
                        direction: "ltr",
                        fontFamily: "Cairo, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.phoneValue")}
                    </p>
                  </div>
                </div>

                <Link to="/contactez-nous">
                  <button
                    ref={buttonRef}
                    className="btn-orange mt-8 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                    lang="ar"
                    style={{
                      direction: "rtl",
                      fontFamily: "Cairo, Arial, sans-serif",
                    }}
                  >
                    {t("assistanceClient.hero.cta")}
                    <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
                  </button>
                </Link>
              </div>

              {/* Image - left side for Arabic */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="مساعدة العملاء"
                  className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
                  src="/lovable-uploads/acb2648c-8979-4c76-9328-1d93bb0ccd69.png"
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
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 opacity-0 translate-y-8 transition-all duration-1000 ease-out mb-16 text-left"
                >
                  {t("assistanceClient.hero.title")}
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
                  {t("assistanceClient.hero.description")}
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
                      {t("assistanceClient.hero.email")}
                    </p>
                    <p
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.emailValue")}
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
                      {t("assistanceClient.hero.location")}
                    </p>
                    <p
                      lang="fr"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.locationValue")}
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
                      {t("assistanceClient.hero.phone")}
                    </p>
                    <p
                      lang="fr"
                      className="phone-number"
                      style={{
                        direction: "ltr",
                        fontFamily: "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("assistanceClient.hero.phoneValue")}
                    </p>
                  </div>
                </div>

                <Link to="/contactez-nous">
                  <button
                    ref={buttonRef}
                    className="btn-orange mt-8 group opacity-0 translate-y-8 transition-all duration-1000 ease-out"
                    lang="fr"
                    style={{
                      direction: "ltr",
                      fontFamily: "Inter, Arial, sans-serif",
                    }}
                  >
                    {t("assistanceClient.hero.cta")}
                    <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </Link>
              </div>

              {/* Image - right side for French */}
              <div
                ref={imageRef}
                className="md:w-1/2 flex justify-center opacity-0 scale-95 transition-all duration-1000 ease-out"
              >
                <img
                  alt="Assistance Client"
                  className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
                  src="/lovable-uploads/acb2648c-8979-4c76-9328-1d93bb0ccd69.png"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default AssistanceHeroSection;
