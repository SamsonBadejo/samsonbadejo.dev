import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaTools,
  FaServer,
  FaDatabase,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { skillData } from "../projectData";

const categoryIcons = {
  "Frontend Development": <FaReact className="text-[#03517E] text-4xl mb-3" />,
  "Backend Development": <FaServer className="text-red-800 text-4xl mb-3" />,
  "Tools & Technologies": <FaTools className="text-yellow-500 text-4xl mb-3" />,
};

const skillIcons = {
  React: <FaReact className="text-[#61DBFB]" />,
  JavaScript: <FaJsSquare className="text-[#F7DF1E]" />,
  "HTML/CSS": <FaHtml5 className="text-[#E34F26]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38BDF8]" />,
  "Node.js": <FaNodeJs className="text-[#8CC84B]" />,
  "Express.js": <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-[#4DB33D]" />,
  "REST APIs": <FaDatabase className="text-[#03517E]" />,
  Git: <SiGit className="text-[#F1502F]" />,
  GitHub: <SiGithub className="text-gray-300" />,
  Postman: <SiPostman className="text-[#FF6C37]" />,
};

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl font-bold mb-12" data-aos="fade-down">
          My Skills
        </h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillData.map((group, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex flex-col items-start mb-6">
                {categoryIcons[group.category]}
                <h2 className="text-2xl font-semibold border-b-2 border-[white] inline-block pb-1">
                  {group.category}
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {group.skills.map((skill, idx) => (
                  <div key={idx} data-aos="zoom-in" data-aos-delay={idx * 80}>
                    <div className="flex justify-between mb-1 items-center">
                      <div className="flex items-center gap-2">
                        {skillIcons[skill.name]}
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2.5">
                      <div
                        className="bg-[red] h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
