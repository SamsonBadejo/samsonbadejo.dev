import { motion } from "framer-motion";
import { logoShowcase } from "../DesignsImages";
import SectionIntro from "./SectionIntro";

export default function LogoSection({ onOpenImage }) {
  return (
    <section id="logos" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(220,38,38,.12), transparent 35%, rgba(255,255,255,.04))",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro eyebrow="Logo showcase" title="Logo-first thinking for brands that need memory." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {logoShowcase.map((image, index) => (
            <motion.button
              key={`${image}-${index}`}
              onClick={() => onOpenImage({ images: logoShowcase, index, title: "Logo showcase" })}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-black p-3"
              initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.4 : -1.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index % 6) * 0.045, duration: 0.5 }}
            >
              <img src={image} alt={`Logo sample ${index + 1}`} className="aspect-square w-full rounded-[18px] object-cover grayscale transition duration-500 group-hover:grayscale-0" loading="lazy" decoding="async" />
              <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/75 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white opacity-100 backdrop-blur transition group-hover:bg-red-600 sm:opacity-0 sm:group-hover:opacity-100">
                Tap / hover
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
