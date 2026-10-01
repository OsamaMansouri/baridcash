import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const NarsaPermisDeConduireOtherServices: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  const otherServices = [
    {
      title: t("narsaPermisDeConduire.otherServices.carteGrise.title"),
      description: t(
        "narsaPermisDeConduire.otherServices.carteGrise.description"
      ),
      link: "/narsa-carte-grise",
      bgColor: "bg-[#EEE6D3]",
    },
    {
      title: t("narsaPermisDeConduire.otherServices.reclamations.title"),
      description: t(
        "narsaPermisDeConduire.otherServices.reclamations.description"
      ),
      link: "/narsa-reclamations-infractions",
      bgColor: "bg-[#FFF7E5]",
    },
    {
      title: t("narsaPermisDeConduire.otherServices.mutation.title"),
      description: t(
        "narsaPermisDeConduire.otherServices.mutation.description"
      ),
      link: "/narsa-mutation",
      bgColor: "bg-[#EEE6D3]",
    },
  ];

  return (
    <section className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold text-white mb-12 ${
            i18n.language === "ar" ? "text-right" : "text-center"
          }`}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
        >
          {t("narsaPermisDeConduire.otherServices.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {otherServices.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card
                className={`${
                  service.bgColor
                } p-6 h-48 flex flex-col justify-center items-center border-0 rounded-lg transition-all duration-300 hover:bg-[#5A433D] group-hover:text-white cursor-pointer ${
                  i18n.language === "ar" ? "text-center" : "text-center"
                }`}
              >
                <h3
                  className="font-bold text-xl mb-4 text-barid-brown group-hover:text-white transition-colors duration-300"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-gray-600 group-hover:text-white transition-colors duration-300"
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                >
                  {service.description}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NarsaPermisDeConduireOtherServices;
