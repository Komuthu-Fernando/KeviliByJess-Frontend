import React from "react";
import HeroImage from '../assets/hero-image.png';
import Kokis from '../assets/kokis.png';
import KondaKavum from '../assets/konda-kavum.png';

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center md:px-10 min-h-[calc(100vh-5rem)]">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          A Taste of Tradition:
          <br /> Sri Lanka's Sweetest <span className="text-[#85B415]">Delights</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Where Every Bite Tells a Story of Heritage, Flavor, and Artisanal Craftsmanship
        </p>
        <button className="mt-6 bg-[#85B415] text-white px-6 py-3 rounded-3xl text-lg font-medium hover:bg-[#74A402]">
          Order Now
        </button>
      </div>
      
      {/* Image and Product Cards */}
      <div className="md:w-1/2 relative mt-10 md:mt-0 flex justify-center">
        {/* Main Image */}
        <div className="relative w-140 h-140 p-4">
          <img
            src={HeroImage} 
            alt="Sri Lankan Sweets"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Product Cards */}
        <div className="absolute bottom-0 left-10 bg-white shadow-lg rounded-lg p-2 flex items-center gap-2">
          <img src={Kokis} alt="Kokis" className="w-12 h-12 rounded-md" />
          <div>
            <p className="text-sm font-medium">Kokis</p>
            <p className="text-gray-600 text-sm">$1.00</p>
          </div>
        </div>
        <div className="absolute bottom-0 right-10 bg-white shadow-lg rounded-lg p-2 flex items-center gap-2">
          <img src={KondaKavum} alt="Konda Kevum" className="w-12 h-12 rounded-md" />
          <div>
            <p className="text-sm font-medium">Konda Kevum</p>
            <p className="text-gray-600 text-sm">$2.50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
