"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, CalendarCheck } from "lucide-react";

export default function BannerImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="hidden md:flex justify-center"
    >
      <div className="relative w-64 h-64">

        {/* Soft circle background */}
        <div className="w-full h-full rounded-full bg-blue-50 flex items-center justify-center overflow-visible">
          <Image
            src="https://illustrations.popsy.co/white/web-design.svg"
            alt="SkillBridge tutor illustration"
            width={240}
            height={240}
            className="object-contain"
            priority
          />
        </div>

        {/* Top-right chip */}
        <div className="absolute -top-1 -right-4 bg-background border border-border/40 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-xs font-medium text-foreground shadow-none">
          <Star size={13} className="text-amber-500" />
          Top rated
        </div>

        {/* Bottom-left chip */}
        <div className="absolute -bottom-1 -left-4 bg-background border border-border/40 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 text-xs font-medium text-foreground">
          <CalendarCheck size={13} className="text-teal-600" />
          Session booked!
        </div>

      </div>
    </motion.div>
  );
}