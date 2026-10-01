import React from "react";
import Navbar from "@/components/Navbar";
import TransferHeroSection from "@/components/TransferHeroSection";
import TransferBaridCashSection from "@/components/TransferBaridCashSection";
import TransferFaqSection from "@/components/TransferFaqSection";
import TransferDownloadSection from "@/components/TransferDownloadSection";
import TransferPartnersSection from "@/components/TransferPartnersSection";
import TransferNationalFAQ from "@/components/TransferNationalFAQ";
import Footer from "@/components/Footer";

const TransfertArgentNational = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <TransferHeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <TransferBaridCashSection />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        <TransferFaqSection />

        {/* Top mask group image before Partners Section - SWAPPED */}
        <div className="w-full">
          <img
            src="/lovable-uploads/02045ed3-2c94-439c-b510-9f72a70b7a0e.png"
            alt="BaridCash Partners Top Separator"
            className="w-full h-auto"
          />
        </div>

        <TransferPartnersSection />

        {/* Bottom mask group image after Partners Section - SWAPPED */}
        <div className="w-full">
          <img
            src="/lovable-uploads/74f8a20c-f279-4f8b-9a89-1b36f78b1b6d.png"
            alt="BaridCash Partners Bottom Separator"
            className="w-full h-auto"
          />
        </div>

        {/* Moved TransferDownloadSection to appear before Footer */}
        <TransferDownloadSection />

        {/* Additional copy of the selected image before Footer */}
        <div className="w-full">
          <img
            src="/lovable-uploads/02045ed3-2c94-439c-b510-9f72a70b7a0e.png"
            alt="BaridCash Partners Top Separator"
            className="w-full h-auto"
          />
        </div>

        {/* Transfer National FAQ Content Section */}
        <TransferNationalFAQ />

        <Footer />
      </div>
    </>
  );
};

export default TransfertArgentNational;
