"use client";
import { motion } from "framer-motion";
import { Search, School, Users, Star, BookOpen } from "lucide-react";
import BannerButton from "./BannerButton";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Expert tutors" },
  { value: "12k+", label: "Sessions booked" },
  { value: "4.9 ★", label: "Average rating" },
];

export default function BannerContent() {
  return (
    <div>
      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-1.5 text-[11px] font-medium px-3 py-1 rounded-full bg-green-50 text-green-800 border border-green-200 mb-5"
      >
        <Star size={11} />
        Trusted by 10,000+ students
      </motion.span>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-[2.6rem] font-medium leading-tight text-foreground"
      >
        Learn smarter with{" "}
        <span className="text-blue-600">SkillBridge</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-sm"
      >
        Connect with expert tutors, check their availability, and book
        sessions instantly — all in one place.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6 flex flex-col sm:flex-row gap-3"
      >
        <Link href={'/tutors'}>
        <BannerButton variant="primary">
          <Search size={15} />
          Find a tutor
        </BannerButton>
        </Link>
        <BannerButton variant="secondary">
          <School size={15} />
          Become a tutor
        </BannerButton>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-8 pt-6 border-t border-border/30 flex gap-8 flex-wrap"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-lg font-medium text-foreground">{s.value}</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}