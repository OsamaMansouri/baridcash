import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import PermisConduireMasseEnterpriseHeroSection from "../components/PermisConduireMasseEnterpriseHeroSection";
import PermisConduireMasseEnterpriseForm from "../components/PermisConduireMasseEnterpriseForm";

const PermisConduireMasseEntreprise: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <PermisConduireMasseEnterpriseHeroSection />
        <PermisConduireMasseEnterpriseForm />
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default PermisConduireMasseEntreprise;
