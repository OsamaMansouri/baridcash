import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
const DownloadSection: React.FC = () => {
  const { t } = useTranslation("common");

  return (
    <section className="relative bg-barid-background py-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left side: Text and buttons */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-barid-brown uppercase mb-4">
              {t("download.title")}
            </h2>
            <div className="w-32 h-1.5 bg-barid-brown my-6"></div>

            <p className="text-barid-brown/80 text-lg mb-8 max-w-xl">
              {t("download.subtitle")}
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
                      <span className="text-xs font-light">
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
                      <span className="text-xs font-light">
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

          {/* Right side: Phone image - FURTHER INCREASED SIZE */}
          <div className="flex-1 flex justify-center md:justify-end">
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

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 w-full transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80">
          <path
            fill="#fef6e4"
            fillOpacity="1"
            d="M0,32L120,37.3C240,43,480,53,720,58.7C960,64,1200,64,1320,64L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};
export default DownloadSection;
