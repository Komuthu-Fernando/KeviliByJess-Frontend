import React from "react";
import HeroImage from '../assets/hero-image.png';
import Kokis from '../assets/kokis.png';
import KondaKavum from '../assets/konda-kavum.png';

const HeroSection = () => {
  return (
    <section className="mt-5 md:mt-0 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 min-h-[calc(100vh-5rem)] max-w-7xl mx-auto">
      
      <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          A Taste of Tradition:
          <br /> Sri Lanka's Sweetest <span className="text-[#85B415]">Delights</span>
        </h1>
        <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0">
          Where Every Bite Tells a Story of Heritage, Flavor, and Artisanal Craftsmanship
        </p>
        <button className="mt-6 bg-[#85B415] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-3xl text-base sm:text-lg font-medium hover:bg-[#74A402] transition-colors">
          Order Now
        </button>
      </div>
      
      {/* Image and Product Cards */}
      <div className="w-full md:w-1/2 relative mt-0 md:mt-0 px-4">
        {/* Main Image */}
        <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto">
          <img
            src={HeroImage}
            alt="Sri Lankan Sweets"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-6 md:mt-0 md:absolute md:bottom-0 md:left-0 md:right-0 md:px-10">
          <div className="bg-white shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 w-full sm:w-auto max-w-xs mx-auto">
            <img 
              src={Kokis} 
              alt="Kokis" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover" 
            />
            <div>
              <p className="text-sm sm:text-base font-medium">Kokis</p>
              <p className="text-gray-600 text-xs sm:text-sm">$1.00</p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-2 sm:p-3 flex items-center gap-2 sm:gap-3 w-full sm:w-auto max-w-xs mx-auto">
            <img 
              src={KondaKavum} 
              alt="Konda Kevum" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-md object-cover" 
            />
            <div>
              <p className="text-sm sm:text-base font-medium">Konda Kevum</p>
              <p className="text-gray-600 text-xs sm:text-sm">$2.50</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;