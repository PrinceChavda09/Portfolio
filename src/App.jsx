import React, { useEffect } from "react";
import Header from "./Components/Header";
import AboutSection from "./Components/AboutSection";
import HeroSection from "./Components/HeroSection";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Lenis from "lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}
