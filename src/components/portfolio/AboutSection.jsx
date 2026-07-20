import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Profile from "../../assets/Sammie.png";
import CV from "../../assets/Samson Badejo CV (Graphics Designer & Video Editor).pdf";
import { CONTACT, fade } from "./portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(220,38,38,.22), transparent 36%), radial-gradient(circle at 90% 70%, rgba(255,255,255,.06), transparent 30%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div className="mx-auto w-full max-w-[360px]" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-red-600/30 blur-3xl" />
            <img src={Profile} alt="Samson Badejo" className="relative aspect-[4/5] w-full rounded-[28px] border border-white/10 object-cover object-top shadow-2xl shadow-red-950/40 saturate-90" loading="lazy" decoding="async" />
          </div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} transition={{ delay: 0.12 }}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">Introduction</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            I am Samson Badejo, a brand designer and visual content creator based in Nigeria.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65">
            I create logos, brand designs, flyers, carousel visuals, and edited videos for brands, churches, schools, businesses and personal events. My focus is simple: make every message look clear, premium and easy to trust.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              ["What I do", "Brand design, logos, flyers, video edits"],
              ["Tools", "Canva, CorelDraw, Photoshop, CapCut, Premiere Pro"],
              ["Location", "Nigeria, available for remote projects"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-sm font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CV} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white">
              Download PDF <FaDownload />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white/85 hover:border-red-500">
              Start a project <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
