import React from "react";
import Navbar from "@/components/Navbar";
import ActualitesHeroSection from "@/components/ActualitesHeroSection";
import ActualitesSecondSection from "@/components/ActualitesSecondSection";
import ActualitesThirdSection from "@/components/ActualitesThirdSection";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Actualites = () => {
  const { t, i18n } = useTranslation("common");

  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        {/* Page Title */}
        <section className="bg-barid-background pt-16 pb-8">
          <div className="container mx-auto px-4">
            <h1
              className="text-4xl font-bold text-barid-orange mb-4"
              lang={i18n.language === "ar" ? "ar" : "fr"}
              style={{
                direction: i18n.language === "ar" ? "rtl" : "ltr",
                textAlign: i18n.language === "ar" ? "right" : "left",
                fontFamily:
                  i18n.language === "ar"
                    ? "Cairo, Arial, sans-serif"
                    : "Inter, Arial, sans-serif",
              }}
            >
              {t("nav.actualites")}
            </h1>
            <div className="w-32 h-1 bg-barid-orange"></div>
          </div>
        </section>

        <ActualitesHeroSection />

        {/* Top image before orange section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <ActualitesSecondSection />

        {/* Bottom image after orange section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        <ActualitesThirdSection />
        <Footer />
      </div>
    </>
  );
};

export default Actualites;
