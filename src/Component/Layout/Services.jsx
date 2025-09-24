import React from "react";
import { Truck, ShieldCheck, ThumbsUp, Headphones } from "lucide-react";

const services = [
  {
    title: "Free Delivery",
    desc: "On all orders over $50",
    icon: <Truck className="w-10 h-10 text-[#0B1F3A]" />,
  },
  {
    title: "Secure Payments",
    desc: "100% encrypted checkout",
    icon: <ShieldCheck className="w-10 h-10 text-[#0B1F3A]" />,
  },
  {
    title: "Quality Books",
    desc: "Handpicked by our editors",
    icon: <ThumbsUp className="w-10 h-10 text-[#0B1F3A]" />,
  },
  {
    title: "24/7 Support",
    desc: "We're here to help anytime",
    icon: <Headphones className="w-10 h-10 text-[#0B1F3A]" />,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3A]">Our Services</h2>
        <p className="text-gray-900 mt-2">
          We provide excellent service to enhance your book shopping experience.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="text-[#0B1F3A]  rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-navy-400">{service.title}</h3>
            <p className="text-gray-800">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
