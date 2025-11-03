import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import logo from "../assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#385f82] to-[#2f4f6d] text-white relative overflow-hidden">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none"></div>

      {/* Top Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 border-b border-white/20">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="C.W. Inspections logo" className="w-12 h-12 rounded-md shadow-md" />
            <h3 className="text-2xl font-bold tracking-wide">C.W. Inspections</h3>
          </div>
          <p className="text-gray-200 text-sm leading-relaxed">
            Providing trusted, thorough, and reliable home inspections across Baton Rouge and surrounding areas.
            Licensed, certified, and committed to ensuring your complete peace of mind.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 border-l-4 border-[#58a6e9] pl-3">
            Our Services
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            {[
              "Pre-Purchase Home Inspections",
              "Commercial Property Inspections",
              "New Construction Inspections",
              "11-Month Warranty Inspection",
              "4-Point Insurance Inspection",
              "Construction Bank Draw Inspections",
              "Phase Inspections",
            ].map((service, index) => (
              <li
                key={index}
                className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-default"
              >
                • {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-5 border-l-4 border-[#58a6e9] pl-3">
            Contact Us
          </h3>
          <ul className="text-gray-200 text-sm space-y-3">
            <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
              <Phone className="w-5 h-5 text-[#58a6e9]" />
              <a href="tel:225-803-8821" className="hover:underline">
                225-803-8821
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-white transition-all duration-300">
              <Mail className="w-5 h-5 text-[#58a6e9]" />
              <a
                href="mailto:ClaytonWeeksInspections@gmail.com"
                className="hover:underline"
              >
                ClaytonWeeksInspections@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3 hover:text-white transition-all duration-300">
              <MapPin className="w-5 h-5 text-[#58a6e9] mt-1" />
              <p>Baton Rouge, LA 70806</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center gap-3 px-6 py-5 bg-[#2b425c] text-gray-200 text-sm">
        <p>
          &copy; {new Date().getFullYear()} <span className="font-semibold">C.W. Inspections</span>. All
          rights reserved.
        </p>
        <p className="text-gray-300">
          Built with <span className="text-[#58a6e9] font-semibold">excellence</span> and attention to detail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
