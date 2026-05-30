import React from "react";
import Features from "./Features";

export default function FeaturesSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-20 py-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Why Choose <span className="text-blue-400">SkillBridge</span> ?
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          We provide a powerful ecosystem for developers to improve skills,
          build networks, and unlock opportunities.
        </p>
      </div>
      <Features />
    </div>
  );
}
