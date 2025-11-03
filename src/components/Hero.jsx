import React from "react";
import { motion } from "framer-motion";
import bgimg from "../assets/bgImage.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-[80vh] sm:h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-md"
        >
          Trusted <span className="text-[#58a6e9]">Home & Commercial</span> Inspections
          <br />
          in Baton Rouge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-base sm:text-xl text-gray-200 mb-10 leading-relaxed"
        >
          Licensed, certified, and dedicated to thorough inspections.  
          <br className="hidden sm:block" />
          Same-day photo-rich reports for Residential, Commercial & Multi-Family Properties.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="https://app.spectora.com/home-inspectors/cw-inspections-llc/schedule"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#385f82] hover:bg-[#2f4f6d] font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-[#385f82]/40 transition-all duration-300"
          >
            Schedule Inspection
          </a>
          <a
            href="tel:225-803-8821"
            className="border-2 border-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-[#385f82] transition-all duration-300"
          >
            Call (225) 803-8821
          </a>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-white/90 to-transparent"></div>
    </section>
  );
};

export default Hero;
