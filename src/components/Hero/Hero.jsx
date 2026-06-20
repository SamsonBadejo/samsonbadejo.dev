import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import HeroBgv from "../../assets/Blue background with focus spot light.jpeg";
import PhoneShowcase from "../PhoneShowcase/PhoneShowcase";
import Sammie from "../../assets/Sammie.png";

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
      className="relative min-h-screen flex flex-col md:flex-row gap-10 md:gap-20 px-4 py-5 items-center justify-center text-white text-center overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBgv})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/95"></div>
        {/* Main Content */}
        <div className="relative max-w-7xl z-10 px-6 lg:mt-8 md:mt-0 mt-15  ">
          <h1
            className="text-[33px] md:text-7xl lg:text-[100px] font-extrabold leading-tight mb-4"
            // data-aos="fade-down"
          >
            HI, I’M <span className="text-[red]">SAMSON BADEJO</span>
          </h1>

          <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col justify-around">
            {/* section 1 */}
            <div className="w-100 mt-10">
              <h2
                className="text-xl md:text-2xl font-semibold text-white mb-6 text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Graphics Designer | Full Stack Developer | Graphics Designer |
                Video Editor | Problem Solver
              </h2>

              

              <p
                className="text-gray-100 text-lg mb-10 leading-relaxed text-left"
                // data-aos="zoom-in"
                // data-aos-delay="400"
              >
                I design clean, engaging visuals for brands and Social Media
                ,and with strong experience in
                <span className="text-[red] font-semibold"> PHOTOSHOP</span>,
                <span className="text-[red] font-semibold"> CORELDRAW</span> and
                <span className="text-[red] font-semibold"> CANVA</span>,
                including high-quality photo retouching.
                <br />
                <br />
                <p>
                  As a Full Stack Developer, I build modern, scalable web
                  applications using
                  <span className="text-[red] font-semibold"> REACT</span>, and
                  <span className="text-[red] font-semibold"> NODE.JS</span>, ,
                  focusing on performance and seamless user experience.
                </p>
              </p>
              <div>
                {/* Buttons */}

                <div
                  className="flex flex-row flex-wrap  gap-5"
                  // data-aos="fade-up"
                  // data-aos-delay="600"
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
                    <button className="border-2 border-[white] text-[white] px-8 py-3 rounded-full cursor-pointer font-semibold hover:border-[red] hover:bg-[red] hover:text-white transition">
                      Let’s Connect
                    </button>
                  </ScrollLink>
                </div>
              </div>
            </div>

            {/* section 2 */}
            <div>
              {/* <img
                className="w-100 rounded-full border-[red] border-4
            "
                src={Sammie}
                alt={Sammie}
              /> */}
              <PhoneShowcase />
            </div>
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
      </div>
    
    </section>
  );
};

export default Hero;
