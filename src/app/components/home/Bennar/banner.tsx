"use client";

import BannerImage from "./BannerImage";
import BannerContent from "./BannerContent";

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <BannerContent />
        <BannerImage />
      </div>
    </section>
  );
}
