import React, { useState, useEffect } from "react";
// import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [
      "home",
      "AboutSection",
      "skills",
      "projects",
      "contact",
    ];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      id="navbar"
      className="w-full backdrop-blur-3xl fixed top-0 left-0 z-50 shadow-lg text-white p-4 border-b border-gray-900"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src={logo} alt="logo" className="h-26 w-32 object-fit" /> */}
          <span className=" font-extrabold text-3xl tracking-[3px]  text-white font-['Poppins']">
            PC
          </span>{" "}
        </div>

        {/* Desktop & Tablet Links (Hidden on Mobile/Tablet, visible on Desktop) */}
        <div className="hidden lg:flex items-center gap-12 font-medium">
          <a
            href="#home"
            className={`relative pb-1 transition-colors duration-300 ${
              activeSection === "home"
                ? "text-[#2A8FEA] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Home
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8FEA] transition-transform duration-300 origin-left ${
                activeSection === "home" ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
          <a
            href="#AboutSection"
            className={`relative pb-1 transition-colors duration-300 ${
              activeSection === "AboutSection"
                ? "text-[#2A8FEA] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            About
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8FEA] transition-transform duration-300 origin-left ${
                activeSection === "AboutSection" ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
          <a
            href="#skills"
            className={`relative pb-1 transition-colors duration-300 ${
              activeSection === "skills"
                ? "text-[#2A8FEA] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Skills
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8FEA] transition-transform duration-300 origin-left ${
                activeSection === "skills" ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
          <a
            href="#projects"
            className={`relative pb-1 transition-colors duration-300 ${
              activeSection === "projects"
                ? "text-[#2A8FEA] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Projects
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8FEA] transition-transform duration-300 origin-left ${
                activeSection === "projects" ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
          <a
            href="#contact"
            className={`relative pb-1 transition-colors duration-300 ${
              activeSection === "contact"
                ? "text-[#2A8FEA] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Contact
            <span
              className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#2A8FEA] transition-transform duration-300 origin-left ${
                activeSection === "contact" ? "scale-x-100" : "scale-x-0"
              }`}
            />
          </a>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile & Tablet, Hidden on Desktop) */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu (Shows when button is clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#020617] flex flex-col items-center gap-6 py-6 border-t border-gray-800 z-50 animate-[slideDown_0.3s_ease-out] shadow-2xl">
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${
              activeSection === "home"
                ? "text-[#2A8FEA] font-bold"
                : "hover:text-[#2A8FEA]"
            }`}
          >
            Home
          </a>
          <a
            href="#AboutSection"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${
              activeSection === "AboutSection"
                ? "text-[#2A8FEA] font-bold"
                : "hover:text-[#2A8FEA]"
            }`}
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${
              activeSection === "skills"
                ? "text-[#2A8FEA] font-bold"
                : "hover:text-[#2A8FEA]"
            }`}
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${
              activeSection === "projects"
                ? "text-[#2A8FEA] font-bold"
                : "hover:text-[#2A8FEA]"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={`transition-colors ${
              activeSection === "contact"
                ? "text-[#2A8FEA] font-bold"
                : "hover:text-[#2A8FEA]"
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
