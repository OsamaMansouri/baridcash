import React from "react";
import Navbar from "@/components/Navbar";
import CartesMonetiquesHeroSection from "@/components/CartesMonetiquesHeroSection";
import CartesMonetiquesContent from "@/components/CartesMonetiquesContent";
import TestCartesMonetiques from "@/components/TestCartesMonetiques";
import CartesMonetiquesAdvantages from "@/components/CartesMonetiquesAdvantages";
import Footer from "@/components/Footer";

const CartesMonetiques = () => {
  return (
    <>
      <Navbar />
      {/* Increased padding-top to account for the larger fixed navbar */}
      <div className="pt-20">
        <CartesMonetiquesHeroSection />

        {/* Full width image section */}
        <div className="w-full">
          <img
            src="/lovable-uploads/6fc3dc02-c0e9-4095-986c-693d7f630bae.png"
            alt="BaridCash Decorative Banner"
            className="w-full h-auto"
          />
        </div>

        <CartesMonetiquesContent />

        {/* Full width image section between Services and Advantages */}
        <div className="w-full">
          <img
            src="/lovable-uploads/1e2d93c9-1b2b-47a5-9295-2262e9b4ed69.png"
            alt="BaridCash Wave Separator"
            className="w-full h-auto"
          />
        </div>

        {/* New advantages section added below the image */}
        <CartesMonetiquesAdvantages />

        <Footer />
      </div>
    </>
  );
};

export default CartesMonetiques;
