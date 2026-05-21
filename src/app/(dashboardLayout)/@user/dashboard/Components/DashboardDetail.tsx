"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
export default function DashboardDetail() {
  return (
<div className="min-h-screen bg-gradient-to-br
      flex items-center justify-center px-6 py-10 overflow-hidden">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Welcome To SkillBridge
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-blue-700">
            Learn Faster <br />
            With Expert Tutors
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed">
            Connect with experienced tutors, explore new skills,
            and grow your learning journey through interactive
            online sessions.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-3 rounded-2xl">
                <BookOpen className="text-blue-600 w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Interactive Learning
                </h3>

                <p className="text-gray-500 text-sm">
                  Book personalized tutoring sessions anytime.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-3 rounded-2xl">
                <Users className="text-purple-600 w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  Expert Tutors
                </h3>

                <p className="text-gray-500 text-sm">
                  Learn from experienced professionals worldwide.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Animation Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Glow Effect */}
          <div className="absolute w-72 h-72 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative bg-white/80 backdrop-blur-xl border shadow-2xl rounded-[32px] p-12 w-full max-w-md"
          >
            <div className="flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-full shadow-lg">
                <GraduationCap className="text-white w-14 h-14" />
              </div>

              <h2 className="text-3xl font-bold mt-8 text-gray-800">
                Student Portal
              </h2>

              <p className="text-gray-500 mt-4 leading-relaxed">
                Manage your learning experience, connect with
                tutors, and unlock your full potential.
              </p>

              {/* Animated Dots */}
              <div className="flex gap-3 mt-8">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 rounded-full bg-blue-500"
                />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 rounded-full bg-indigo-500"
                />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    repeat: Infinity,
                  }}
                  className="w-3 h-3 rounded-full bg-purple-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
