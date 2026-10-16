import React from 'react';
import { Sparkles, Check, Copy } from 'lucide-react';
import heroImage from '../assets/ellie2.jpg';

export default function Hero({ handleCopyEmail, copiedEmail }) {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gingham-pink relative border-b-4 border-[#670007]">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-[#670007] rounded-full text-xs font-bold font-heading text-[#670007] shadow-retro-sm">
              <Sparkles size={14} className="text-[#670007] animate-spin" />
              <span>3-TIME DEAN'S LISTER • BS INFORMATION TECHNOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display text-[#670007] leading-tight tracking-wide">
              MA. ELLYSSA BIANCA <span className="underline decoration-wavy decoration-[#670007]">REGODON</span>
            </h1>

            <p className="text-base sm:text-lg text-[#670007] font-medium max-w-xl leading-relaxed">
              Aspiring IT Intern & Developer skilled in React, Java, C#, Supabase, and Android Studio. Passionate about web/mobile development, database architecture, and interactive simulation games!
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#works" className="px-6 py-3.5 bg-[#670007] text-[#F9F6EA] font-heading font-bold text-sm md:text-base rounded-2xl border-2 border-[#670007] hover:bg-[#850009] shadow-retro">
                VIEW ACADEMIC WORKS
              </a>
              <button onClick={handleCopyEmail} className="px-6 py-3.5 bg-white text-[#670007] font-heading font-bold text-sm md:text-base rounded-2xl border-2 border-[#670007] hover:bg-[#FDE0A5] shadow-retro flex items-center gap-2">
                {copiedEmail ? <Check size={18} /> : <Copy size={18} />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FDE0A5] border-2 border-[#670007] rounded-full flex items-center justify-center font-display text-xs text-center p-2 rotate-12 shadow-retro-sm z-20">
                DEAN'S LISTER ⭐ GWA: 1.217
              </div>

              <div className="bg-white p-5 md:p-6 rounded-3xl border-4 border-[#670007] shadow-retro-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#670007] bg-[#D9E7FF] mb-4 flex items-center justify-center">
                  <img src={heroImage} alt="Ellie Regodon Profile" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3 bg-[#F9F6EA]/90 backdrop-blur p-3 rounded-xl border border-[#670007] text-center">
                    <p className="font-display text-[#670007] text-base">BULACAN STATE UNIVERSITY</p>
                    <p className="font-sans text-xs text-[#670007] font-semibold">BSIT Candidate (Graduation: Aug 2027)</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold font-heading text-[#670007]">
                  <span>LOCATION: MALOLOS, BULACAN</span>
                  <span>SEEKING IT INTERNSHIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}