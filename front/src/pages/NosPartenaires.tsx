
import React from 'react';
import Navbar from '@/components/Navbar';
import NosPartenairesHeroSection from '@/components/NosPartenairesHeroSection';
import NosPartenairesPartnersSection from '@/components/NosPartenairesPartnersSection';
import Footer from '@/components/Footer';

const NosPartenaires = () => {
  return <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <NosPartenairesHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        <NosPartenairesPartnersSection />
        
        <Footer />
      </div>
    </>;
};

export default NosPartenaires;
