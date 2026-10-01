import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import BaridPayProHeroSection from "../components/BaridPayProHeroSection";
import BaridPayProFeatures from "../components/BaridPayProFeatures";
import BaridPayProAdvantages from "../components/BaridPayProAdvantages";
import BaridPayProFAQ from "../components/BaridPayProFAQ";

const BaridPayPro: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <BaridPayProHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown transform -skew-y-1 origin-top-left"></div>
          <div className="relative z-10">
            <BaridPayProFeatures />
          </div>
        </div>

        <BaridPayProAdvantages />

        {/* FAQ section with orange background */}
        <div className="bg-gradient-to-r from-barid-orange via-barid-orange/95 to-barid-orange">
          <BaridPayProFAQ />
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default BaridPayPro;
