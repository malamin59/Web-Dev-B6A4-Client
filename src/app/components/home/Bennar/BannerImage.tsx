import { motion } from "framer-motion";
function BannerImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <img
        src="https://illustrations.popsy.co/white/web-design.svg"
        alt="SkillBridge banner"
        className="w-full max-w-md"
      />
    </motion.div>
  );
}

export default BannerImage