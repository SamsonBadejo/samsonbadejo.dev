import { motion } from "framer-motion";
import { FaExpand } from "react-icons/fa";
import { fade } from "./portfolioData";

export default function PinterestGrid({ images, title, onOpenImage, offset = 0 }) {
  return (
    <div className="columns-2 gap-4 sm:columns-3 xl:columns-4">
      {images.map((image, index) => (
        <motion.button
          key={`${title}-${image}-${index}`}
          onClick={() => onOpenImage({ images, index, title })}
          className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] text-left shadow-2xl shadow-black/20"
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ delay: ((index + offset) % 5) * 0.04 }}
        >
          <img src={image} alt={`${title} ${index + 1}`} className={`${index % 3 === 1 ? "aspect-[4/5]" : index % 3 === 2 ? "aspect-square" : "aspect-[3/4]"} w-full object-cover transition duration-700 group-hover:scale-105`} loading="lazy" decoding="async" />
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xs font-black uppercase tracking-wider text-white/60">{title}</span>
            <FaExpand className="text-xs text-red-400 opacity-0 transition group-hover:opacity-100" />
          </div>
        </motion.button>
      ))}
    </div>
  );
}
