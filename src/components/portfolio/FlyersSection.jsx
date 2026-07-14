import { motion } from "framer-motion";
import { flyerGroups } from "../DesignsImages";
import { fade } from "./portfolioData";
import PinterestGrid from "./PinterestGrid";
import SectionIntro from "./SectionIntro";

export default function FlyersSection({ onOpenImage }) {
  return (
    <section id="flyers" className="bg-black px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Flyer design system" title="Event, church, school, business and birthday visuals." />
        <div className="space-y-20">
          {flyerGroups.map((group, index) => (
            <motion.div key={group.id} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
              <div className="mb-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-400">Category {index + 1}</p>
                  <h3 className="mt-2 text-3xl font-black">{group.title}</h3>
                </div>
              </div>
              <PinterestGrid images={group.images.filter(Boolean)} title={group.title} onOpenImage={onOpenImage} offset={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
