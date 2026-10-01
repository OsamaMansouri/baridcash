
import React from 'react';
import Navbar from '@/components/Navbar';
import NousConnaitreV2HeroSection from '@/components/NousConnaitreV2HeroSection';
import NousConnaitreV2Timeline from '@/components/NousConnaitreV2Timeline';
import NousConnaitreV2FinalSection from '@/components/NousConnaitreV2FinalSection';
import Footer from '@/components/Footer';

const NousConnaitreV2 = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <NousConnaitreV2HeroSection />
        <NousConnaitreV2Timeline />
        <NousConnaitreV2FinalSection />
        <Footer />
      </div>
    </>
  );
};

export default NousConnaitreV2;
