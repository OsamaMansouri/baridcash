import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntrepriseFAQHeroSection from '../components/EntrepriseFAQHeroSection';
import EntrepriseFAQContent from '../components/EntrepriseFAQContent';

const EntrepriseFAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <Navbar />
      <main className="pt-20">
        <EntrepriseFAQHeroSection />
        <EntrepriseFAQContent />
      </main>
      <Footer />
    </div>
  );
};

export default EntrepriseFAQ;