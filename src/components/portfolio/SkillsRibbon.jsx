import { motion } from "framer-motion";
import { skills } from "./portfolioData";

export default function SkillsRibbon() {
  return (
    <section className="bg-[#050505] px-5 py-14 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black text-white/80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.035 }}
            >
              <Icon className="text-red-400" /> {skill.name}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
