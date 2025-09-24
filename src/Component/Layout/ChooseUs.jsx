import React from "react";
import { CheckCircle } from "lucide-react";

const reasons = [
  "Curated collection of books across genres",
  "Fast and secure delivery",
  "Excellent customer service",
  "Affordable pricing and discounts",
];

const ChooseUs = () => {
  return (
    <section className="bg-[#132849] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-yellow-400">
          Why Choose Zenity?
          <span className="block w-24 h-1 bg-yellow-400 mx-auto mt-2 rounded-full"></span>
        </h2>

        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-lg">
          We’re more than just a bookstore. We’re a community of readers, learners, and thinkers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl mx-auto">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-[#0B1F3A] rounded-xl p-6 shadow-lg hover:shadow-yellow-400/30 transition-shadow duration-300"
            >
              <CheckCircle
                className="w-8 h-8 flex-shrink-0 text-yellow-400 mt-1"
                strokeWidth={1.5}
              />
              <p className="text-white text-lg font-medium">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
