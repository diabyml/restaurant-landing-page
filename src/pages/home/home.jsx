import React, { useState } from "react";
import Header from "../../components/header";
import HeroSection from "../../components/hero";
import ServicesSection from "../../components/services";
import WelcomeSection from "../../components/welcome";
import "./style.scss";
import ExploreSection from "../../components/explore/index";
import HistorySection from "../../components/history/index";
import TestimonialsSection from "../../components/testimonials";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <div className="home-page">
      {/* Header */}
      <Header isOpen={isOpen} toggleMenu={toggleMenu} />

      <main className={`main ${isOpen && "hidden-below"}`}>
        {/* Hero */}
        <HeroSection />

        {/* WELCOME SECTION */}
        <WelcomeSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Explore section */}
        <ExploreSection />

        {/* History section */}
        <HistorySection />

        {/* Testimonials section */}
        <TestimonialsSection />
      </main>
    </div>
  );
}

export default HomePage;
