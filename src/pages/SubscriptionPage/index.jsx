import React from "react";
import PlanTableSection from "./components/PlanTableSection";
import PricingComponent from "../../components/PricingComponent";
import TrialComponent from "../../components/TrialComponent";

const SubscriptionPage = () => {
  return (
    <main className="subscription">
      <PricingComponent />
      <PlanTableSection />
      <TrialComponent />
    </main>
  );
};

export default SubscriptionPage;
