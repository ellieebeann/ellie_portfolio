import React from 'react';

export default function TickerMarquee() {
  return (
    <div className="bg-[#670007] text-[#F9F6EA] py-3 overflow-hidden border-b-4 border-[#670007] relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display text-lg md:text-xl tracking-widest uppercase">
        <span>REACT.JS ● JAVA ANDROID ● C# UNITY ● SUPABASE ● SQL DATABASE ● TAILWIND CSS ● CISCO NETACAD ●</span>
        <span>REACT.JS ● JAVA ANDROID ● C# UNITY ● SUPABASE ● SQL DATABASE ● TAILWIND CSS ● CISCO NETACAD ● </span>
      </div>
    </div>
  );
}