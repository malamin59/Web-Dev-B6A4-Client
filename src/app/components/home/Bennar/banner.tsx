"use client";
import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto ">
        <div className="border border-border/40 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-14 py-12 md:py-16">
            <BannerContent />
            <BannerImage />
          </div>
        </div>
      </div>
    </section>
  );
}