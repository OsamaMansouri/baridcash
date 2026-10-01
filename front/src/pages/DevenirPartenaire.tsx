import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import DevenirPartenaireHeroSection from "../components/DevenirPartenaireHeroSection";
import DevenirPartenaireForm from "../components/DevenirPartenaireForm";

const DevenirPartenaire: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <DevenirPartenaireHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown transform -skew-y-1 origin-top-left"></div>
          <div className="relative z-10">
            <DevenirPartenaireForm />
          </div>
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default DevenirPartenaire;
