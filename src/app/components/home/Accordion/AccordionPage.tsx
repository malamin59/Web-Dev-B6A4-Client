"use client";
import AccordionHeader from "./AccordionHeader";
import Faq from "./Faq";

export function AccordionPage() {
  return (
    <section className="w-full bg-gradient-to-r from-black via-blue-600  text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <AccordionHeader />
        {/* FAQ Card */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border ,border-white/20 p-6 md:p-10 shadow-xl">
          <Faq />
        </div>
      </div>
    </section>
  );
}
