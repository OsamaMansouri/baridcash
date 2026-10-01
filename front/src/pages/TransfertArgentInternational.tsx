import React from "react";
import Navbar from "@/components/Navbar";
import TransferInternationalHeroSection from "@/components/TransferInternationalHeroSection";
import TransferInternationalBaridCashSection from "@/components/TransferInternationalBaridCashSection";
import TransferInternationalFaqSection from "@/components/TransferInternationalFaqSection";
import TransferInternationalDownloadSection from "@/components/TransferInternationalDownloadSection";
import TransferInternationalPartnersSection from "@/components/TransferInternationalPartnersSection";
import TransferInternationalFAQContent from "@/components/TransferInternationalFAQContent";
import Footer from "@/components/Footer";

const TransfertArgentInternational = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <TransferInternationalHeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <TransferInternationalBaridCashSection />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        <TransferInternationalFaqSection />

        {/* Top mask group image before Partners Section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/02045ed3-2c94-439c-b510-9f72a70b7a0e.png"
            alt="BaridCash Partners Top Separator"
            className="w-full h-auto"
          />
        </div>

        <TransferInternationalPartnersSection />

        {/* Bottom mask group image after Partners Section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/74f8a20c-f279-4f8b-9a89-1b36f78b1b6d.png"
            alt="BaridCash Partners Bottom Separator"
            className="w-full h-auto"
          />
        </div>

        <TransferInternationalDownloadSection />

        {/* Additional copy of the selected image before Footer */}
        <div className="w-full">
          <img
            src="/lovable-uploads/02045ed3-2c94-439c-b510-9f72a70b7a0e.png"
            alt="BaridCash Partners Top Separator"
            className="w-full h-auto"
          />
        </div>

        {/* International FAQ Content Section */}
        <TransferInternationalFAQContent />

        <Footer />
      </div>
    </>
  );
};

export default TransfertArgentInternational;
