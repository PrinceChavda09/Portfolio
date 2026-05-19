import React from "react";

export default function AboutSection() {
  return (
    <section
      id="AboutSection"
      className="relative  bg-[#020617] overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#2A8FEA] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#1E75C4] rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <p className="text-[#2A8FEA] font-semibold tracking-[0.2em] uppercase mb-2 text-sm md:text-base">
            Get to know
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white capitalize tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A8FEA] to-[#60A5FA]">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#2A8FEA] mt-6 rounded-full shadow-[0_0_15px_rgba(42,143,234,0.5)]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto max-w-6xl">
          {/* Left Column: Content */}
          <div className="flex flex-col text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Turning good ideas into{" "}
              <span className="text-[#2A8FEA]">real</span> and working{" "}
              <span className="text-[#2A8FEA]">web applications.</span>
            </h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Hi, I'm Prince Chavda. I'm currently finishing my computer
              applications degree while building real-world projects. I am a
              full-stack developer, which means I build both the parts of a
              website you see, and the hidden logic that makes it all work
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I love the process of turning a blank screen into a fully
              functioning website. I have completed a professional internship
              where I learned how to build software the right way—from planning
              the first steps to putting the final project live on the internet.
            </p>
          </div>

          {/* Right Column: Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            <div className="bg-[#050e29] border border-[#2A8FEA]/20 p-6 rounded-2xl shadow-[0_0_15px_rgba(42,143,234,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(42,143,234,0.15)] transition-all duration-300">
              <span className="text-[#2A8FEA] text-xs mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                Name
              </span>
              <span className="text-white font-semibold text-lg block truncate">
                Prince Chavda
              </span>
            </div>

            <div className="bg-[#050e29] border border-[#2A8FEA]/20 p-6 rounded-2xl shadow-[0_0_15px_rgba(42,143,234,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(42,143,234,0.15)] transition-all duration-300">
              <span className="text-[#2A8FEA] text-xs mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Email
              </span>
              <span
                className="text-white font-semibold text-[15px] block truncate"
                title="princechavada897@gmail.com"
              >
                princechavada897
                <br />
                @gmail.com
              </span>
            </div>

            <div className="bg-[#050e29] border border-[#2A8FEA]/20 p-6 rounded-2xl shadow-[0_0_15px_rgba(42,143,234,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(42,143,234,0.15)] transition-all duration-300">
              <span className="text-[#2A8FEA] text-xs mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Role
              </span>
              <span className="text-white font-semibold text-lg block truncate">
                Full-Stack Dev
              </span>
            </div>

            <div className="bg-[#050e29] border border-[#2A8FEA]/20 p-6 rounded-2xl shadow-[0_0_15px_rgba(42,143,234,0.05)] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(42,143,234,0.15)] transition-all duration-300">
              <span className="text-[#2A8FEA] text-xs mb-3 uppercase tracking-widest font-bold flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                Phone
              </span>
              <span className="text-white font-semibold text-lg block truncate">
                +91 7859818231
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
