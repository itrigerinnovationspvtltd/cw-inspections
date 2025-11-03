import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-lg sm:text-2xl font-bold text-blue-600 cursor-pointer">
          C.W Inspections
        </div>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-2xl text-blue-600 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-blue-600 transition-colors duration-200">
              Technologies
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-blue-600 transition-colors duration-200">
              Customer Reviews
            </a>
          </li>
        </ul>
        <button className="hidden sm:block bg-blue-600 hover:bg-blue-700  rounded-xl py-2 px-6 text-white">Call Us</button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full  bg-white shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium border-t border-gray-200">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:text-blue-600">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu} className="hover:text-blue-600">
              Services
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={toggleMenu} className="hover:text-blue-600">
              Technologies
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={toggleMenu} className="hover:text-blue-600">
              Customer Reviews
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
