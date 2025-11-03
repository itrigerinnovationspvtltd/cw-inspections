import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg flex items-center gap-2 z-50 animate-bounce transition-transform duration-300"
    >
      <FaCalendarAlt className="text-lg" />
      <span>Schedule Now</span>
    </a>
  );
};

export default FloatingButton;
