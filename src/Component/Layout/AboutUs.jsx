import React from "react";
import { BookOpen, Users, Globe, Archive, DollarSign } from "lucide-react";
import book1 from "../../assets/book1.jpg";
import book2 from "../../assets/book2.jpg";
import book3 from "../../assets/book3.jpg";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white text-[#0B1F3A] px-6 md:px-20 py-16 ">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold">
          About <span className="text-yellow-400">Zenity</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A modern ebook platform that connects readers to the knowledge they
          need — instantly, affordably, and with global accessibility.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="mt-6 px-8 py-4 bg-yellow-400 text-[#0B1F3A] font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Explore Our Library
        </button>
      </section>

      <section className="grid md:grid-cols-2  gap-8 items-center mt-20 px-10">
        <div>
          <img
            src={book1}
            alt="Our Story"
            className="w-full h-90 object-cover shadow-md"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Zenity was founded with a mission to empower readers with creative
            and efficient digital solutions. We believe in combining innovation,
            design, and technology to transform ideas into impactful
            experiences. Over the years, we have grown into a diverse team
            passionate about making knowledge accessible globally.
          </p>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-5 items-center px-10 ">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Approach</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We focus on understanding our readers’ needs, identifying
            opportunities, and delivering tailored solutions. Collaboration and
            transparency are key to our process. By emphasizing strategy and
            design thinking, we create lasting value for learners worldwide.
          </p>
        </div>
        <div>
          <img
            src={book2}
            alt="Our Approach"
            className="w-ful h-90 object-cover shadow-md"
          />
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-extrabold text-center mb-12 mt-20">
          Why <span className="text-yellow-400">Zenity?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <BookOpen size={48} className="text-yellow-400" />,
              title: "Extensive Library",
              desc: "Thousands of ebooks across genres including fiction, tech, academic & self-help.",
            },
            {
              icon: <Globe size={48} className="text-yellow-400" />,
              title: "Global Access",
              desc: "Read on any device, anywhere in the world — no delays, no restrictions.",
            },
            {
              icon: <DollarSign size={48} className="text-yellow-400" />,
              title: "Low-cost & Free",
              desc: "Many titles are free, and premium ebooks are priced for learners and professionals.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="border-2 border-[#0B1F3A] rounded-xl p-8 hover:shadow-lg transition"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-[#0B1F3A]">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Numbers & Impact */}
      <section className="bg-yellow-100 mt-20 rounded-xl py-12 px-8 text-center shadow-inner space-y-6">
        <div className="flex md:justify-center gap-8">
          {[
            { num: "100K+", label: "Readers Served" },
            { num: "1,500+", label: "Ebook Titles" },
            { num: "50+", label: "Countries Reached" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-[#0B1F3A]">{item.num}</h3>
              <p className="text-gray-700">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-700 max-w-xl mx-auto text-lg">
          Trusted by readers, educators, and lifelong learners around the globe.
        </p>
      </section>

      {/* Community & Values */}
      <section className="grid mt-20 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div>
          <img
            src={book3}
            alt="Community & Values"
            className="w-full h-90 object-cover shadow-md"
          />
        </div>
        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Community & Values</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We support authors and independent publishers by sharing revenue
            transparently and creating an ecosystem that fosters fair access and
            open learning.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>✔️ DRM-aware and user-friendly formats</li>
            <li>✔️ Inclusive pricing and free content tiers</li>
            <li>✔️ Support for educators, students, and local communities</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className=" mt-20 text-center space-y-4">
        <h2 className="text-3xl font-semibold text-[#0B1F3A]">
          Ready to Begin?
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Join Zenity's global community of readers today, and unlock your next
          learning journey.
        </p>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-8 py-4 bg-yellow-400 text-[#0B1F3A] font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Browse the Library
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
