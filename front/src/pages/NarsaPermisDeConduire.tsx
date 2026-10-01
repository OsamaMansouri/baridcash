import React from 'react';
import Navbar from '@/components/Navbar';
import NarsaPermisDeConduireHeroSection from '@/components/NarsaPermisDeConduireHeroSection';
import NarsaPermisDeConduireContent from '@/components/NarsaPermisDeConduireContent';
import NarsaPermisDeConduireProcess from '@/components/NarsaPermisDeConduireProcess';
import NarsaPermisDeConduireAgencyFinder from '@/components/NarsaPermisDeConduireAgencyFinder';
import NarsaPermisDeConduireOtherServices from '@/components/NarsaPermisDeConduireOtherServices';
import Footer from '@/components/Footer';

const NarsaPermisDeConduire = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <NarsaPermisDeConduireHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        <NarsaPermisDeConduireContent />
        
        {/* Full width image section before the Recherchez l'agence section */}
        <div className="w-full">
          
        </div>
        
        {/* Full width image section between Services and Process */}
        <div className="w-full">
          <img src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png" alt="BaridCash Wave Separator" className="w-full h-auto" />
        </div>
        
        {/* New process section with permis de conduire details */}
        <NarsaPermisDeConduireProcess />
        
        {/* Full width image section before agency finder */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        {/* Agency finder section before footer */}
        <NarsaPermisDeConduireAgencyFinder />
        
        {/* Other NARSA services section */}
        <NarsaPermisDeConduireOtherServices />
        
        <Footer />
      </div>
    </>
  );
};

export default NarsaPermisDeConduire;
