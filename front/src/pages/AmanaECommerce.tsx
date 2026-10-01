import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import AmanaECommerceHeroSection from "../components/AmanaECommerceHeroSection";
import AmanaECommerceAdvantages from "../components/AmanaECommerceAdvantages";
import AmanaECommerceSteps from "../components/AmanaECommerceSteps";
import AmanaECommercePricing from "../components/AmanaECommercePricing";
import AmanaECommerceFAQ from "../components/AmanaECommerceFAQ";

const AmanaECommerce: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <AmanaECommerceHeroSection />

        {/* Corporate section separator */}
        <div className="relative bg-barid-orange">
          <AmanaECommerceAdvantages />
        </div>

        {/* Clean section for steps */}
        <div className="bg-barid-background">
          <AmanaECommerceSteps />
        </div>

        <AmanaECommercePricing />

        {/* Final FAQ section */}
        <div className="bg-barid-brown py-20">
          <AmanaECommerceFAQ />
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default AmanaECommerce;
