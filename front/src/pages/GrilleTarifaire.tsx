import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import GrilleTarifaireHeroSection from "@/components/GrilleTarifaireHeroSection";
import GrilleTarifaireContent from "@/components/GrilleTarifaireContent";
import Footer from "@/components/Footer";

const GrilleTarifaire: React.FC = () => {
  const { i18n } = useTranslation("common");

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Orange arrow to return home - positioned based on language */}
      <Link
        to="/"
        className={`fixed top-4 z-50 bg-barid-orange hover:bg-[#E26A20] text-white p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center ${
          i18n.language === "ar" ? "right-4" : "left-4"
        }`}
      >
        {i18n.language === "ar" ? (
          <ArrowRight size={24} />
        ) : (
          <ArrowLeft size={24} />
        )}
      </Link>

      <GrilleTarifaireHeroSection />
      <GrilleTarifaireContent />
      <Footer />
    </div>
  );
};

export default GrilleTarifaire;
