import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="bg-linear-to-b from-white to-gray-50 pt-20 py-14">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 gap-12">
        {/* Left Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            About <span className="text-blue-600">C.W Inspections</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-lg mb-6 leading-relaxed">
            C.W. Inspections proudly offers home and commercial inspections in Baton Rouge and surrounding parishes, covering areas like Downtown, Southdowns, Shenandoah, and the Garden District. We strive to be the top choice for buyers, sellers, investors, and agents. Our focus is on delivering excellent customer service and high-quality, easy-to-read inspection reports.
          </p>

          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed font-bold">
            We utilize technology to provide photo-rich reports available the same day!
          </p>
          <div className="text-sm sm:text-lg">
            <ul className="list-disc pl-8">
              <li>Over a decade of inspection experience, we offer trusted inspection services.</li>
              <li>Years of experience in the construction trades.</li>
              <li>Easy-to-read, interactive reports.</li>
              <li>We are an <span className="text-blue-600"> InterNACHI</span> Certified home inspection company.</li>
              <li>Sewer scopes and termite inspections are available upon request.</li>
            </ul>
            <p>Also providing  <span className="font-bold text-blue-600">Commercial Inspections.</span></p>
          </div>


        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <img
              src="/about1.jpg"
              alt="C.W Inspections overview"
              className=" w-full sm:w-80 h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
