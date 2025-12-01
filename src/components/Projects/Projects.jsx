import React from "react";
import { FaGithub } from "react-icons/fa";
import { projectData } from "../projectData";
import { motion } from "framer-motion";


const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="bg-black text-white py-16 px-6"
      data-aos="fade-up"
    >
      <motion.h1
        className="text-4xl sm:text-6xl font-black text-white text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Recent Projects
      </motion.h1>

      <p
        className="text-center text-md mb-12 text-gray-300 max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Take a look at some of my standout projects — each crafted with passion,
        creativity, and clean code to bring ideas to life. <br />
        From intuitive user interfaces to scalable backend systems, every
        project reflects my drive to build meaningful and efficient web
        experiences.
      </p>

      {/* Grid layout */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        data-aos="zoom-in-up"
        data-aos-delay="400"
      >
        {projectData.map((i, idx) => (
          <div
            key={idx}
            className="bg-red-950 rounded-2xl overflow-hidden shadow-md hover:scale-105 hover:shadow-[red] transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={idx * 150}
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={i.img}
                alt={i.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{i.name}</h2>
              <p className="text-gray-400 text-sm">{i.desc}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {i.builtWith.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white text-red-900 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-3">
                <a
                  href={i.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-[red] hover:bg-[#6b0303] px-4 py-2 rounded-md font-medium transition-all"
                >
                  Live Demo
                </a>

                <a
                  href={i.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <FaGithub size={20} />
                  <span className="text-sm">Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
