import React from "react";

const Hero = () => {
  return (
    <section id="hero"
      className="relative h-[85vh] sm:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('/bgImage.jpg')",
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition">
            Schedule Now
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-md transition">
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
