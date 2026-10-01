import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import PermisConduireMasseHeroSection from "../components/PermisConduireMasseHeroSection";
import PermisConduireMasseForm from "../components/PermisConduireMasseForm";

const PermisConduireMasse: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <NavbarEnterprise />
      <main className="pt-20">
        <PermisConduireMasseHeroSection />
        <PermisConduireMasseForm />
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default PermisConduireMasse;
