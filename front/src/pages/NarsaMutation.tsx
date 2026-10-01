
import React from 'react';
import Navbar from '@/components/Navbar';
import NarsaMutationHeroSection from '@/components/NarsaMutationHeroSection';
import NarsaMutationContent from '@/components/NarsaMutationContent';
import NarsaMutationProcess from '@/components/NarsaMutationProcess';
import Footer from '@/components/Footer';

const NarsaMutation = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <NarsaMutationHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" 
            alt="BaridCash Decorative Banner" 
            className="w-full h-auto" 
          />
        </div>
        
        <NarsaMutationContent />
        
        {/* Full width image section between Services and Process */}
        <div className="w-full">
          <img 
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png" 
            alt="BaridCash Wave Separator" 
            className="w-full h-auto" 
          />
        </div>
        
        {/* New process section with mutation details */}
        <NarsaMutationProcess />
        
        <Footer />
      </div>
    </>
  );
};

export default NarsaMutation;
