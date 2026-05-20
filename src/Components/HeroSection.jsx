import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col items-center justify-center pb-10 px-6 overflow-hidden bg-[#020617]">
      {/* Grid background for texture */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-center ">
        {/* Greeting */}
        <p className="text-gray-400 text-lg md:text-2xl mb-4 tracking-[0.2em] font-light uppercase">
          Hello, I'm
        </p>

        {/* Main Name */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2A8FEA] to-white text-4xl sm:text-5xl md:text-6xl lg:text-[55px] xl:text-[65px] font-extrabold uppercase leading-[1.1] mb-6 tracking-tighter drop-shadow-2xl select-none">
          Prince Chavda
        </h1>
        <TypeAnimation
          className="font-[Montserrat] text-2xl max-[420px]:text-xl sm:text-3xl md:text-4xl py-1 mb-10 text-[#2A8FEA] border-b-2 border-gray-500"
          sequence={[
            "Full Stack Developer",
            2000,
            "React Developer",
            2000,
            "MERN Stack Developer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed px-4 sm:px-12 max-w-2xl mx-auto mb-5">
          I build clean, responsive, and high-performance web applications. I am
          passionate about writing excellent code and constantly learning new
          technologies.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#2A8FEA] text-white font-bold text-sm sm:text-base tracking-wide rounded-full overflow-hidden transition-all duration-300 transform"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-500 ease-out" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-medium text-sm sm:text-base tracking-wide rounded-full hover:border-[#2A8FEA] hover:text-[#2A8FEA] hover:bg-[#2A8FEA]/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-gray-500 text-[10px] tracking-widest uppercase mb-2">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#2A8FEA] absolute top-0 left-0 animate-[bounce_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
