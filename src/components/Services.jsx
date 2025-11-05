import React from "react";
import {
  FaHome,
  FaBuilding,
  FaHardHat,
  FaClipboardCheck, 
  FaFileInvoice, 
  FaMoneyCheckAlt, 
  FaCogs, 
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome className="text-3xl text-[#385f82]" />,
    title: "Pre-Purchase Home Inspections",
    description:
      "A detailed inspection of the property before purchase to identify issues and ensure you make an informed, confident investment decision.",
    button: "Learn More",
  },
  {
    icon: <FaBuilding className="text-3xl text-[#385f82]" />,
    title: "Commercial Property Inspections",
    description:
      "Comprehensive evaluation of commercial spaces to assess structural integrity, safety systems, and maintenance needs—helping protect your business investment.",
    button: "Learn More",
  },
  {
    icon: <FaHardHat  className="text-3xl text-[#385f82]" />,
    title: "New Construction Inspections",
    description:
      "Step-by-step inspections during construction to ensure quality, safety, and code compliance before your new home is completed.",
    button: "Learn More",
  },
  {
    icon: <FaClipboardCheck  className="text-3xl text-[#385f82]" />,
    title: "11-Month Warrenty Inspection",
    description:
      "A complete inspection before your builder’s 1-year warranty expires to identify defects and ensure timely repairs at no extra cost to you.",
    button: "Learn More",
  },
  {
    icon: <FaFileInvoice  className="text-3xl text-[#385f82]" />,
    title: "4-Point Insurance Inspection",
    description:
      "Focused inspection covering the roof, HVAC, plumbing, and electrical systems — required by insurance companies for older homes.",
    button: "Learn More",
  },
  {
    icon: <FaMoneyCheckAlt  className="text-3xl text-[#385f82]" />,
    title: "Construction Bank Draw Inspections",
    description:
      "Detailed progress inspections for lenders and builders to verify completed work before each construction payment draw.",
    button: "Learn More",
  },
  {
    icon: <FaCogs  className="text-3xl text-[#385f82] " />,
    title: "Phase Inspections",
    description:
      "Inspection at each critical construction phase—foundation, framing, and final—to ensure quality workmanship and code compliance.",
    button: "Learn More",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-5xl font-bold text-[#385f82] mb-2">
          Our Inspection Services
        </h2>
        <p className="text-gray-500 mb-12 text-xs sm:text-base">
          Thorough inspection services to protect your investment and deliver
          peace of mind.
        </p>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 border border-gray-100 text-left transition-transform transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                {service.icon}
                <h3 className="text-xl font-semibold text-[#385f82]">
                  {service.title}
                </h3>
              </div>              
              <p className="text-gray-600 text-base mb-4">{service.description}</p>
              <div className="flex justify-center">
              <button className="bg-[#385f82] w-[50%] text-white py-2 px-4 rounded-md hover:bg-[#2f4f6d] transition">
                {service.button}
              </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
