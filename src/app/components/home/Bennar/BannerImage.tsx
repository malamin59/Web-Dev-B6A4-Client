"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CalendarCheck } from "lucide-react";
import HeroImage from "../../../../../public/hero-image.png";

export default function BannerImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="hidden md:flex justify-center items-center"
    >
      <div className="relative w-[500px] h-[500px]">

        {/* Background Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl"></div>

        {/* Hero Image */}
        <Image
          src={HeroImage}
          alt="SkillBridge Hero"
          fill
          priority
          className="object-contain relative z-10"
        />

        {/* Top Badge */}
        <div className="absolute top-8 right-0 z-20 bg-background border border-border rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm font-medium">Top Rated Tutor</span>
        </div>

        {/* Bottom Badge */}
        <div className="absolute bottom-8 left-0 z-20 bg-background border border-border rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
          <CalendarCheck className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium">500+ Sessions</span>
        </div>

      </div>
    </motion.div>
  );
}