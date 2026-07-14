import { motion } from "framer-motion";
import { fade } from "./portfolioData";

export default function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <motion.div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">{title}</h2>
      {copy && <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">{copy}</p>}
    </motion.div>
  );
}
