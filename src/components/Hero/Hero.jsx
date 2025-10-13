import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import HeroBgv from "../../assets/Blue background with focus spot light.jpeg";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBgv})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/95"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-4"
          data-aos="fade-down"
        >
          Hi, I’m <span className="text-[red]">Badejo Samson</span>
        </h1>

        <h2
          className="text-xl md:text-2xl font-semibold text-white mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Full Stack Developer | Creative Thinker | Problem Solver
        </h2>

        <p
          className="text-gray-100 text-lg md:text-xl mb-10 leading-relaxed"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Passionate about building modern, intelligent, and scalable web
          applications with{" "}
          <span className="text-[red] font-semibold">React</span> and{" "}
          <span className="text-[red] font-semibold">Node.js</span>. I love
          crafting digital experiences that blend clean design with solid
          functionality.
        </p>

        {/* Buttons */}

        <div
          className="flex flex-wrap justify-center gap-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={600}
            offset={-50}
            className="cursor-pointer text-white hover:text-[red] font-medium transition-colors duration-200"
          >
            <button className="bg-[red] text-white px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-[#c51212] transition">
              View My Projects
            </button>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={600}
            offset={-40}
            className="cursor-pointer text-white hover:text-[red] font-medium transition-colors duration-200"
          >
            <button className="border-2 border-[red] text-[red] px-8 py-3 rounded-full cursor-pointer font-semibold hover:bg-[red] hover:text-white transition">
              Let’s Connect
            </button>
          </ScrollLink>
        </div>

        {/* Availability Note */}
        <div className="mt-10" data-aos="fade-up" data-aos-delay="800">
          <span className="uppercase text-gray-400 tracking-widest text-sm block mb-1">
            Currently
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[red]">
            Available for Work
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
