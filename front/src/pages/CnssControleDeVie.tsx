
import React from "react";
import Navbar from "@/components/Navbar";
import CnssControleDeVieHeroSection from "@/components/CnssControleDeVieHeroSection";
import CnssControleDeVieContent from "@/components/CnssControleDeVieContent";
import CnssControleDeVieFaq from "@/components/CnssControleDeVieFaq";
import Footer from "@/components/Footer";

const CnssControleDeVie = () => {
  console.log("CnssControleDeVie component is rendering");
  
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <CnssControleDeVieHeroSection />
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
        <CnssControleDeVieContent />
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
        <CnssControleDeVieFaq />
        <Footer />
      </div>
    </>
  );
};

export default CnssControleDeVie;
