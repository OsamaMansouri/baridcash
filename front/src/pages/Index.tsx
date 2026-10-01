import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FaqSection from "@/components/FaqSection";
import LocationSection from "@/components/LocationSection";
import DownloadSection from "@/components/DownloadSection";
import PartnersSection from "@/components/PartnersSection";
import EstimateFeesSection from "@/components/EstimateFeesSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <HeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <ServicesSection />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        <FaqSection />

        {/* Full width image before Location Section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/d5dc01a4-aed4-4d60-8c30-4b534a18c3ad.png"
            alt="BaridCash Location Section Separator"
            className="w-full h-auto"
          />
        </div>

        <LocationSection />

        {/* New full width image between LocationSection and DownloadSection */}
        <div className="w-full">
          <img
            src="/lovable-uploads/12a5792c-c499-43ff-acd0-21c509a72e49.png"
            alt="BaridCash Orange Wave Separator"
            className="w-full h-auto"
          />
        </div>

        <DownloadSection />

        {/* Top mask group image before Partners Section - SWAPPED */}
        <div className="w-full">
          <img
            src="/lovable-uploads/02045ed3-2c94-439c-b510-9f72a70b7a0e.png"
            alt="BaridCash Partners Top Separator"
            className="w-full h-auto"
          />
        </div>

        <PartnersSection />

        {/* Bottom mask group image after Partners Section - SWAPPED */}
        <div className="w-full">
          <img
            src="/lovable-uploads/74f8a20c-f279-4f8b-9a89-1b36f78b1b6d.png"
            alt="BaridCash Partners Bottom Separator"
            className="w-full h-auto"
          />
        </div>

        <EstimateFeesSection />
        <NewsSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
