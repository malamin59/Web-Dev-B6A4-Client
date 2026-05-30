import { motion } from "framer-motion";
import Image from "next/image";
import AboutImage from "../../../../public/aboutImage.jpg";

export default function AboutImageContent() {
  return (
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="bg-cyan-500/10 text-blue-600 px-4 py-2 rounded-full text-sm border border-cyan-500/20">
              About SkillBridge
            </span>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-6">
              Empowering Developers To Build Their
              <span className="text-blue-600"> Dream Career</span>
            </h1>

            <p className="text-gray-400 text-lg mt-4 leading-relaxed">
              SkillBridge is a modern developer platform designed to help
              programmers learn, connect, and grow through real-world projects,
              collaboration, and career opportunities.
            </p>

            <div className="flex     flex-wrap gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-400 text-black font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30">
                Explore Platform
              </button>

              <button className="border border-white/20 hover:border-blue-400 hover:text-blue-400 px-7 py-3 rounded-xl transition-all duration-300">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl">
              <Image
                sizes="500"
                width={500}
                src={AboutImage}
                alt="About SkillBridge"
                className="rounded-2xl object-cover"
              />
            </div>
          </motion.div>
        </div>  )
}
