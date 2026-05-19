import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 px-6 overflow-hidden bg-[#020617]">
      
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#2A8FEA] rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#1E75C4] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#124C85] rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Grid background for texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-center">
        
        {/* Greeting */}
        <p className="text-gray-400 text-lg md:text-2xl mb-4 tracking-[0.2em] font-light uppercase">
          Hello, I'm
        </p>

        {/* Main Name */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#2A8FEA] to-white text-5xl sm:text-7xl md:text-8xl lg:text-[55px] xl:text-[65px] font-extrabold uppercase leading-[1.1] mb-6 tracking-tighter drop-shadow-2xl select-none">
          Prince Chavda
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          <span className="text-white font-semibold relative inline-block group">
            Full-Stack
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#2A8FEA] transform origin-left scale-x-100 group-hover:scale-x-110 transition-transform duration-300" />
          </span>{' '}
          Development.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a 
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-4 bg-[#2A8FEA] text-white font-bold text-sm sm:text-base tracking-wide uppercase rounded-full overflow-hidden shadow-[0_0_20px_rgba(42,143,234,0.3)] hover:shadow-[0_0_40px_rgba(42,143,234,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" 
                fill="none"
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 h-full w-0 bg-white opacity-20 group-hover:w-full transition-all duration-500 ease-out" />
          </a>

          <a 
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-medium text-sm sm:text-base tracking-wide uppercase rounded-full hover:border-[#2A8FEA] hover:text-[#2A8FEA] hover:bg-[#2A8FEA]/5 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-gray-500 text-[10px] tracking-widest uppercase mb-2">Scroll Down</span>
        <div className="w-[1px] h-12 bg-gray-800 relative overflow-hidden">
          <div className="w-full h-1/2 bg-[#2A8FEA] absolute top-0 left-0 animate-[bounce_2s_infinite]" />
        </div>
      </div>

    </section>
  );
}