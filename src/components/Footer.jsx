import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#670007] text-[#F9F6EA] py-8 text-center border-t-4 border-[#988130]">
      <p className="font-display text-lg tracking-wider">MADE WITH 💖 BY A STUDENT DEVELOPER</p>
      <p className="text-xs text-[#FDE0A5] mt-1">© {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}