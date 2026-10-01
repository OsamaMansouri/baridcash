import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import ChangeDevisesHeroSection from "@/components/ChangeDevisesHeroSection";
import ChangeDevisesContent from "@/components/ChangeDevisesContent";
import ChangeDevisesAdvantages from "@/components/ChangeDevisesAdvantages";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const ChangeDevises = () => {
  const { t, i18n } = useTranslation("common");
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <ChangeDevisesHeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt={i18n.language === "ar" ? "صرف العملات" : "Change de devises"}
            className="w-full h-auto"
          />
        </div>

        <ChangeDevisesContent />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt={i18n.language === "ar" ? "صرف العملات" : "Change de devises"}
            className="w-full h-auto"
          />
        </div>

        {/* New advantages section added below the image */}
        <ChangeDevisesAdvantages />

        {/* Full width image before Location Section */}
        <div className="w-full">
          <img
            alt={i18n.language === "ar" ? "صرف العملات" : "Change de devises"}
            className="w-full h-auto"
            src="/lovable-uploads/8d1c614f-30b3-47ca-a73d-21d6dddcd7f7.png"
          />
        </div>

        {/* Added Location Section */}
        <LocationSection />

        <Footer />
      </div>
    </>
  );
};
export default ChangeDevises;
