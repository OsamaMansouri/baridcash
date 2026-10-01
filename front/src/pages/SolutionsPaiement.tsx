import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SolutionsPaiementHeroSection from '../components/SolutionsPaiementHeroSection';
import SolutionsPaiementFeatures from '../components/SolutionsPaiementFeatures';
import SolutionsPaiementCTA from '../components/SolutionsPaiementCTA';

const SolutionsPaiement: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <Navbar />
      <main className="pt-20">
        <SolutionsPaiementHeroSection />
        <SolutionsPaiementFeatures />
        <SolutionsPaiementCTA />
      </main>
      <Footer />
    </div>
  );
};

export default SolutionsPaiement;