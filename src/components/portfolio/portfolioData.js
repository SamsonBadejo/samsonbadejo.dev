import {
  FaBriefcase,
  FaCamera,
  FaEnvelope,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLayerGroup,
  FaLinkedin,
  FaPalette,
  FaVideo,
} from "react-icons/fa";
import { SiAdobephotoshop, SiCanva, SiCoreldraw } from "react-icons/si";
import ReelOne from "../../assets/100TMC .mp4";
import ReelTwo from "../../assets/WhatsApp Video 2025-07-12 at 12.16.09_fcf00cac.mp4";

export const CONTACT = {
  email: "Samsonbadejo44@gmail.com",
  phone: "09155278013",
  whatsapp: "https://wa.me/2349155278013",
  linkedin: "https://www.linkedin.com/in/samson-badejo",
  instagram: "https://www.instagram.com/samcodex/",
  // github: "https://github.com/SamsonBadejo",
};

const ShortForm1 = "https://res.cloudinary.com/dcfqoupal/video/upload/v1784670580/Idify_shortform_video_udzscp.mp4"
const ShortForm2 = "https://res.cloudinary.com/dcfqoupal/video/upload/v1784671297/Idify_shortform_video_2_fhmo6z.mp4"
const Motion1 = "https://res.cloudinary.com/dcfqoupal/video/upload/v1784671021/Modest-lade_Bio_refresh_pmhg4f.mp4"

export const navItems = [
  { id: "top", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaBriefcase },
  { id: "brands", label: "Brands", icon: FaLayerGroup },
  { id: "logos", label: "Logos", icon: FaPalette },
  { id: "flyers", label: "Flyers", icon: FaCamera },
  { id: "videos", label: "Videos", icon: FaVideo },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

export const skills = [
  { name: "Canva", icon: SiCanva },
  { name: "CorelDraw", icon: SiCoreldraw },
  { name: "Photoshop", icon: SiAdobephotoshop },
  { name: "Premiere Pro", icon: FaVideo },
  { name: "CapCut", icon: FaVideo },
  { name: "Brand Design", icon: FaPalette },
];

export const videoWorks = [
  // { title: "Brand Reel", type: "Brand content", src: ShortForm1 },
  { title: "Short Form Edit", type: "Social media", src: ShortForm1 },
  { title: "Short Form Edit", type: "Social media", src: ShortForm2 },
  { title: "Motion Edit", type: "Event story", src: Motion1 },
  // { title: "Before / After Edit", type: "Editing proof", src: ReelOne },
];

export const socialLinks = [
  [CONTACT.linkedin, FaLinkedin, "LinkedIn"],
  [CONTACT.instagram, FaInstagram, "Instagram"],
  // [CONTACT.github, FaGithub, "GitHub"],
];

export const fade = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};
