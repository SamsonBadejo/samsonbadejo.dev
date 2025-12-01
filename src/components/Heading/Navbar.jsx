import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const NavLinks = [
  { name: "Home", link: "home" },
  { name: "Web Projects", link: "projects" },
  { name: "Skills", link: "skills" },
  { name: "Certificate", link: "certificate" },
  { name: "Graphics Design", link: "graphics" }, // new link added
  { name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-white font-bold text-2xl">
          B.Samson <span className="text-[red]">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white">
          {NavLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.link}
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer hover:text-[red] transition-colors"
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="text-3xl md:hidden text-[red] focus:outline-none"
        >
          <TiThMenu />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* Dimmed Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-[99]"
              onClick={() => setOpenMenu(false)}
            />

            {/* Sliding Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-3/4 max-w-xs h-full bg-black text-white shadow-2xl z-[100] flex flex-col p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpenMenu(false)}
                className="text-3xl self-end mb-8 text-[red] focus:outline-none"
              >
                <IoClose />
              </button>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 text-lg">
                {NavLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.link}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setOpenMenu(false)}
                    className="cursor-pointer hover:text-[red] transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-10 bg-[red] hover:bg-[#690202] text-white font-medium px-5 py-3 rounded-lg text-center shadow-md"
              >
                WELCOME
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
