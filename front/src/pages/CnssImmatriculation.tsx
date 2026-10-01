import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CnssImmatriculationHeroSection from "../components/CnssImmatriculationHeroSection";
import CnssImmatriculationContent from "../components/CnssImmatriculationContent";
import CnssImmatriculationFaq from "../components/CnssImmatriculationFaq";
import CnssImmatriculationQuestions from "../components/CnssImmatriculationQuestions";

const CnssImmatriculation: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <Navbar />
      <div className="pt-20">
        <CnssImmatriculationHeroSection />
        <CnssImmatriculationContent />
        <CnssImmatriculationFaq />
        <CnssImmatriculationQuestions />
        <Footer />
      </div>
    </div>
  );
};

export default CnssImmatriculation;
