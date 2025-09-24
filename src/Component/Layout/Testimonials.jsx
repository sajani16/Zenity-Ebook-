import React from "react";

function Testimonials() {
  // Testimonial Card Component
  const TestimonialCard = ({ text, author }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <p className="text-gray-700 italic">“{text}”</p>
      <div className="mt-4 font-semibold text-blue-900">— {author}</div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
          What Our Readers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <TestimonialCard
            text="A brilliant collection of books at unbeatable prices. My go-to site for eBooks!"
            author="Priya Sharma"
          />
          <TestimonialCard
            text="Easy to use, instant download, and amazing customer support. Highly recommended."
            author="Raj Karki"
          />
          <TestimonialCard
            text="Love the layout and variety. Found rare titles I couldn’t find anywhere else."
            author="Sita Thapa"
          />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
