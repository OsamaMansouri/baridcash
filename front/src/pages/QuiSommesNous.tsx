import React from "react";
import NavbarEnterprise from "@/components/navbar/NavbarEnterprise";
import NousConnaitreV2HeroSection from "@/components/NousConnaitreV2HeroSection";
import NousConnaitreV2Timeline from "@/components/NousConnaitreV2Timeline";
import NousConnaitreV2FinalSection from "@/components/NousConnaitreV2FinalSection";
import FooterEntreprise from "@/components/FooterEntreprise";

const QuiSommesNous = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <NousConnaitreV2HeroSection />
        <NousConnaitreV2Timeline />
        <NousConnaitreV2FinalSection />
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default QuiSommesNous;
