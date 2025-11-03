import React from "react";
import bgimg from '../assets/bgImage.webp'

const Hero = () => {
  return (
    <section id="hero"
      className="relative h-[70vh] sm:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          `url(${bgimg})`,
      }}
    >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-5xl">
        <h1 className="text-3xl sm:text-6xl font-bold mb-4">
          C.W. Inspections - Baton Rouge Home Inspector
        </h1>
        <p className="text-sm sm:text-xl mb-8 text-gray-200">
          Licensed Home Inspector In Baton Rouge. Thorough Inspections. Same Day Reports.
<br />
Residential, Commercial & Multi-Family. Sewer Scopes.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://app.spectora.com/home-inspectors/cw-inspections-llc/schedule" className="bg-[#385f82] hover:bg-[#2f4f6d] border-2 text-white font-semibold py-3 px-6 rounded-md transition">
            Schedule Now
          </a>
          <a href="tel:225-803-8821" className="border-2 border-white hover:bg-white hover:text-[#385f82] font-semibold py-3 px-6 rounded-md transition">
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
