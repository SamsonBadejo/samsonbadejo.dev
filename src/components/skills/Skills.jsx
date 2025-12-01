import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaTools, FaServer, FaDatabase,
  FaJsSquare, FaPalette, FaFilm
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiGit,
  SiGithub, SiCanva, SiAdobe
} from "react-icons/si";
import { skillData } from "../projectData";

const categoryIcons = {
  "Frontend Development": <FaReact className="text-[#61DBFB] text-5xl" />,
  "Backend Development": <FaServer className="text-red-500 text-5xl" />,
  "Tools & Technologies": <FaTools className="text-yellow-400 text-5xl" />,
  "Graphics Design": <FaPalette className="text-pink-400 text-5xl" />,
  "Video Editing": <FaFilm className="text-blue-400 text-5xl" />,
};

const skillIcons = {
  React: <FaReact className="text-[#61DBFB]" />,
  JavaScript: <FaJsSquare className="text-[#F7DF1E]" />,
  "HTML/CSS": <FaHtml5 className="text-[#E34F26]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
  "Brand Design": <FaPalette className="text-pink-400" />,
  "Social Media Design": <FaPalette className="text-blue-400" />,
  "Color Grading": <FaFilm className="text-yellow-300" />,
  "Camera Workflow": <FaFilm className="text-gray-300" />,
  "Node.js": <FaNodeJs className="text-[#8CC84B]" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  "REST APIs": <FaDatabase className="text-[#03517E]" />,
  Git: <SiGit className="text-[#F1502F]" />,
  GitHub: <SiGithub className="text-gray-300" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
  Canva: <SiCanva className="text-[#00C4CC]" />,
  CorelDraw: <FaPalette className="text-[#3FA34D]" />,
  CapCut: <FaFilm className="text-white" />,
  "Premiere Pro": <SiAdobe className="text-[#9999FF]" />,
};

export default function Skills() {
  const [index, setIndex] = useState(0);
  const pageSize = 2;

  const next = () => {
    if (index + pageSize < skillData.length) setIndex(index + pageSize);
  };
  const prev = () => {
    if (index > 0) setIndex(index - pageSize);
  };

  const visibleGroups = skillData.slice(index, index + pageSize);

  return (
    <section id="skills" className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-extrabold mb-12 tracking-wide"
        >
          My Skills
        </motion.h1>

        {/* Slider Controls */}
        <div className="flex justify-between items-center mb-10">
          <button
            onClick={prev}
            className={`px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition ${index === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
          >Prev</button>
          <p className="text-lg opacity-70">Page {index / pageSize + 1} / {Math.ceil(skillData.length / pageSize)}</p>
          <button
            onClick={next}
            className={`px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 transition ${(index + pageSize >= skillData.length) ? "opacity-30 cursor-not-allowed" : ""}`}
          >Next</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {visibleGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-4 mb-6">
                {categoryIcons[group.category]}
                <h2 className="text-2xl font-bold border-b border-white/30 pb-1">{group.category}</h2>
              </div>

              <div className="flex flex-col gap-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2 items-center text-sm font-medium">
                      <div className="flex items-center gap-2">{skillIcons[skill.name]}<span>{skill.name}</span></div>
                      <span>{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className="bg-gradient-to-r from-red-500 to-red-700 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
