import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import BaridESignHeroSection from "../components/BaridESignHeroSection";
import BaridESignSolution from "../components/BaridESignSolution";
import BaridESignSteps from "../components/BaridESignSteps";
import BaridESignAdvantages from "../components/BaridESignAdvantages";
import BaridESignFAQ from "../components/BaridESignFAQ";

const BaridESign: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <BaridESignHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown transform -skew-y-1 origin-top-left"></div>
          <div className="relative z-10">
            <BaridESignSolution />
          </div>
        </div>

        {/* Steps section */}
        <div className="bg-barid-background">
          <BaridESignSteps />
        </div>

        <BaridESignAdvantages />

        {/* Final section */}
        <div className="relative bg-gradient-to-r from-barid-orange via-barid-orange/95 to-barid-orange">
          <BaridESignFAQ />
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default BaridESign;
