import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import ForeverHeroSection from "../components/ForeverHeroSection";
import ForeverPaymentOptions from "../components/ForeverPaymentOptions";
import ForeverCTA from "../components/ForeverCTA";

const Forever: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <ForeverHeroSection />
        <ForeverPaymentOptions />
        <ForeverCTA />
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default Forever;
