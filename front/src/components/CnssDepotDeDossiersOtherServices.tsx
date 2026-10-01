import React from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const CnssDepotDeDossiersOtherServices: React.FC = () => {
  const { t, i18n } = useTranslation("common");

  const otherServices = [
    {
      title: t("cnss.depotDeDossiers.otherServices.control.title"),
      description: t("cnss.depotDeDossiers.otherServices.control.description"),
      link:
        i18n.language === "ar"
          ? "/ar/cnss-controle-de-vie"
          : "/cnss-controle-de-vie",
      bgColor: "bg-[#EEE6D3]",
    },
    {
      title: t("cnss.depotDeDossiers.otherServices.immatriculation.title"),
      description: t(
        "cnss.depotDeDossiers.otherServices.immatriculation.description"
      ),
      link:
        i18n.language === "ar"
          ? "/ar/cnss-immatriculation"
          : "/cnss-immatriculation",
      bgColor: "bg-[#FFF7E5]",
    },
  ];

  return (
    <section className="py-16 bg-barid-orange">
      <div className="container mx-auto px-4">
        <h2
          lang={i18n.language === "ar" ? "ar" : "fr"}
          style={{
            direction: i18n.language === "ar" ? "rtl" : "ltr",
            fontFamily:
              i18n.language === "ar"
                ? "Cairo, Arial, sans-serif"
                : "Inter, Arial, sans-serif",
          }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {t("cnss.depotDeDossiers.otherServices.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {otherServices.map((service, index) => (
            <Link key={index} to={service.link} className="group">
              <Card
                className={`${service.bgColor} p-6 h-48 flex flex-col justify-center items-center text-center border-0 rounded-lg transition-all duration-300 hover:bg-[#5A433D] group-hover:text-white cursor-pointer`}
              >
                <h3
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className="font-bold text-xl mb-4 text-barid-brown group-hover:text-white transition-colors duration-300"
                >
                  {service.title}
                </h3>
                <p
                  lang={i18n.language === "ar" ? "ar" : "fr"}
                  style={{
                    direction: i18n.language === "ar" ? "rtl" : "ltr",
                    fontFamily:
                      i18n.language === "ar"
                        ? "Cairo, Arial, sans-serif"
                        : "Inter, Arial, sans-serif",
                  }}
                  className="text-gray-600 group-hover:text-white transition-colors duration-300"
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

export default CnssDepotDeDossiersOtherServices;
