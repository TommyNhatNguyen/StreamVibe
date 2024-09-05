import React from "react";
import HeroSection from "./components/HeroSection";
import ExploreSection from "./components/ExploreSection";
import ExperienceSection from "./components/ExperienceSection";
import FaqComponent from "../../components/FaqComponent";
import PricingComponent from "../../components/PricingComponent";
import TrialComponent from "../../components/TrialComponent";

const HomePage = () => {
  return (
    <main className="homepage">
      {/* Hero */}
      <HeroSection />
      {/* Explore */}
      <ExploreSection />
      {/* Experience */}
      <ExperienceSection />
      {/* FAQ */}
      <FaqComponent />
      {/* Pricing */}
      <PricingComponent />
      {/* Trial */}
      <TrialComponent />
    </main>
  );
};

export default HomePage;
