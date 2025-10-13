import Img1 from "../assets/Macbook-Air-M2-1280x832 (2).png";
import Img2 from "../assets/Macbook-Air-M2-1280x832 (4).png";
import Img3 from "../assets/Macbook-Air-M2-1280x832.png";
import Img4 from "../assets/Macbook-Air-M2-1280x832 (5).png";

const projectData = [
  {
    name: "HouseofDavid Rccg (Church) ",
    img: Img1,
    desc: "A modern, responsive Church Website built with React.js & Tailwind CSS. Features include secure login, admin dashboard, MongoDB backend, and smooth Framer Motion animations. Designed for easy content management and seamless user experience across devices.",
    builtWith: ["React", "Node.js", "MongoDB", "Responsive Design"],
    link: "https://rccghouseofdavid.vercel.app/",
    github: "https://github.com/SamsonBadejo/Hodlive_frontend.git",
  },
  {
    name: "A Gym Website (Gymmer) ",
    img: Img2,
    desc: "GYMMER Demo website showcases a modern, responsive design for a fitness platform. Features include a dynamic client testimonial carousel, smooth animations, and a mobile-friendly interface. It highlights GYMMER's engaging user experience, ideal for fitness businesses seeking a professional online presence.",
    builtWith: ["React", "Framer Motion", "Aos animation", "Responsive Design"],
    link: "https://gymmer-eight.vercel.app/",
    github: "https://github.com/SamsonBadejo/GYMMER.git",
  },
  {
    name: "RB-RealEstateLandingPage",
    img: Img3,
    desc: "A professionally designed real estate landing page using only **HTML**, **CSS**, and **JavaScript**. This project is perfect for showcasing property listings, agents, and services — with a responsive layout and interactive components like carousels and scroll animations.",
    builtWith: ["Html", "Css", "Javascript, Aos, Swiperjs"],
    link: "https://rb-real-estate-landing-page.vercel.app/",
    github: "https://github.com/SamsonBadejo/RB-RealEstateLandingPage.git",
  },
  {
    name: "Tailmen- Tailoring Page ",
    img: Img4,
    desc: "A professionally designed real estate landing page using only **HTML**, **CSS**, and **JavaScript**. This project is perfect for showcasing property listings, agents, and services — with a responsive layout and interactive components like carousels and scroll animations.",
    builtWith: ["React", "Tailwindcss", "Swiperjs", "Framer Motion"],
    link: "https://tailmen.vercel.app/",
  },
];

const skillData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 98 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 92 },
      { name: "Vite", level: 95 },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 87 },
      { name: "REST APIs", level: 93 },
      { name: "Mongoose", level: 90 },
    ],
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 80 },
    ],
  },
];

export { projectData, skillData };
