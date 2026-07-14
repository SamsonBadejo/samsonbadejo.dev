import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun, FaWhatsapp } from "react-icons/fa";
import { CONTACT, navItems } from "./portfolioData";

export function FloatingNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: 0.45 }
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-black/60 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:block"
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.65, duration: 0.55 }}
      aria-label="Portfolio navigation"
    >
      <div className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative grid h-11 w-11 place-items-center rounded-xl transition ${
                active === item.id ? "bg-red-600 text-white" : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
              aria-label={item.label}
            >
              <Icon />
              <span className="pointer-events-none absolute left-14 rounded-full bg-white px-3 py-1 text-xs font-black text-black opacity-0 shadow-lg transition group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}

export function MobileTopNav() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-7 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.id} href={`#${item.id}`} className="grid h-10 place-items-center rounded-xl text-sm text-white/75 hover:bg-red-600 hover:text-white" aria-label={item.label}>
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function ThemeToggle({ theme, setTheme }) {
  const isLight = theme === "light";

  return (
    <motion.button
      className="fixed right-4 top-4 z-[70] grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white text-red-600 shadow-2xl shadow-black/30 transition hover:scale-105 md:right-6 md:top-6"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.45 }}
      aria-label="Toggle dark and light mode"
    >
      {isLight ? <FaMoon /> : <FaSun />}
    </motion.button>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[80] h-1 w-full bg-transparent">
      <div className="h-full bg-red-600" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function QuickContact() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-red-600 text-white shadow-2xl shadow-red-950/50 transition hover:bg-white hover:text-red-600 md:bottom-6 md:right-6"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp />
    </motion.a>
  );
}
