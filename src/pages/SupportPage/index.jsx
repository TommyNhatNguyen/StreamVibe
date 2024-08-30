import React from "react";
import ContactSection from "./components/ContactSection";
import FaqComponent from "../../components/FaqComponent";

const SupportPage = () => {
  return (
    <main className="support">
      <ContactSection />
      <FaqComponent />
    </main>
  );
};

export default SupportPage;
