import { AnimatePresence, motion } from "framer-motion";

export default function Loader({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] grid place-items-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: "easeInOut" } }}
        >
          <motion.div className="px-6 text-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <div className="mx-auto mb-7 h-16 w-16 rounded-full border border-red-500/30 p-2">
              <div className="h-full w-full animate-spin rounded-full border-2 border-transparent border-t-red-500" />
            </div>
            <p className="text-xs font-black uppercase tracking-[0.32em] text-red-400">Welcome to my portfolio</p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">Samson Badejo</h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
