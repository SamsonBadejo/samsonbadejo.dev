import { useMemo } from "react";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CONTACT, socialLinks } from "./portfolioData";

export default function ContactSection() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <section id="contact" className="bg-[#d90404] px-5 py-24 text-white md:pl-24 lg:px-8 lg:pl-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">Ready when you are</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-6xl">
            Let us build visuals that make the brand feel unforgettable.
          </h2>
        </div>
        <div className="space-y-3">
          <a className="flex items-center gap-4 rounded-2xl bg-black/20 p-4 font-black text-white backdrop-blur transition hover:bg-black/30" href={`mailto:${CONTACT.email}`}>
            <FaEnvelope /> {CONTACT.email}
          </a>
          <a className="flex items-center gap-4 rounded-2xl bg-black/20 p-4 font-black text-white backdrop-blur transition hover:bg-black/30" href={`tel:${CONTACT.phone}`}>
            <FaPhoneAlt /> {CONTACT.phone}
          </a>
          <a className="flex items-center gap-4 rounded-2xl bg-black p-4 font-black text-white transition hover:bg-white hover:text-black" href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
            <FaWhatsapp /> WhatsApp project inquiry
          </a>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {socialLinks.map(([href, Icon, label]) => (
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
