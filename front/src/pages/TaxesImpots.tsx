
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaxesImpiotsHeroSection from '../components/TaxesImpiotsHeroSection';
import TaxesImpiotsContent from '../components/TaxesImpiotsContent';
import TaxesImpiotsDownloadSection from '../components/TaxesImpiotsDownloadSection';
import TaxesImpiotsQuestions from '../components/TaxesImpiotsQuestions';
import TaxesImpiotsPartnersSection from '../components/TaxesImpiotsPartnersSection';

const TaxesImpots: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <Navbar />
      <TaxesImpiotsHeroSection />
      <TaxesImpiotsContent />
      <TaxesImpiotsDownloadSection />
      <TaxesImpiotsQuestions />
      <TaxesImpiotsPartnersSection />
      <Footer />
    </div>
  );
};

export default TaxesImpots;
