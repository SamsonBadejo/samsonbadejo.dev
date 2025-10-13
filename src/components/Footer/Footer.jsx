import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  // Show back-to-top button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 px-6 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-gray-800 pt-10">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-white">
            B.Samson<span className="text-[red]"> Portfolio</span>
          </h2>
          <p className="text-gray-400 mt-3 max-w-sm">
            Full Stack Developer passionate about creating innovative web
            solutions that make a difference. Let’s build something amazing
            together.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-sm space-y-3 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaEnvelope className="text-[red]" />
            <a
              href="mailto:zwitsam8@gmail.com"
              className="hover:text-[red] transition"
            >
              zwitsam8@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <FaPhoneAlt className="text-[red]" />
            <p className="hover:text-[red] transition">+234 810 951 4251</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/SamsonBadejo"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[red] transition"
          >
            <FaGithub />
          </a>
          <a
            href="www.linkedin.com/in/samson-badejo"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[red] transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Samcod3x. All rights reserved.
      </div>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[red] hover:bg-[#023c5e] text-white p-3 rounded-full shadow-lg transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
