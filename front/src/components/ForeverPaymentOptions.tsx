import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import AgencyMap from "./AgencyMap";
import { useLocationFilter } from "@/hooks/useLocationFilter";
import { useTranslation } from "react-i18next";
import { MapPin, Download } from "lucide-react";

const ForeverPaymentOptions: React.FC = () => {
  const { t, i18n } = useTranslation("common");
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const {
    service,
    setService,
    city,
    setCity,
    location,
    setLocation,
    availableCities,
    filteredAgencies,
  } = useLocationFilter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // App Store SVG Icon
  const AppStoreIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.13997 6.91 8.85997 6.88C10.15 6.85 11.36 7.72 12.1 7.72C12.83 7.72 14.3 6.68 15.87 6.84C16.52 6.87 18.1 7.15 19.05 8.71C18.27 9.19 16.91 10.36 16.92 12.16C16.93 14.3 18.68 15.08 18.71 15.09C18.67 15.23 18.32 16.45 17.55 17.7C16.89 18.75 16.2 19.79 15.04 19.8L18.71 19.5Z"
        fill="currentColor"
      />
      <path
        d="M13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
        fill="currentColor"
      />
    </svg>
  );

  // Google Play SVG Icon
  const GooglePlayIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
        fill="currentColor"
      />
      <path
        d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z"
        fill="currentColor"
      />
      <path
        d="M20.16 10.81C20.5 11.08 20.75 11.53 20.75 12S20.5 12.92 20.16 13.19L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z"
        fill="currentColor"
      />
      <path
        d="M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
        fill="currentColor"
      />
    </svg>
  );

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-10 w-48 h-48 bg-barid-orange rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-barid-brown rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-barid-orange/50 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-barid-brown text-center mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
          >
            Avec Barid Cash, payez vos commandes :
          </h2>

          <div className="space-y-12">
            {/* En agences Barid Cash Card - Full Width */}
            <div
              ref={(el) => (cardsRef.current[0] = el)}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 bg-barid-orange/10 rounded-xl">
                    <MapPin className="h-8 w-8 text-barid-orange" />
                  </div>
                  <h3 className="text-3xl font-bold text-barid-brown">
                    En agences Barid Cash
                  </h3>
                </div>

                <p className="text-gray-700 mb-8 text-lg text-center">
                  Découvrez l'agence la plus proche de chez vous !
                </p>

                {/* Filtering options */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  {/* Service dropdown */}
                  <div className="md:w-1/3">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("location.services")}
                    </label>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger className="bg-barid-cream border-gray-200">
                        <SelectValue placeholder={t("location.services")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {t("location.allServices")}
                        </SelectItem>
                        <SelectItem value="narsa">
                          {t("serviceNames.narsa")}
                        </SelectItem>
                        <SelectItem value="cnss">
                          {t("serviceNames.cnss")}
                        </SelectItem>
                        <SelectItem value="amana">
                          {t("serviceNames.amana")}
                        </SelectItem>
                        <SelectItem value="change">
                          {t("serviceNames.change")}
                        </SelectItem>
                        <SelectItem value="barid-e-sign">
                          {t("serviceNames.baridESign")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* City dropdown */}
                  <div className="md:w-1/3">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("location.city")}
                    </label>
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger className="bg-barid-cream border-gray-200">
                        <SelectValue placeholder={t("location.chooseCity")} />
                      </SelectTrigger>
                      <SelectContent className="max-h-60">
                        {availableCities.map((cityName) => (
                          <SelectItem key={cityName} value={cityName}>
                            {cityName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Location search */}
                  <div className="md:w-1/3">
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1"
                      lang={i18n.language === "ar" ? "ar" : "fr"}
                      style={{
                        fontFamily:
                          i18n.language === "ar"
                            ? "Cairo, Arial, sans-serif"
                            : "Inter, Arial, sans-serif",
                      }}
                    >
                      {t("location.location")}
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder={t("location.searchPlaceholder")}
                        className="pl-10 bg-barid-cream border-gray-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Results summary */}
                <div
                  className="mb-4 text-sm text-gray-600"
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {filteredAgencies.length} {t("location.resultsFound")}
                </div>

                <div className="h-96 w-full rounded-xl overflow-hidden border shadow-lg">
                  <AgencyMap agencies={filteredAgencies} />
                </div>
              </Card>
            </div>

            {/* Depuis votre application Barid Pay Card - Full Width */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
              style={{ transitionDelay: "200ms" }}
            >
              <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-2 bg-barid-orange/10 rounded-xl">
                    <img
                      src="/lovable-uploads/0b735937-44be-4938-bc7f-019297c78c4b.png"
                      alt="Barid Pay"
                      className="h-12 w-12 rounded-lg shadow-sm"
                    />
                  </div>
                  <h3 className="text-3xl font-bold text-barid-brown">
                    Depuis votre application Barid Pay
                  </h3>
                </div>

                <div className="max-w-md mx-auto">
                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-br from-barid-orange/5 to-barid-brown/5 p-8 rounded-2xl mb-6 shadow-inner border border-gray-100">
                      <img
                        src="/lovable-uploads/0b735937-44be-4938-bc7f-019297c78c4b.png"
                        alt="Barid Pay App"
                        className="h-32 w-32 mx-auto mb-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-gray-700 font-semibold">
                        Application mobile Barid Pay
                      </p>
                      <p className="text-gray-500 text-sm mt-2">
                        Payez en toute sécurité depuis votre smartphone
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="https://apps.apple.com/ma/app/barid-pay/id1457990295?l=fr-FR"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-black hover:bg-gray-800 text-white py-8 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-4">
                        <AppStoreIcon />
                        <div className="text-left">
                          <div className="text-xs text-gray-300">
                            Télécharger sur
                          </div>
                          <div className="text-lg font-semibold">App Store</div>
                        </div>
                      </Button>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=ma.baridcash.saphir.baridpay&pli=1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-8 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-4">
                        <GooglePlayIcon />
                        <div className="text-left">
                          <div className="text-xs text-green-100">
                            Disponible sur
                          </div>
                          <div className="text-lg font-semibold">
                            Google Play
                          </div>
                        </div>
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForeverPaymentOptions;
