import React from "react";
import Navbar from "@/components/Navbar";
import NosComptesDePaiementsHeroSection from "@/components/NosComptesDePaiementsHeroSection";
import NosComptesDePaiementsContent from "@/components/NosComptesDePaiementsContent";
import NosComptesDePaiementsAdvantages from "@/components/NosComptesDePaiementsAdvantages";
import NosComptesDePaiementsAgencyFinder from "@/components/NosComptesDePaiementsAgencyFinder";
import NosComptesDePaiementsProcess from "@/components/NosComptesDePaiementsProcess";
import Footer from "@/components/Footer";

const TypesDeComptes: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <NosComptesDePaiementsHeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <NosComptesDePaiementsContent />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        {/* Advantages section with sliding and bullet points */}
        <NosComptesDePaiementsAdvantages />

        {/* Full width image section before agency finder */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        {/* Agency finder section */}
        <NosComptesDePaiementsAgencyFinder />

        {/* New image section after agency finder */}
        <div className="w-full">
          <img
            src="/lovable-uploads/d4127821-3643-4ccf-b9f8-d098756e062b.png"
            alt="BaridCash Orange Wave Separator"
            className="w-full h-auto"
          />
        </div>

        {/* FAQ/Process section */}
        <NosComptesDePaiementsProcess />

        <Footer />
      </div>
    </>
  );
};

export default TypesDeComptes;
