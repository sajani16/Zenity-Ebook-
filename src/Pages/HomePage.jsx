import React from "react";
import Hero from "../Component/Layout/Hero";
import Catagory from "../Component/Layout/Catagory";
import Services from "../Component/Layout/Services";
import ChooseUs from "../Component/Layout/ChooseUs";
import Testimonials from "../Component/Layout/Testimonials";

function HomePage() {
  return (
    <div>
      <Hero />
      <Services />
      <Catagory />
      <ChooseUs />
      <Testimonials />
    </div>
  );
}

export default HomePage;
