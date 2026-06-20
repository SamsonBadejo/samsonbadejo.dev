import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBehance,
  FaBriefcase,
  FaCamera,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaEnvelope,
  FaExpand,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLayerGroup,
  FaLinkedin,
  FaPalette,
  FaPhoneAlt,
  FaTimes,
  FaVideo,
  FaWhatsapp,
} from "react-icons/fa";
import { SiAdobephotoshop, SiCanva, SiCoreldraw } from "react-icons/si";
import DesignsImages from "./components/DesignsImages";
import Profile from "./assets/Sammie.png";
import CV from "./assets/CV Samson Badejo.pdf";

const CONTACT = {
  email: "Samsonbadejo44@gmail.com",
  phone: "09155278013",
  whatsapp: "https://wa.me/2349155278013",
  linkedin: "https://www.linkedin.com/in/samson-badejo",
  instagram: "https://www.instagram.com/samcodex/",
  github: "https://github.com/SamsonBadejo",
  behance: "https://www.behance.net/",
};

const source = {
  branding: DesignsImages[0]?.images || [],
  church: DesignsImages[1]?.images || [],
  social: DesignsImages[2]?.images || [],
  school: DesignsImages[3]?.images || [],
};

const navItems = [
  { id: "top", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaBriefcase },
  { id: "brands", label: "Brands", icon: FaLayerGroup },
  { id: "logos", label: "Logos", icon: FaPalette },
  { id: "flyers", label: "Flyers", icon: FaCamera },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const brandProjects = [
  {
    name: "Polish Studio",
    description: "A refined visual direction for a modern service brand, built around bold layouts and strong image hierarchy.",
    logo: source.branding[0],
    pages: source.branding.slice(0, 6),
    tone: "Identity, promo design, social assets",
  },
  {
    name: "Fresh Campaign",
    description: "Campaign visuals designed to feel energetic, readable and ready for social media rollout.",
    logo: source.branding[6] || source.branding[1],
    pages: source.branding.slice(6, 12),
    tone: "Campaign direction, flyers, mockups",
  },
  {
    name: "Social Brand Kit",
    description: "A compact set of branded posts and visual assets made to keep a brand consistent online.",
    logo: source.branding[12] || source.branding[2],
    pages: source.branding.slice(12, 18),
    tone: "Social design, content system, templates",
  },
];

const logoWall = [
  ...source.branding.slice(0, 8),
  ...source.social.slice(0, 2),
  ...source.school.slice(0, 2),
].filter(Boolean);

const flyerGroups = [
  {
    title: "Event Flyers",
    subtitle: "Bold event announcements with fast readability.",
    images: [...source.church.slice(0, 3), ...source.social.slice(0, 2)],
  },
  {
    title: "Church Flyers",
    subtitle: "Faith-based visuals, countdowns and service communications.",
    images: source.church,
  },
  {
    title: "School Flyers",
    subtitle: "Campus events, school announcements and student-focused graphics.",
    images: source.school,
  },
  {
    title: "Business Flyers",
    subtitle: "Promotional visuals and branded campaign posts.",
    images: source.branding.slice(4, 11),
  },
  {
    title: "Birthday Flyers",
    subtitle: "Celebration visuals with clean composition and strong mood.",
    images: source.branding.slice(11, 16),
  },
  {
    title: "Static Flyers",
    subtitle: "Single-frame designs for social platforms and announcements.",
    images: [...source.social, ...source.school, ...source.branding.slice(0, 4)],
  },
];

const skills = [
  { name: "Canva", icon: SiCanva },
  { name: "CorelDraw", icon: SiCoreldraw },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Premiere Pro", icon: FaVideo },
  { name: "CapCut", icon: FaVideo },
  { name: "Brand Design", icon: FaPalette },
];

const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Loader({ visible }) {
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

function FloatingNav() {
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
      className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 rounded-2xl border border-white/10 bg-black/55 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl md:block"
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
                active === item.id ? "bg-red-600 text-white" : "text-white/62 hover:bg-white/10 hover:text-white"
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

function MobileTopNav() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-white/10 bg-black/70 p-2 backdrop-blur-xl md:hidden">
      <div className="grid grid-cols-6 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.id} href={`#${item.id}`} className="grid h-11 place-items-center rounded-xl text-white/75 hover:bg-red-600 hover:text-white" aria-label={item.label}>
              <Icon />
            </a>
          );
        })}
      </div>
    </div>
  );
}

function RedHero() {
  return (
    <section id="top" className="relative grid min-h-screen place-items-center overflow-hidden bg-[#d90404] px-5 text-white">
      <motion.div className="absolute inset-0 opacity-25" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.2, ease: "easeOut" }}>
        <div className="absolute left-[12%] top-[16%] h-36 w-36 rounded-full bg-white/25 blur-3xl" />
        <div className="absolute bottom-[12%] right-[10%] h-52 w-52 rounded-full bg-black/35 blur-3xl" />
      </motion.div>
      <motion.div className="text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }}>
        <p className="mb-6 text-xs font-black uppercase tracking-[0.42em] text-white/75">Samcodex creative studio</p>
        <h1 className="text-[17vw] font-black leading-none tracking-tight sm:text-[14vw] lg:text-[10vw]">PORTFOLIO</h1>
        <p className="mx-auto mt-6 max-w-xl text-sm font-semibold leading-7 text-white/78 sm:text-base">
          Brand design, logos, flyers, social visuals and video editing with a clean commercial finish.
        </p>
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

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#050505] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,.22),transparent_36%),radial-gradient(circle_at_90%_70%,rgba(255,255,255,.06),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div className="mx-auto w-full max-w-[360px]" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-red-600/30 blur-3xl" />
            <img src={Profile} alt="Samson Badejo" className="relative aspect-[4/5] w-full rounded-[28px] border border-white/10 object-cover object-top mix-blend-luminosity shadow-2xl shadow-red-950/40" loading="lazy" decoding="async" />
          </div>
        </motion.div>

        <motion.div variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }} transition={{ delay: 0.12 }}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">Introduction</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-5xl">
            I am Samson Badejo, a brand designer and visual content creator based in Nigeria.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/66">
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
                <p className="mt-2 text-sm leading-6 text-white/55">{copy}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={CV} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full bg-red-600 px-5 py-3 text-sm font-black text-white">
              Download PDF <FaDownload />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white/84 hover:border-red-500">
              Start a project <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <motion.div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}`} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <p className="text-xs font-black uppercase tracking-[0.28em] text-red-400">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-6xl">{title}</h2>
      {copy && <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">{copy}</p>}
    </motion.div>
  );
}

function BrandSection({ onOpenImage }) {
  return (
    <section id="brands" className="bg-black px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Portfolio for brand designs"
          title="Brand identities shown as living visual systems."
          copy="The logo comes first, then the supporting brand pages, campaign designs and mockup-style visuals that show how the brand can live in public."
        />

        <div className="space-y-16">
          {brandProjects.map((brand, brandIndex) => (
            <motion.article key={brand.name} className="grid gap-5 lg:grid-cols-[320px_1fr]" variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} transition={{ delay: brandIndex * 0.06 }}>
              <div className="sticky top-8 h-fit rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
                <button onClick={() => onOpenImage({ images: [brand.logo], index: 0, title: `${brand.name} logo` })} className="group block overflow-hidden rounded-2xl bg-black">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" decoding="async" />
                </button>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-red-400">Brand {brandIndex + 1}</p>
                <h3 className="mt-2 text-2xl font-black">{brand.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{brand.description}</p>
                <p className="mt-4 rounded-full bg-red-600/12 px-4 py-2 text-xs font-black text-red-300">{brand.tone}</p>
              </div>

              <PinterestGrid images={brand.pages} title={brand.name} onOpenImage={onOpenImage} offset={brandIndex} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinterestGrid({ images, title, onOpenImage, offset = 0 }) {
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
            <span className="text-xs font-black uppercase tracking-wider text-white/58">{title}</span>
            <FaExpand className="text-xs text-red-400 opacity-0 transition group-hover:opacity-100" />
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function LogoSection({ onOpenImage }) {
  return (
    <section id="logos" className="relative overflow-hidden bg-[#070707] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(220,38,38,.12),transparent_35%,rgba(255,255,255,.04))]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Logo showcase"
          title="Logo-first thinking for brands that need memory."
          copy="A logo should be the first signal. This wall keeps the visuals compact and moving like a curated inspiration board."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {logoWall.map((image, index) => (
            <motion.button
              key={`${image}-${index}`}
              onClick={() => onOpenImage({ images: logoWall, index, title: "Logo showcase" })}
              className="group overflow-hidden rounded-[24px] border border-white/10 bg-black p-3"
              initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.4 : -1.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (index % 6) * 0.045, duration: 0.5 }}
            >
              <img src={image} alt={`Logo sample ${index + 1}`} className="aspect-square w-full rounded-[18px] object-cover grayscale transition duration-500 group-hover:grayscale-0" loading="lazy" decoding="async" />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FlyersSection({ onOpenImage }) {
  return (
    <section id="flyers" className="bg-black px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Flyer design system"
          title="Event, church, school, business and birthday visuals."
          copy="Each category is arranged like a Pinterest board, so the viewer can quickly feel the variety without the page becoming crowded."
        />
        <div className="space-y-20">
          {flyerGroups.map((group, index) => (
            <motion.div key={group.title} variants={fade} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
              <div className="mb-6 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-red-400">Category {index + 1}</p>
                  <h3 className="mt-2 text-3xl font-black">{group.title}</h3>
                </div>
                <p className="max-w-md text-sm leading-6 text-white/58">{group.subtitle}</p>
              </div>
              <PinterestGrid images={group.images.filter(Boolean)} title={group.title} onOpenImage={onOpenImage} offset={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsRibbon() {
  return (
    <section className="bg-[#050505] px-5 py-14 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm font-black text-white/78"
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

function ContactSection() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <section id="contact" className="bg-[#d90404] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/72">Ready when you are</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Let us build visuals that make the brand feel unforgettable.
          </h2>
        </div>
        <div className="space-y-3">
          <a className="flex items-center gap-4 rounded-2xl bg-black/18 p-4 font-black text-white backdrop-blur transition hover:bg-black/28" href={`mailto:${CONTACT.email}`}>
            <FaEnvelope /> {CONTACT.email}
          </a>
          <a className="flex items-center gap-4 rounded-2xl bg-black/18 p-4 font-black text-white backdrop-blur transition hover:bg-black/28" href={`tel:${CONTACT.phone}`}>
            <FaPhoneAlt /> {CONTACT.phone}
          </a>
          <a className="flex items-center gap-4 rounded-2xl bg-black p-4 font-black text-white transition hover:bg-white hover:text-black" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp project inquiry
          </a>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              [CONTACT.linkedin, FaLinkedin, "LinkedIn"],
              [CONTACT.instagram, FaInstagram, "Instagram"],
              [CONTACT.github, FaGithub, "GitHub"],
              [CONTACT.behance, FaBehance, "Behance"],
            ].map(([href, Icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="grid h-12 place-items-center rounded-2xl border border-white/25 text-white transition hover:bg-white hover:text-red-600" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl text-sm font-bold text-white/70">&copy; {year} Samson Badejo / Samcodex. Brand design, logo design, flyer design and video editing.</p>
    </section>
  );
}

function ImageViewer({ imageState, setImageState }) {
  if (!imageState) return null;
  const { images, index, title } = imageState;
  const move = (step) => setImageState({ ...imageState, index: (index + step + images.length) % images.length });

  return (
    <AnimatePresence>
      <motion.div className="fixed inset-0 z-[120] grid place-items-center bg-black/92 p-4 backdrop-blur-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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

export default function App() {
  const [loading, setLoading] = useState(true);
  const [imageState, setImageState] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-black">
      <Loader visible={loading} />
      <FloatingNav />
      <MobileTopNav />
      <RedHero />
      <AboutSection />
      <SkillsRibbon />
      <BrandSection onOpenImage={setImageState} />
      <LogoSection onOpenImage={setImageState} />
      <FlyersSection onOpenImage={setImageState} />
      <ContactSection />
      <ImageViewer imageState={imageState} setImageState={setImageState} />
    </div>
  );
}
