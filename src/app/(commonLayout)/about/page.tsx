"use client";

import AboutImageContent from "./AboutImageContent";
import AboutWrapper from "./AboutWrapper";
import CtaSection from "./CtaSection";
import FeaturesSection from "./FeaturesSection";
import StatsSection from "./StatsSection";

export default function About() {
  return (
    <AboutWrapper>
      {/* Hero Section */}
      <AboutImageContent />
      {/* Features Section */}
      <FeaturesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA-Section */}
      <CtaSection />
    </AboutWrapper>
  );
}
