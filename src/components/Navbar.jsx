import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/logo.webp'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="cursor-pointer">
          <img src={logo} alt="C.W Inspections" 
          className="w-14"/>
        </div>

        {/* Hamburger Icon */}
        <div
          className="sm:hidden text-2xl text-[#385f82] cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex space-x-8 text-[#385f82] text-lg font-medium">
          <li>
            <a href="#hero" className="hover:text-[#2f4f6d] transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#2f4f6d] transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#2f4f6d] transition-colors duration-200">
              Services
            </a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-[#2f4f6d] transition-colors duration-200">
              Technologies
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-[#2f4f6d] transition-colors duration-200">
              Customer Reviews
            </a>
          </li>
        </ul>
        <a href="tel:225-803-8821" className="hidden sm:block bg-[#385f82] hover:bg-[#2f4f6d]  rounded-xl py-2 px-6 text-white text-lg">Call Us</a>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 w-full  bg-white shadow-md transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-[#385f82] font-medium border-t border-gray-200">
          <li>
            <a href="#home" onClick={toggleMenu} className="hover:text-[#2f4f6d]">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={toggleMenu} className="hover:text-[#2f4f6d]">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={toggleMenu} className="hover:text-[#2f4f6d]">
              Services
            </a>
          </li>
          <li>
            <a href="#technologies" onClick={toggleMenu} className="hover:text-[#2f4f6d]">
              Technologies
            </a>
          </li>
          <li>
            <a href="#testimonial" onClick={toggleMenu} className="hover:text-[#2f4f6d]">
              Customer Reviews
            </a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
