import React from "react";
import { FaDownload } from "react-icons/fa";
import CVFile from "../../assets/my cv badejo samson.pdf";
import CvDesigner from "../../assets/CV Samson Badejo.pdf";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-black text-white py-20 px-6 flex flex-col items-center"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl font-black text-white text-center mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        My Resume
      </motion.h1>
      <p
        className="text-gray-300 text-lg text-center mb-10 max-w-3xl"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        A quick look into my professional background — combining front-end
        creativity and back-end logic to build impactful web solutions. Download
        my complete CV below for detailed experience, projects, and
        certifications.
      </p>

      {/* CV Preview Section */}
      <div className="flex flex-col gap-10">
        <div
          className="bg-[#0b0b0b] rounded-2xl shadow-lg p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          {/* Left Side */}
          <div data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-2xl text-[red] font-semibold mb-4">
              Experience Highlights
            </h3>
            <ul className="text-gray-300 space-y-3 text-sm">
              <li>
                💼 Full Stack Developer — Freelance (React, Node.js, MongoDB)
              </li>
              <li>
                ⚙️ Built scalable APIs and integrated cloud storage (Cloudinary)
              </li>
              <li>🎨 Designed responsive interfaces using Tailwind CSS</li>
              <li>
                🧠 Passionate about AI-driven and interactive web experiences
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div data-aos="fade-left" data-aos-delay="500">
            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Tailwind CSS",
                "REST API",
                "GitHub",
                "Vite",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-white text-red-900 px-3 py-1 rounded-full"
                  data-aos="zoom-in"
                  data-aos-delay={600 + i * 80}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="bg-[#0b0b0b] rounded-2xl shadow-lg p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          {/* Left Side */}
          <div data-aos="fade-right" data-aos-delay="400">
            <h3 className="text-2xl text-[red] font-semibold mb-4">
              Graphics & Video Editing Experience
            </h3>

            <ul className="text-gray-300 space-y-3 text-sm">
              <li>
                🎨 I create clean and attractive graphics for social media and
                brands.
              </li>
              <li>
                🖼️ I design flyers, posters, logos, and simple brand materials.
              </li>
              <li>🎥 I edit short videos, reels, ads, and YouTube content.</li>
              <li>
                ✂️ I work with transitions, cuts, text animations, and basic
                effects.
              </li>
              <li>
                📸 I make visuals that look neat, modern, and easy to
                understand.
              </li>
              <li>⚡ I deliver fast and pay attention to small details.</li>
            </ul>
          </div>

          {/* Right Side */}
          <div data-aos="fade-left" data-aos-delay="500">
            <h3 className="text-2xl font-semibold mb-4">Core Skills</h3>

            <div className="flex flex-wrap gap-2 text-sm">
              {[
                "Graphic Design",
                "Video Editing",
                "Flyer Design",
                "Simple Logo Design",
                "CapCut",
                "Premiere Pro",
                "CorelDRAW",
                "Canva",
                "Reels Editing",
                "Social Media Designs",
              ].map((skill, i) => (
                <span
                  key={i}
                  className="bg-white text-red-900 px-3 py-1 rounded-full"
                  data-aos="zoom-in"
                  data-aos-delay={600 + i * 80}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

   {/* Download Buttons */}
<div className="flex flex-col md:flex-row gap-6 justify-center mt-10">
  {/* Software Developer CV */}
  <div className="flex flex-col items-center">
    <span className="text-white font-semibold mb-2">Software Developer</span>
    <a
      href={CVFile}
      download="Badejo_Samson_CV_Software_Developer.pdf"
      className="inline-flex items-center gap-3 bg-[red] hover:bg-[#5f0202] text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md"
      data-aos="fade-up"
      data-aos-delay="800"
    >
      <FaDownload /> Download CV
    </a>
  </div>

  {/* Graphics Designer CV */}
  <div className="flex flex-col items-center">
    <span className="text-white font-semibold mb-2">Graphics Designer</span>
    <a
      href={CvDesigner}
      download="Badejo_Samson_CV_Graphics_Designer.pdf"
      className="inline-flex items-center gap-3 bg-[red] hover:bg-[#5f0202] text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md"
      data-aos="fade-up"
      data-aos-delay="900"
    >
      <FaDownload /> Download CV
    </a>
  </div>
</div>

    </section>
  );
};

export default Resume;
