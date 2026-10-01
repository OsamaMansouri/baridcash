import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EntrepriseContactHeroSection from '../components/EntrepriseContactHeroSection';
import EntrepriseContactForm from '../components/EntrepriseContactForm';

const EntrepriseContact: React.FC = () => {
  return (
    <div className="min-h-screen bg-barid-background">
      <Navbar />
      <main className="pt-20">
        <EntrepriseContactHeroSection />
        <EntrepriseContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default EntrepriseContact;