import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="top" className="relative grid min-h-screen place-items-center overflow-hidden bg-[#d90404] px-5 text-white">
      <motion.div className="absolute inset-0 opacity-25" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
        <div className="absolute left-[12%] top-[16%] h-36 w-36 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full bg-black/35 blur-3xl" />
      </motion.div>
      <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
        <p className="mb-6 text-xs font-black uppercase tracking-[0.42em] text-white/75">Samson Badejo</p>
        <h1 className="text-[17vw] font-black leading-none tracking-tight sm:text-[14vw] lg:text-[10vw]">PORTFOLIO</h1>
      </motion.div>
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/30 px-5 py-3 text-xs font-black uppercase tracking-[0.22em] text-white/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
      >
        Scroll
      </motion.a>
    </section>
  );
}
