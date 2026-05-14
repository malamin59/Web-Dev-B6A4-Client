"use client";
import AccordionHeader from "./AccordionHeader";
import Faq from "./Faq";

export function AccordionPage() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <AccordionHeader />
        <div className="max-w-2xl mx-auto">
          <Faq />
        </div>
      </div>
    </section>
  );
}