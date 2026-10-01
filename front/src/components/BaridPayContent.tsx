import React, { useState } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const BaridPayContent: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const [currentSlide, setCurrentSlide] = useState(1);
  const [service, setService] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  return (
    <section className="py-16 bg-[#F27D30]">
      {/* Mobile layout - stacked */}
      <div className="block lg:hidden">
        <div className="container mx-auto px-4">
          <div className="bg-[#5A433D] text-white rounded-2xl p-8 mb-8">
            <h2
              className="text-3xl font-bold mb-6"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("baridPay.contentSection.title")}
            </h2>
            <ul
              className="space-y-3 text-lg mb-8"
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("baridPay.contentSection.features", {
                returnObjects: true,
              }).map((feature: string, index: number) => (
                <li key={index}>- {feature}</li>
              ))}
            </ul>

            {/* Download buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                        style={{
                          direction: i18n.language === "ar" ? "rtl" : "ltr",
                          fontFamily:
                            i18n.language === "ar"
                              ? "Cairo, Arial, sans-serif"
                              : "Inter, Arial, sans-serif",
                        }}
                      >
                        {i18n.language === "ar"
                          ? "متوفر على"
                          : "DISPONIBLE SUR"}
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
                        Télécharger sur
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
            </div>
          </div>

          {/* Phone image centered below text on mobile */}
          <div className="flex justify-center">
            <img
              alt="Barid Pay Mobile App Interface"
              className="w-64 h-auto"
              src="/lovable-uploads/a2ed97a0-b5a2-4d6f-9fe3-04c1293bd1b7.png"
            />
          </div>
        </div>
      </div>

      {/* Desktop layout - same as before */}
      <div className="hidden lg:block w-full bg-[#F27D30] py-16 relative">
        {/* Brown background div - full width with left margin */}
        <div className="bg-[#5A433D] text-white ml-8 md:ml-16 mr-0 rounded-l-2xl pr-80 md:pr-96">
          <div className="p-8">
            {/* Text content section */}
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("baridPay.contentSection.title")}
              </h2>
              <ul
                className="space-y-3 text-lg mb-8"
                style={{
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  fontFamily:
                    i18n.language === "ar"
                      ? "Cairo, Arial, sans-serif"
                      : "Inter, Arial, sans-serif",
                }}
              >
                {t("baridPay.contentSection.features", {
                  returnObjects: true,
                }).map((feature: string, index: number) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>

              {/* Download buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
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
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "متوفر على"
                            : "DISPONIBLE SUR"}
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
                          style={{
                            direction: i18n.language === "ar" ? "rtl" : "ltr",
                            fontFamily:
                              i18n.language === "ar"
                                ? "Cairo, Arial, sans-serif"
                                : "Inter, Arial, sans-serif",
                          }}
                        >
                          {i18n.language === "ar"
                            ? "تحميل من"
                            : "Télécharger sur"}
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
              </div>
            </div>
          </div>
        </div>

        {/* Phone image positioned absolutely on the right */}
        <div className="absolute right-8 md:right-16 top-1/2 transform -translate-y-1/2">
          <img
            alt="Barid Pay Mobile App Interface"
            className="w-64 md:w-80 h-auto"
            src="/lovable-uploads/a2ed97a0-b5a2-4d6f-9fe3-04c1293bd1b7.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BaridPayContent;
