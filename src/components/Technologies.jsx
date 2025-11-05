import React from "react";
import { motion } from "framer-motion";

import tech1 from "../assets/tech1.webp";
import tech2 from "../assets/tech2.webp";
import tech3 from "../assets/tech3.webp";

const Technologies = () => {
  const techItems = [
    {
  id: 1,
  title: "Trusted Local Expertise",
  description:
    "As a locally owned and operated company, we take pride in serving our community with honesty and professionalism. Our team understands the unique needs and challenges of homes in the area, ensuring every inspection is thorough and personalized. When you choose us, you’re choosing a company that values trust, transparency, and long-term relationships. Experience the difference of working with true local experts!",
  image: tech1,
},

   {
  id: 2,
  title: "Sewer Scopes",
  description:
    "Our sewer scope inspection utilizes high-resolution camera technology to evaluate the interior condition of your home’s sewer line. This process allows us to accurately identify blockages, cracks, corrosion, and root intrusion that may compromise the plumbing system. Early detection helps prevent costly repairs and ensures the integrity of your drainage system.",
  image: tech2,
},

    {
      id: 3,
      title: "FLIR Infrared Technology",
      description:
        "Our infrared camera detects hidden issues like insulation problems, moisture, and electrical hazards. This helps identify issues before they become costly repairs. With our FLIR Infrared Camera, we have the ability to assess insulation problems, moisture intrusion, plumbing leaks, and electrical hazards. We’d love to show you what it can do! Shouldn’t your Baton Rouge home inspection involve the latest technology!",
      image: tech3,
    },
  ];

  return (
    <section id="technologies" className="bg-[#f9fafb] py-28 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#385f82] mb-4">
          Advanced Inspection Technology
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We use cutting-edge tools and technology to deliver the most thorough,
          accurate, and professional inspections possible.
        </p>
      </div>

      <div className="space-y-20 max-w-6xl mx-auto">
        {techItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 p-5  ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full h-80 object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-2xl font-semibold text-[#385f82] mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
