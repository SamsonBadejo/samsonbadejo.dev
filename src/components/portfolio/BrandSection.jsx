import { motion } from "framer-motion";
import { brandProjects } from "../DesignsImages";
import { fade } from "./portfolioData";
import PinterestGrid from "./PinterestGrid";
import SectionIntro from "./SectionIntro";

export default function BrandSection({ onOpenImage }) {
  return (
    <section id="brands" className="bg-black px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Portfolio for brand designs" title="Brand identities shown as living visual systems." />

        <div className="space-y-16">
          {brandProjects.map((brand, brandIndex) => (
            <motion.article key={brand.id} className="grid gap-5 lg:grid-cols-[320px_1fr]" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} transition={{ delay: brandIndex * 0.06 }}>
              <div className="h-fit rounded-[28px] border border-white/10 bg-white/[0.04] p-5 lg:sticky lg:top-8">
                <button onClick={() => onOpenImage({ images: [brand.logo], index: 0, title: `${brand.name} logo` })} className="group block overflow-hidden rounded-2xl bg-black">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                </button>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-red-400">Brand {brandIndex + 1}</p>
                <h3 className="mt-2 text-2xl font-black">{brand.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{brand.description}</p>
                <p className="mt-4 rounded-full bg-red-600/12 px-4 py-2 text-xs font-black text-red-300">{brand.tone}</p>
              </div>

              <PinterestGrid images={brand.images} title={brand.name} onOpenImage={onOpenImage} offset={brandIndex} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
