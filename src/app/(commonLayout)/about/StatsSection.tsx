import React from "react";

export default function StatsSection() {
  return (
    <div className="py-20 bg-white/5 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {[
          { number: "10K+", label: "Developers" },
          { number: "500+", label: "Projects" },
          { number: "120+", label: "Companies" },
          { number: "24/7", label: "Support" },
        ].map((item, index) => (
          <div key={index}>
            <h2 className="text-4xl font-extrabold text-cyan-400">
              {item.number}
            </h2>
            <p className="text-gray-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
