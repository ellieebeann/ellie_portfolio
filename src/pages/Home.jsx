import React, { useState } from 'react';
import ScallopDivider from '../components/ScallopDivider';
import TickerMarquee from '../components/TickerMarquee';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { Sparkles, ArrowRight, Code, Palette, Heart } from 'lucide-react';

export default function Home({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - Gingham Pink Background */}
      <section className="bg-gingham-pink py-16 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="bg-[#670007] text-[#F9F6EA] px-3 py-1 rounded-full text-xs font-bold tracking-widest inline-flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> WELCOME TO MY CREATIVE SPACE
            </span>
            <h1 className="font-display text-5xl md:text-6xl text-[#670007] leading-tight">
              Hi, I'm <span className="underline decoration-wavy decoration-[#988130]"> Your Name</span> 🎨
            </h1>
            <p className="text-base md:text-lg text-[#670007]/90 leading-relaxed bg-white/80 p-4 rounded-2xl border-2 border-[#670007]">
              Posting more won't get you noticed. Building simple, beautiful, and thoughtful Web & React projects will! Welcome to my student portfolio layout.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a href="#featured" className="px-6 py-3 bg-[#670007] text-white font-display rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:translate-y-1 transition">
                View My Works ↓
              </a>
            </div>
          </div>

          {/* Profile Card / Placeholder */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-72 h-80 bg-white p-4 rounded-3xl border-4 border-[#670007] shadow-[8px_8px_0px_0px_#670007] rotate-3 hover:rotate-0 transition-transform">
              <div className="w-full h-56 bg-[#F8E599] rounded-2xl border-2 border-[#670007] flex items-center justify-center">
                <p className="text-center text-xs font-bold text-[#670007] p-4">
                  📸 YOUR PHOTO HERE<br/>
                  <span className="font-normal text-[10px] text-gray-600">(src/assets/profile.jpg)</span>
                </p>
              </div>
              <div className="mt-3 text-center">
                <p className="font-display text-lg text-[#670007]">Web Developer & Designer</p>
                <p className="text-xs text-gray-500">BS Information Technology Student</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScallopDivider color="#670007" />

      {/* MARQUEE BANNER */}
      <TickerMarquee text="REACT JS ✦ TAILWIND CSS ✦ WEB DESIGN ✦ FRONTEND DEVELOPMENT ✦ STUDENT PORTFOLIO" bg="#670007" color="#F9F6EA" />

      {/* FEATURED PROJECTS SECTION */}
      <section id="featured" className="py-16 px-6 bg-[#D9E7FF] bg-gingham-blue">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-[#670007]">FEATURED PROJECTS</h2>
            <p className="text-sm font-semibold text-[#670007]/80 mt-2">Click on any project card to open full details!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((proj) => (
              <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      <ScallopDivider color="#D9E7FF" flipped={true} />

      {/* QUICK SKILLS BOXES */}
      <section className="py-16 px-6 bg-gingham-yellow">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-[#670007] mb-8">WHAT I DO 💡</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border-4 border-[#670007] shadow-[5px_5px_0px_0px_#670007]">
              <Code className="w-10 h-10 text-[#670007] mx-auto mb-3" />
              <h3 className="font-display text-xl text-[#670007]">Frontend Dev</h3>
              <p className="text-xs text-gray-600 mt-2">Building clean UI using React, JavaScript, HTML & CSS.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-[#670007] shadow-[5px_5px_0px_0px_#670007]">
              <Palette className="w-10 h-10 text-[#670007] mx-auto mb-3" />
              <h3 className="font-display text-xl text-[#670007]">UI/UX Design</h3>
              <p className="text-xs text-gray-600 mt-2">Designing cute, responsive, user-friendly mobile & web mockups.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border-4 border-[#670007] shadow-[5px_5px_0px_0px_#670007]">
              <Heart className="w-10 h-10 text-[#670007] mx-auto mb-3" />
              <h3 className="font-display text-xl text-[#670007]">Creative Coding</h3>
              <p className="text-xs text-gray-600 mt-2">Adding animations, custom themes, and vintage cute styles.</p>
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}