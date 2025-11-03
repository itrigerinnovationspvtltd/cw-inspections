import React from "react";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const reviews = [
  {
    name: "Courtney Washington",
    profile: "https://i.pravatar.cc/100?img=33",
    rating: 5,
    date: "Oct 30, 2025",
    review:
      "Mr. Clayton was awesome. Very thorough and informative and made sure we understood every step of the inspection. Will definitely use again or recommend to anyone. Excellent service!",
  },
  {
    name: "Amelia",
    profile: "https://i.pravatar.cc/100?img=5",
    rating: 5,
    date: "Oct 18, 2025",
    review:
      "I’ve heard stories about home inspections that go above and beyond, but I always assumed they were exaggerated—until Clayton proved me wrong. His attention to detail and honesty completely changed my perspective.",
  },
  {
    name: "Reeves Durham",
    profile: "https://i.pravatar.cc/100?img=7",
    rating: 5,
    date: "Oct 16, 2025",
    review:
      "Clayton was amazing. He did an extremely in-depth inspection, went over all of my questions and concerns, and provided valuable tips for the future.",
  },
  {
    name: "Kyla Hicks",
    profile: "https://i.pravatar.cc/100?img=8",
    rating: 5,
    date: "Oct 28, 2025",
    review: "Very detailed and helpful — a wonderful experience!",
  },
  {
    name: "Thierry Nkouga",
    profile: "https://i.pravatar.cc/100?img=9",
    rating: 5,
    date: "Oct 22, 2025",
    review:
      "Mr. Clayton is the best on the market — thorough, detailed, and professional. Incredible service with great outcomes!",
  },
  {
    name: "Colyn Carlos",
    profile: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    date: "Oct 25, 2025",
    review: "Clayton was very thorough and professional with his inspection. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="max-w-7xl mx-auto py-16 sm:py-24 px-6">
      <h2 className="text-center text-3xl sm:text-5xl font-bold text-gray-800 mb-12">
        What Our Customers Say on Google
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
          >
            
            {/* Profile Section */}
            <div className="flex items-center p-4 border-b border-gray-100">
              <img
                src={item.profile}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              <div>
                <h3 className="font-semibold text-[#202124]">{item.name}</h3>
                <div className="flex items-center text-xs sm:text-sm text-gray-500">
                  <FaCheckCircle className="text-blue-500 mr-1" />
                  <span>Verified Review • {item.date}</span>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <div className="p-4">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < item.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[#202124] text-sm leading-relaxed">
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
