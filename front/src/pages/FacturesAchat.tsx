
import React from "react";
import Navbar from "@/components/Navbar";
import FacturesAchatHeroSection from "@/components/FacturesAchatHeroSection";
import FacturesAchatContent from "@/components/FacturesAchatContent";
import FacturesAchatAdvantages from "@/components/FacturesAchatAdvantages";
import FacturesAchatPartnersImageSection from "@/components/FacturesAchatPartnersImageSection";
import FacturesAchatTrainTicket from "@/components/FacturesAchatTrainTicket";
import FacturesAchatQuestions from "@/components/FacturesAchatQuestions";
import Footer from "@/components/Footer";

const FacturesAchat = () => {
  console.log("FacturesAchat component is rendering");
  
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <FacturesAchatHeroSection />
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
        <FacturesAchatContent />
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
        
        {/* New components added before the footer */}
        <FacturesAchatAdvantages />
        <FacturesAchatPartnersImageSection />
        <FacturesAchatTrainTicket />
        <FacturesAchatQuestions />
        
        <Footer />
      </div>
    </>
  );
};

export default FacturesAchat;
