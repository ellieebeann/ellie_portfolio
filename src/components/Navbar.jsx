import React from 'react';
import beeIcon from '../assets/bee-icon.png';

export default function Navbar({ scrolled }) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2 bg-[#F9F6EA]/90 backdrop-blur-md border-b-2 border-[#670007] shadow-sm' : 'py-4 bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-[#670007] p-1.5 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-retro-sm overflow-hidden">
            <img src={beeIcon} alt="Bee Icon" className="w-full h-full object-contain" />
          </div>
          <span className="font-display text-xl md:text-2xl text-[#670007] tracking-wider">
            ELLYSSA REGODON
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 font-heading font-bold text-sm">
          <a href="#about" className="hover:text-[#850009] transition-colors">ABOUT</a>
          <a href="#works" className="hover:text-[#850009] transition-colors">PROJECTS</a>
          <a href="#certs" className="hover:text-[#850009] transition-colors">CERTS & HONORS</a>
          <a href="#contact" className="hover:text-[#850009] transition-colors">CONTACT</a>
        </nav>

        <a href="#contact" className="px-4 py-2 bg-[#F7BECA] text-[#670007] border-2 border-[#670007] rounded-full font-heading font-bold text-xs md:text-sm hover:bg-[#670007] hover:text-[#F9F6EA] transition-all shadow-retro-sm">
          HIRE ME!
        </a>
      </div>
    </header>
  );
}