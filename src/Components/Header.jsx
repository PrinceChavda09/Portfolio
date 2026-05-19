import React, { useState } from 'react';
// import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full shadow-lg bg-black text-white p-4 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className='flex items-center'>
          {/* <img src={logo} alt="logo" className="h-26 w-32 object-fit" /> */}
          <span className=" font-extrabold text-3xl tracking-[3px] antialiased text-white font-['Syne']">
            PC
          </span>        </div>

        {/* Desktop & Tablet Links (Hidden on Mobile/Tablet, visible on Desktop) */}
        <div className='hidden lg:flex items-center gap-12'>
          <a href="#" className="hover:border-b hover:border-[#2A8FEA] active:text-[#2A8FEA]">Home</a>
          <a href="#" className="hover:border-b hover:border-[#2A8FEA]">About</a>
          <a href="#" className="hover:border-b hover:border-[#2A8FEA]">Skills</a>
          <a href="#" className="hover:border-b hover:border-[#2A8FEA]">Projects</a>
          <a href="#" className="hover:border-b hover:border-[#2A8FEA]">Contact</a>
        </div>

        {/* Hamburger Menu Button (Visible on Mobile & Tablet, Hidden on Desktop) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )
            }
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu (Shows when button is clicked) */}
      {isMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 border-t border-gray-800 z-50'>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d1b88e]">Home</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d1b88e]">About</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d1b88e]">Skills</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d1b88e]">Projects</a>
          <a href="#" onClick={() => setIsMenuOpen(false)} className="hover:text-[#d1b88e]">Contact</a>
        </div>
      )}
    </nav>
  );
}