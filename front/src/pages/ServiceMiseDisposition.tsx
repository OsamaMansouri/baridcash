import React from "react";
import NavbarEnterprise from "../components/navbar/NavbarEnterprise";
import FooterEntreprise from "../components/FooterEntreprise";
import ServiceMiseDispositionHeroSection from "../components/ServiceMiseDispositionHeroSection";
import ServiceMiseDispositionFeatures from "../components/ServiceMiseDispositionFeatures";
import ServiceMiseDispositionFAQ from "../components/ServiceMiseDispositionFAQ";

const ServiceMiseDisposition: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <NavbarEnterprise />
      <main className="pt-20">
        <ServiceMiseDispositionHeroSection />

        {/* Corporate section separator */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-barid-brown via-barid-brown/90 to-barid-brown"></div>
          <div className="relative z-10">
            <ServiceMiseDispositionFeatures />
          </div>
        </div>

        {/* Brown background section before footer */}
        <div className="bg-barid-brown py-20">
          <ServiceMiseDispositionFAQ />
        </div>
      </main>
      <FooterEntreprise />
    </div>
  );
};

export default ServiceMiseDisposition;
