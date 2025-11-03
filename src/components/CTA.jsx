import React from "react";
import { Calendar, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="w-full bg-[#f9fafb] border-t border-gray-200 text-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-bold text-[#385f82] mb-4">
          Ready to Schedule Your Inspection?
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Serving Baton Rouge, Denham Springs, Prairieville, Port Allen and surrounding areas
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          {/* Schedule Button */}
          <a
            href="https://app.spectora.com/home-inspectors/cw-inspections-llc/schedule"
            className="flex items-center justify-center gap-2 bg-[#385f82] hover:brightness-90 text-white font-semibold py-3 px-8 rounded-md transition"
          >
            <Calendar className="w-5 h-5" />
            Schedule Now
          </a>

          {/* Call Button */}
          <a
            href="tel:225-803-8821"
            className="flex items-center justify-center gap-2 border border-gray-400 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-md transition"
          >
            <Phone className="w-5 h-5" />
            Call (225) 803-8821
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
