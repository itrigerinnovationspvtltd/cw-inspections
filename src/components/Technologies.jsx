import React from "react";
import { motion } from "framer-motion";

import tech1 from "../assets/tech1.webp";
import tech2 from "../assets/tech2.webp";
import tech3 from "../assets/tech3.webp";
import tech4 from "../assets/tech4.webp";

const Technologies = () => {
  const techItems = [
    {
      id: 1,
      title: "A Local Company",
      description:
        "C.W. Inspections is a Baton Rouge-based company offering reliable home inspections. We use advanced tools and provide clear, easy-to-read reports with same-day delivery. “No Secret Home Inspector Code!” You don’t need a code breaker to understand our inspection reports. Our goal is to make sure that home buyers clearly understand any concerns we find during their home inspection using everyday language. We clearly explain why a finding is a concern, with a clear recommendation to address it. Our goal is not to try to impress you with “Secret Home Inspector Speak”",
      image: tech1,
    },
    {
      id: 2,
      title: "FAA Licensed Drone Technology",
      description:
        "We use drone inspections to reach roofs and areas that are unsafe or inaccessible. Our FAA-certified drone pilot ensures accurate visuals from every angle. As an FAA licensed Remote Pilot, we can use our state of the art DJI Mavic drone to see what some other inspectors can’t. We’re one of only a few Baton Rouge home inspection companies that offer drone roof inspections. Although there is no substitute for actually walking on a roof, sometimes it’s not safe due to steep pitch or height. But the drone gets us up there with no problem!",
      image: tech2,
    },
    {
      id: 3,
      title: "FLIR Infrared Technology",
      description:
        "Our infrared camera detects hidden issues like insulation problems, moisture, and electrical hazards. This helps identify issues before they become costly repairs. With our FLIR Infrared Camera, we have the ability to assess insulation problems, moisture intrusion, plumbing leaks, and electrical hazards. We’d love to show you what it can do! Shouldn’t your Baton Rouge home inspection involve the latest technology!",
      image: tech4,
    },
    {
      id: 4,
      title: "Crawlspace Inspection Vehicle",
      description:
        "Our custom-built Crawlspace Inspection Vehicle allows us to safely and efficiently inspect tight or hard-to-reach crawlspaces without disturbing your property. Equipped with cameras and lighting, it provides clear visuals of areas that are otherwise inaccessible, helping us detect structural issues, moisture, and pests with precision.",
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
