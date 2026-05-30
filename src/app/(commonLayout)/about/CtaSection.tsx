import React from "react";

export default function CtaSection() {
  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        Ready To Level Up Your
        <span className="text-blue-400"> Developer Journey?</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
        Join SkillBridge today and connect with thousands of developers,
        mentors, and opportunities worldwide.
      </p>

      <button
        className="mt-10 bg-blue-400 hover:bg-blue-300 
        text-black font-bold px-10 py-4 rounded-2xl shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
      >
        Get Started Now
      </button>
    </div>
  );
}
