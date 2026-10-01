import React from "react";
import Navbar from "@/components/Navbar";
import CnssDepotDeDossiersHeroSection from "@/components/CnssDepotDeDossiersHeroSection";
import CnssDepotDeDossiersContent from "@/components/CnssDepotDeDossiersContent";
import CnssDepotDeDossiersFaq from "@/components/CnssDepotDeDossiersFaq";
import CnssDepotDeDossiersQuestions from "@/components/CnssDepotDeDossiersQuestions";
import CnssDepotDeDossiersOtherServices from "@/components/CnssDepotDeDossiersOtherServices";
import Footer from "@/components/Footer";

const CnssDepotDeDossiers = () => {
  console.log("CnssDepotDeDossiers component is rendering");
  
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <CnssDepotDeDossiersHeroSection />
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
        <CnssDepotDeDossiersContent />
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
        <CnssDepotDeDossiersFaq />
        
        <CnssDepotDeDossiersQuestions />
        
        {/* Other CNSS services section - moved before footer */}
        <CnssDepotDeDossiersOtherServices />
        
        <Footer />
      </div>
    </>
  );
};

export default CnssDepotDeDossiers;
