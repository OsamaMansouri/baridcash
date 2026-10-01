import React from "react";
import { useTranslation } from "react-i18next";

const NousConnaitreV2FinalSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      {/* Orange decorative wave image */}
      <div className="w-full">
        <img
          src="/lovable-uploads/d9c998c0-1334-4dce-92ae-8fc650c7ba1f.png"
          alt="BaridCash Decorative Wave"
          className="w-full h-auto"
          onLoad={() => console.log("Wave image loaded successfully")}
          onError={(e) => {
            console.error("Wave image failed to load:", e);
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>
      
      {/* Main orange section */}
      <section className="py-16 bg-[#F27D30]">
        <div className="container mx-auto px-4 flex flex-col gap-12 items-center">
          <div className="w-full flex flex-col items-center">
            <h2
              className={`text-white text-4xl font-bold mb-8 w-full max-w-6xl ${
                i18n.language === "ar" ? "text-right" : "text-left"
              }`}
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("nousConnaitre.engagements.title")}
            </h2>

            <div
              className="bg-[#5A433D] p-8 rounded-[1.5rem] text-white w-full max-w-6xl"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              <div className="flex flex-col items-center gap-8">
                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.security.title")}
                    </h3>
                    <p
                      className="text-white/90"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.security.description")}
                    </p>
                  </div>
                  
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.fees.title")}
                    </h3>
                    <p
                      className="text-white/90"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.fees.description")}
                    </p>
                  </div>
                  
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.instant.title")}
                    </h3>
                    <p
                      className="text-white/90"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.instant.description")}
                    </p>
                  </div>
                  
                  <div>
                    <h3
                      className="text-xl font-semibold mb-3"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.proximity.title")}
                    </h3>
                    <p
                      className="text-white/90"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        direction: i18n.language === "ar" ? "rtl" : "ltr",
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("nousConnaitre.engagements.proximity.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NousConnaitreV2FinalSection;
