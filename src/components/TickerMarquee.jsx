import React from 'react';

export default function TickerMarquee({ text = "LOREM IPSUM 🐝 BANANINI 🐝 PATATA 🐝 BUMBASTIC", bg = "#FFD4DD", color = "#64030B" }) {
  return (
    <div className="w-full py-3 overflow-hidden border-y-2 border-[#670007]" style={{ backgroundColor: bg, color: color }}>
      <div className="animate-marquee whitespace-nowrap text-2xl font-serif-title tracking-widest uppercase">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
}