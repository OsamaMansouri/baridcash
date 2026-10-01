import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const TransferDownloadSection: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <section className="bg-barid-background overflow-hidden py-0">
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
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
          >
            <h2
              className="text-4xl md:text-5xl font-bold leading-tight text-gray-900"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("download.transferTitle")}
            </h2>
            <p
              className="mt-4 text-lg text-gray-700 mb-8"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("download.transferDescription")}
            </p>
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
                      <span
                        className="text-xs font-light"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("download.downloadOn")}
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
                      <span
                        className="text-xs font-light"
                        lang={i18n.language === "ar" ? "ar" : "fr"}
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {t("download.downloadOn")}
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

          {/* Image - increased size */}
          <div
            className={`md:w-1/2 flex justify-center ${
              i18n.language === "ar" ? "md:order-first" : ""
            }`}
          >
            <img
              src="/lovable-uploads/06a67a5c-37a4-4ab1-8b22-22d24c0b82e7.png"
              alt={i18n.language === "ar" ? "تطبيق بريد پاي" : "BaridPay App"}
              className="max-w-full h-auto rounded-lg w-[110%] md:w-[125%] lg:w-[140%]"
              onLoad={() => console.log("Image loaded successfully")}
              onError={(e) => {
                console.error("Image failed to load:", e);
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferDownloadSection;
