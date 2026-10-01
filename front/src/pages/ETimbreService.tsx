
import React from 'react';
import Navbar from '@/components/Navbar';
import ETimbreServiceHeroSection from '@/components/ETimbreServiceHeroSection';
import ETimbreServiceContent from '@/components/ETimbreServiceContent';
import ETimbreServiceAdvantages from '@/components/ETimbreServiceAdvantages';
import ETimbreServiceQuestions from '@/components/ETimbreServiceQuestions';
import Footer from '@/components/Footer';

const ETimbreService = () => {
  return <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <ETimbreServiceHeroSection />
        
        {/* Full width image section */}
        <div className="w-full">
          <img src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png" alt="BaridCash Decorative Banner" className="w-full h-auto" />
        </div>
        
        <ETimbreServiceContent />
        
        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png" alt="BaridCash Wave Separator" className="w-full h-auto" />
        </div>
        
        {/* New advantages section added below the image */}
        <ETimbreServiceAdvantages />
        
        {/* Full width image before Questions Section */}
        <div className="w-full">
          <img alt="BaridCash Location Section Separator" className="w-full h-auto" src="/lovable-uploads/8d1c614f-30b3-47ca-a73d-21d6dddcd7f7.png" />
        </div>
        
        {/* Added Questions Section instead of Location Section */}
        <ETimbreServiceQuestions />
        
        <Footer />
      </div>
    </>;
};

export default ETimbreService;
