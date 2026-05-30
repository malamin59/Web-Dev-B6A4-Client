import { Code2, Users, Briefcase, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      icon: <Code2 size={32} />,
      title: "Modern Tech Stack",
      desc: "Built with React, Next.js, Node.js, MongoDB, and modern tools for scalable development.",
    },
    {
      icon: <Users size={32} />,
      title: "Connect Developers",
      desc: "SkillBridge helps developers connect, collaborate, and grow their professional journey.",
    },
    {
      icon: <Briefcase size={32} />,
      title: "Career Opportunities",
      desc: "Discover internships, jobs, and real-world projects to boost your experience.",
    },
    {
      icon: <Rocket size={32} />,
      title: "Fast & Responsive",
      desc: "Optimized performance with beautiful responsive UI for all devices.",
    },
  ];
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          className="bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 rounded-3xl p-8 backdrop-blur-lg shadow-lg"
        >
          <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 text-blue-400 flex items-center justify-center mb-6">
            {feature.icon}
          </div>

          <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>

          <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
