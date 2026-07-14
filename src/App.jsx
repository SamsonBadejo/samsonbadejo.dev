import { useEffect, useState } from "react";
import AboutSection from "./components/portfolio/AboutSection";
import BrandSection from "./components/portfolio/BrandSection";
import ContactSection from "./components/portfolio/ContactSection";
import FlyersSection from "./components/portfolio/FlyersSection";
import HeroSection from "./components/portfolio/HeroSection";
import ImageViewer from "./components/portfolio/ImageViewer";
import Loader from "./components/portfolio/Loader";
import LogoSection from "./components/portfolio/LogoSection";
import { FloatingNav, MobileTopNav, QuickContact, ScrollProgress, ThemeToggle } from "./components/portfolio/Navigation";
import SkillsRibbon from "./components/portfolio/SkillsRibbon";
import VideoSection from "./components/portfolio/VideoSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [imageState, setImageState] = useState(null);
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`portfolio-shell min-h-screen scroll-smooth ${theme}`}>
      <Loader visible={loading} />
      <ScrollProgress />
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <FloatingNav />
      <MobileTopNav />
      <QuickContact />
      <HeroSection />
      <AboutSection />
      <SkillsRibbon />
      <BrandSection onOpenImage={setImageState} />
      <LogoSection onOpenImage={setImageState} />
      <FlyersSection onOpenImage={setImageState} />
      <VideoSection />
      <ContactSection />
      <ImageViewer imageState={imageState} setImageState={setImageState} />
    </div>
  );
}
