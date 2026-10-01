import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import ContactHeroSection from "../components/ContactHeroSection";
import ContactForm from "../components/ContactForm";

const NousContacter: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <ContactHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown transform -skew-y-1 origin-top-left"></div>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default NousContacter;
