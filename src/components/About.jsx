import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.webp";

const About = () => {
  return (
    <section id="about" className="bg-linear-to-b from-gray-50 via-white to-gray-100  py-28">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-16">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            About <span className="text-[#385f82]">C.W Inspections</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-lg mb-6 leading-relaxed">
            C.W. Inspections proudly offers home and commercial inspections in Baton Rouge and surrounding parishes, covering areas like Downtown, Southdowns, Shenandoah, and the Garden District. We strive to be the top choice for buyers, sellers, investors, and agents. Our focus is on delivering excellent customer service            
          </p>

          <div className="bg-white/70 border-l-4 border-[#385f82] px-5 py-4 rounded-lg shadow-sm mb-6">
            <p className="text-gray-800 text-base sm:text-lg italic font-semibold">
              “We utilize advanced technology to deliver detailed,
              photo-rich reports on the same day.”
            </p>
          </div>

          
           <ul className="list-disc pl-6 space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
            <li>Over a decade of trusted inspection experience.</li>
            <li>Strong foundation in construction trades.</li>
            <li>Interactive, easy-to-read digital reports.</li>
            <li>
              Certified by{" "}
              <span className="font-semibold text-[#385f82]">InterNACHI</span>.
            </li>
            <li>Sewer scopes and termite inspections available on request.</li>
          </ul>

          <p className="mt-6 text-gray-900 text-base sm:text-lg font-semibold">
            Also providing{" "}
            <span className="text-[#385f82]">Commercial Inspections</span>.
          </p>

        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
           <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group">
            <img
              src={about}
              alt="Professional home inspection in Baton Rouge"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
