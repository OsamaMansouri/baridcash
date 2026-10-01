import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { useLocationFilter } from "@/hooks/useLocationFilter";
import AgencyMap from "./AgencyMap";
import { useTranslation } from "react-i18next";

const LocationSectionEnterprise: React.FC = () => {
  const { t, i18n } = useTranslation("common");
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

  return (
    <section className="relative bg-barid-orange py-16 overflow-hidden">
      <div className="container mx-auto px-4 pt-8">
        <div className="mb-10 flex flex-col md:flex-row md:items-center">
          <div className="md:flex-1">
            <h2
              className="text-3xl md:text-4xl font-bold text-white uppercase mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("location.heroTitle")}
            </h2>
            <div className="w-32 h-1.5 bg-white my-6"></div>
          </div>
          <div className="md:flex-1">
            <p
              className="text-white/90 max-w-xl"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("location.heroDescription")}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="shadow-lg border-0 overflow-hidden rounded-lg">
            <CardContent className="p-6">
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

              {/* Map area with agencies */}
              <div className="relative z-10">
                <AgencyMap agencies={filteredAgencies} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSectionEnterprise;
