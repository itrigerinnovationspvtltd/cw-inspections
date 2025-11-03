import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="https://app.spectora.com/home-inspectors/cw-inspections-llc/schedule"
      className="fixed bottom-8 right-6 sm:bottom-14 bg-[#385f82] hover:bg-[#2f4f6d] text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50 animate-bounce transition-transform duration-300"
      
    >
      <FaCalendarAlt className="text-lg" />
      <span>Book Your Inspection Now!</span>
    </a>
  );
};

export default FloatingButton;
