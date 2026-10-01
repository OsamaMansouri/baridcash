import React from 'react';
import Navbar from '@/components/Navbar';
import NarsaReclamationsInfractionsHeroSection from '@/components/NarsaReclamationsInfractionsHeroSection';
import NarsaReclamationsInfractionsContent from '@/components/NarsaReclamationsInfractionsContent';
import NarsaReclamationsInfractionsAdvantages from '@/components/NarsaReclamationsInfractionsAdvantages';
import NarsaReclamationsInfractionsProcess from '@/components/NarsaReclamationsInfractionsProcess';
import NarsaReclamationsInfractionsAgencyFinder from '@/components/NarsaReclamationsInfractionsAgencyFinder';
import Footer from '@/components/Footer';
const NarsaReclamationsInfractions = () => {
  return <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <NarsaReclamationsInfractionsHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        <NarsaReclamationsInfractionsContent />
        
        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png" alt="BaridCash Wave Separator" className="w-full h-auto" />
        </div>
        
        {/* New advantages section added before the process section */}
        <NarsaReclamationsInfractionsAdvantages />
        
        {/* Full width image section between Advantages and Process */}
        <div className="w-full">
          
        </div>
        
        {/* Process section with réclamations infractions details */}
        <NarsaReclamationsInfractionsProcess />
        
        {/* Full width image section before agency finder */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        {/* Agency finder section before footer */}
        <NarsaReclamationsInfractionsAgencyFinder />
        
        <Footer />
      </div>
    </>;
};
export default NarsaReclamationsInfractions;