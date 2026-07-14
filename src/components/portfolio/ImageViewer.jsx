import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function ImageViewer({ imageState, setImageState }) {
  if (!imageState) return null;

  const { images, index, title } = imageState;
  const move = (step) => setImageState({ ...imageState, index: (index + step + images.length) % images.length });

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[120] grid place-items-center bg-black/90 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="relative flex h-full max-h-[86vh] w-full max-w-4xl items-center justify-center">
          <button onClick={() => setImageState(null)} className="absolute right-0 top-0 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-black" aria-label="Close image">
            <FaTimes />
          </button>
          {images.length > 1 && (
            <button onClick={() => move(-1)} className="absolute left-0 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white" aria-label="Previous image">
              <FaChevronLeft />
            </button>
          )}
          <img src={images[index]} alt={title} className="max-h-[80vh] max-w-full rounded-2xl object-contain shadow-2xl" loading="eager" decoding="async" />
          {images.length > 1 && (
            <button onClick={() => move(1)} className="absolute right-0 z-10 mr-12 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white" aria-label="Next image">
              <FaChevronRight />
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
