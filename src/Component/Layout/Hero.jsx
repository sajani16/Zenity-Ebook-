import React from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen, Download, Star } from "lucide-react";
import Button from "../UI/Button";
import heroImage from "../../assets/book.jpg"; // ✅ adjust path if needed

const Hero = () => {
  const navigate = useNavigate();

  const FeatureCard = ({ icon, label }) => (
    <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow hover:shadow-md transition">
      {icon}
      <span className="font-medium text-blue-900">{label}</span>
    </div>
  );

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-6 md:px-12 text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-white/50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div className="space-y-16">
          <div className="space-y-8">
            <h1 className="text-[#0B1F3A] text-5xl md:text-6xl font-extrabold font-serif leading-tight">
              Discover Your Next{" "}
              <span className="text-yellow-400">Great Read</span>
            </h1>
            <p className="text-lg text-gray-500/90 max-w-lg">
              Dive into a world of stories, knowledge, and adventure. Browse
              through thousands of e-books from every genre and enjoy instant
              access.
            </p>
            <Button
              onClick={() => navigate("/products")}
              variant="primary"
              className="px-8 py-3 text-lg"
            >
              Explore More
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <FeatureCard
              icon={<BookOpen className="text-blue-600 w-6 h-6" />}
              label="10,000+ Books"
            />
            <FeatureCard
              icon={<Download className="text-blue-600 w-6 h-6" />}
              label="Instant Download"
            />
            <FeatureCard
              icon={<Star className="text-blue-600 w-6 h-6" />}
              label="Top Rated Quality"
            />
          </div>
        </div>

        {/* Empty right side or image mock can go here */}
        <div className="hidden md:block"></div>
      </div>
    </section>
  );
};

export default Hero;
