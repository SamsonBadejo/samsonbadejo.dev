import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const NavLinks = [
  { name: "Home", link: "home" },
  { name: "Projects", link: "projects" },
  { name: "Skills", link: "skills" },
  { name: "Certificate", link: "certificate" },
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/70 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-white font-bold text-2xl">
          B.Samson <span className="text-[red]">Portfolio</span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NavLinks.map((link, i) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ScrollLink
                to={link.link}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-white hover:text-[red] font-medium transition-colors duration-200"
              >
                {link.name}
              </ScrollLink>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[red] hover:bg-[#690202] px-5 py-2 rounded-lg text-white font-semibold shadow-lg"
          >
            WELCOME{" "}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpenMenu(true)}
          className="text-3xl md:hidden text-[red]"
        >
          <TiThMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-black text-white shadow-xl z-50 flex flex-col p-6"
          >
            <button
              onClick={() => setOpenMenu(false)}
              className="text-3xl self-end mb-6 text-[red]"
            >
              <IoClose />
            </button>

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-[red] hover:bg-[#690202] text-white font-medium px-5 py-2 rounded-lg text-center shadow-md"
              >
                WELCOME
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
