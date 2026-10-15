import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#670007] text-[#F9F6EA] px-6 py-4 shadow-md border-b-4 border-[#988130]">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 font-display text-2xl tracking-wider hover:text-[#F7BECA] transition">
          <Sparkles className="w-6 h-6 text-[#FDE0A5]" />
          <span>STUDENT.PORTFOLIO</span>
        </Link>

        <div className="flex gap-4 md:gap-6 font-semibold text-sm md:text-base">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1 ${
                  isActive
                    ? 'bg-[#F9F6EA] text-[#670007] font-bold shadow-sm'
                    : 'hover:bg-[#988130] hover:text-white'
                }`}
              >
                {isActive && <Heart className="w-4 h-4 fill-current text-[#670007]" />}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}