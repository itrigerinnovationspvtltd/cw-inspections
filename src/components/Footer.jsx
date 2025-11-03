import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import logo from '../assets/logo.webp'

const Footer = () => {
  return (
    <footer className="bg-[#385f82] text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto  px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  sm:gap-16 border-b-2 border-white/30">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4"> 
            <img src={logo} alt="logo" 
            className="w-10 h-10"/>
            <h3 className="text-xl font-bold">C.W. Inspections</h3>
          </div>
          
          <p className="text-gray-200 text-sm leading-relaxed">
            Providing thorough and reliable home inspections in Baton Rouge and
            surrounding areas. Licensed, experienced, and committed to ensuring
            your peace of mind.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>Pre-Purchase Home Inspections</li>
            <li>Commercial Property Inspections</li>
            <li>New Construction Inspections</li>
            <li>11-Month Warrenty Inspection</li>
            <li>4-Point Insurance Inspection</li>
            <li>Construction Bank Draw Inspections</li>
            <li>Phase Inspections</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-200 text-sm space-y-2">
            <li className="flex gap-2 items-center">
              <Phone />{" "}
              <a href="tel:225-803-8821" className="hover:underline">
                225-803-8821
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Mail />{" "}
              <a
                href="mailto:ClaytonWeeksInspections@gmail.com"
                className="hover:underline"
              >
                ClaytonWeeksInspections@gmail.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <MapPin/>
              <p> Address: Baton Rouge, LA 70806
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center items-center px-4 py-4 bg-[#2f4f6d] text-sm">
        <p>
          Copyright &copy; {new Date().getFullYear()} || C.W. Inspections. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
