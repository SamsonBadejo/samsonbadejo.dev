import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Heading/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/skills/Skills";
import Resume from "./components/Resume/Resume";
import Certificates from "./components/Certificate/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Divider from "./components/Divider";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true,     // run only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="bg-black text-white scroll-smooth">
      <Navbar />

      <section id="home" data-aos="fade-up">
        <Hero />
      </section>

      <Divider />

      <section id="projects" data-aos="fade-up">
        <Projects />
      </section>

      <Divider />

      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>

      <Divider />

      <section id="resume" data-aos="fade-up">
        <Resume />
      </section>

      <Divider />

      <section id="certificate" data-aos="fade-up">
        <Certificates />
      </section>

      <Divider />

      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      <Divider />

      <Footer />
    </div>
  );
};

export default App;
