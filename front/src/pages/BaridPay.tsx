
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BaridPayHeroSection from '../components/BaridPayHeroSection';
import BaridPayContent from '../components/BaridPayContent';
import BaridPayAdvantages from '../components/BaridPayAdvantages';
import BaridPayAgencyFinder from '../components/BaridPayAgencyFinder';

const BaridPay: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <BaridPayHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        <BaridPayContent />
        
        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png" alt="BaridCash Wave Separator" className="w-full h-auto" />
        </div>
        
        {/* New advantages section added before the process section */}
        <BaridPayAdvantages />
        
        {/* Full width image section before agency finder */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        {/* Agency finder section before footer */}
        <BaridPayAgencyFinder />
        
        <Footer />
      </div>
    </>
  );
};

export default BaridPay;
