import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
const ETimbreServiceContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="relative py-16 bg-barid-orange">
      <div className="container mx-auto px-4 py-0">
        <div
          className={`flex flex-col items-center justify-between gap-10 ${
            i18n.language === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Left side: Text and buttons */}
          <div
            className={`flex-1 ${
              i18n.language === "ar" ? "md:order-last" : ""
            }`}
          >
            <h2
              className={`text-3xl md:text-4xl font-bold uppercase mb-4 text-white ${
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
              {t("eTimbreService.content.title")}
            </h2>

            <p
              className={`text-lg mb-8 max-w-xl text-white ${
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
              {t("eTimbreService.content.description")},                           </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/ma/app/barid-pay/id1457990295?l=fr-FR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="bg-black text-white hover:bg-black/90 flex items-center gap-2 py-6 px-6"
                  variant="default"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/lovable-uploads/182a7cbb-a754-4831-a977-f569f8c7a444.png"
                      alt="Apple Logo"
                      className="h-8 w-8"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-light">
                        {t("eTimbreService.content.downloadOn")}
                      </span>
                      <img
                        src="/lovable-uploads/ef357b7f-9a71-4eaa-89c6-512889c7816b.png"
                        alt="App Store"
                        className="h-5"
                      />
                    </div>
                  </div>
                </Button>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=ma.baridcash.saphir.baridpay"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  className="bg-black text-white hover:bg-black/90 flex items-center gap-2 py-6 px-6"
                  variant="default"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src="/lovable-uploads/221910b7-d40a-43d7-be23-f16f0f66d05c.png"
                      alt="Google Play Logo"
                      className="h-8 w-8"
                    />
                    <div className="flex flex-col items-start">
                      <span className="text-xs font-light">
                        {t("eTimbreService.content.downloadOn")}
                      </span>
                      <img
                        src="/lovable-uploads/e38b756f-7468-47fa-82e6-5dcf8bf57aa1.png"
                        alt="Google Play"
                        className="h-5"
                      />
                    </div>
                  </div>
                </Button>
              </a>
            </div>
          </div>

          {/* Right side: Phone image */}
          <div
            className={`flex-1 flex justify-center ${
              i18n.language === "ar"
                ? "md:justify-start md:order-first"
                : "md:justify-end"
            }`}
          >
            <div className="relative">
              <img
                alt="BaridPay App"
                className="w-96 md:w-[30rem] lg:w-[36rem] h-auto"
                src="/lovable-uploads/06a67a5c-37a4-4ab1-8b22-22d24c0b82e7.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ETimbreServiceContent;
