"use client";

import { motion } from "framer-motion";
import BannerButton from "./BannerButton";
import { Star } from "lucide-react";

function BannerContent() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold leading-tight"
      >
       <p className="f"> Learn Smarter with{" "}
         SkillBridge  <span> <Star /></span></p>
        
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-4 text-base md:text-lg text-gray-100"
      >
        SkillBridge connects students with expert tutors. Browse verified
        tutors, check availability, and book sessions instantly.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 flex flex-col sm:flex-row gap-4"
      >
        <BannerButton variant="primary">Find a Tutor</BannerButton>
        <BannerButton variant="secondary">Become a Tutor</BannerButton>
      </motion.div>
    </div>
  );
}

export default BannerContent;
