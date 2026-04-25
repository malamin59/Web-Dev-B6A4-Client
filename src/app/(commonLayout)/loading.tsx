"use client";

import { motion } from "framer-motion";
import LoadingPage from "../sections/LoadingPage";

export default function CommonLayoutLoading() {
  // Or a custom loading skeleton component
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm dark:bg-gray-900/90"
        >
          <LoadingPage/>
        </motion.div>
  )
}