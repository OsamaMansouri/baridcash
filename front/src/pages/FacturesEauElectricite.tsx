import React from "react";
import Navbar from "@/components/Navbar";
import FacturesEauElectriciteHeroSection from "@/components/FacturesEauElectriciteHeroSection";
import FacturesEauElectriciteLocalization from "@/components/FacturesEauElectriciteLocalization";
import FacturesEauElectriciteAdvantages from "@/components/FacturesEauElectriciteAdvantages";
import FacturesEauElectricitePartnersImageSection from "@/components/FacturesEauElectricitePartnersImageSection";

import FacturesEauElectriciteDownloadSection from "@/components/FacturesEauElectriciteDownloadSection";
import FacturesEauElectriciteFaqSection from "@/components/FacturesEauElectriciteFaqSection";
import Footer from "@/components/Footer";

const FacturesEauElectricite = () => {
  console.log("FacturesEauElectricite component is rendering");

  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <FacturesEauElectriciteHeroSection />
        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
            onLoad={() => console.log("First image loaded successfully")}
            onError={() => console.log("First image failed to load")}
          />
        </div>
        <FacturesEauElectriciteLocalization />
        {/* Full width image section between Services and FAQ */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
            onLoad={() => console.log("Second image loaded successfully")}
            onError={() => console.log("Second image failed to load")}
          />
        </div>

        {/* Existing components */}
        <FacturesEauElectriciteAdvantages />
        <FacturesEauElectricitePartnersImageSection />

        {/* New unique sections before footer */}
        <FacturesEauElectriciteDownloadSection />

        {/* Image before FAQ section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/4300a1c9-23a7-468e-ae80-02fd9d368c1b.png"
            alt="Decorative Image"
            className="w-full h-auto"
          />
        </div>

        <FacturesEauElectriciteFaqSection />

        <Footer />
      </div>
    </>
  );
};

export default FacturesEauElectricite;
