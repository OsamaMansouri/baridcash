import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import PayExpressHeroSection from "../components/PayExpressHeroSection";
import PayExpressAdvantages from "../components/PayExpressAdvantages";
const PayExpress: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <PayExpressHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown"></div>
          <div className="relative z-10">
            <PayExpressAdvantages />
          </div>
        </div>

        {/* Brown background section before footer */}
      </main>
      <FooterEntreprise />
    </div>
  );
};
export default PayExpress;
