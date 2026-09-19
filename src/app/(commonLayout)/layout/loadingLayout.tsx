"use client";

import { motion } from "framer-motion";

export default function LoadingLayout() {
  return (
    <div className="relative">
      {/* Outer ring */}
      <motion.div
  className="h-16 w-16 rounded-full border-4 border-gray-800 border-t-black"
  animate={{ rotate: 360 }}
  transition={{
    duration: 0.8,
    repeat: Infinity,
    ease: "linear",
  }}
/>

      {/* Black spinner */}
      <motion.div
        className="absolute inset-0 h-16 w-16 rounded-full border-4 border-t-black border-r-transparent border-b-transparent border-l-transparent dark:border-t-white"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />

      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Loading
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ...
        </motion.span>
      </motion.div>
    </div>
  );
}