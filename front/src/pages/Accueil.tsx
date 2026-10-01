import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import AccueilHeroSection from "../components/AccueilHeroSection";
import AccueilServicesSection from "../components/AccueilServicesSection";
import AccueilCTASection from "../components/AccueilCTASection";
import AccueilPartnersSection from "../components/AccueilPartnersSection";

const Accueil: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <AccueilHeroSection />
        <AccueilServicesSection />
        <AccueilCTASection />
        <AccueilPartnersSection />
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default Accueil;
