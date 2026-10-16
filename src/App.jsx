import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TickerMarquee from './components/TickerMarquee';
import About from './components/About';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import ScallopDivider from './components/ScallopDivider';
import Footer from './components/Footer';

import { Award } from 'lucide-react';

import strayPetsImg from './assets/straypets.png';
import axelogImg from './assets/Axelog.png';
import pocketPawsImg from './assets/pocketpaws.png';
import scribdImg from './assets/scribd.png';
import flomfyNestImg from './assets/flomfynest.png';

const PORTFOLIO_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Stray Pets Management System',
    category: 'Capstone Project',
    type: 'web',
    description: 'A full-stack web application designed for Angeles City Vet office for stray animal adoption, public reporting, community sponsorship, and rescue tracking.',
    fullDetail: 'Role: System Architecture Lead & Frontend Developer. Conducted security analysis, designed responsive UI flow, configured Supabase backend integration, and executed end-to-end UAT across public, staff, and admin modules.',
    imagePlaceholder: strayPetsImg,
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'JavaScript'],
    githubUrl: 'https://github.com/ellieebeann',
    rotation: '-rotate-2'
  },
  {
    id: 'proj-2',
    title: 'AxeLog - Mobile Game Achievement Tracker',
    category: 'Mobile App',
    type: 'mobile',
    description: 'A mobile tracking app for gamers to log gameplay progress, record in-game achievements, organize titles, and monitor completion stats.',
    fullDetail: 'Role: Android Developer. Designed mobile UI components, structured database storage schemas for game stats, implemented custom Adapter classes, and managed Activity lifecycle flows.',
    imagePlaceholder: axelogImg,
    tags: ['Java', 'Android Studio', 'SQLite', 'XML Layouts'],
    githubUrl: 'https://github.com/ellieebeann',
    rotation: 'rotate-3'
  },
  {
    id: 'proj-3',
    title: 'Pocket Paws - 2D Pet Rescue Game',
    category: 'Game Development',
    type: 'game',
    description: 'A cozy simulation game featuring interactive mini-games focused on animal rescue, caretaking, and rehabilitation mechanics.',
    fullDetail: 'Role: Game Programmer & Pixel Artist. Programmed player character physics, collision handling, and camera controllers in C#; created custom character sprite sheets and UI assets in Aseprite.',
    imagePlaceholder: pocketPawsImg,
    tags: ['Unity Engine', 'C#', 'Aseprite Pixel Art', 'UI Assets'],
    githubUrl: 'https://github.com/ellieebeann',
    rotation: '-rotate-1'
  },
  {
    id: 'proj-4',
    title: 'Scrib - Mobile Notetaking App',
    category: 'Mobile App',
    type: 'mobile',
    description: 'A clean mobile productivity app for creating, editing, categorizing, and organizing personal notes and task lists.',
    fullDetail: 'Role: Mobile Application Developer. Constructed XML layout designs, implemented full CRUD note operations, integrated input validation, and optimized UI responsiveness.',
    imagePlaceholder: scribdImg,
    tags: ['Java', 'Android Studio', 'XML', 'CRUD Operations'],
    githubUrl: 'https://github.com/ellieebeann',
    rotation: 'rotate-2'
  },
  {
    id: 'proj-6',
    title: 'Flomfy Nest - Tamagotchi Virtual Pet',
    category: 'Desktop Game / OOP',
    type: 'game',
    description: 'Interactive desktop virtual pet simulation featuring real-time pet caretaking, state management, and custom GUI feedback.',
    fullDetail: 'Role: Software Developer. Designed object-oriented class structures, implemented core game loop logic, handled event listeners for interactive buttons, and managed state decay mechanisms.',
    imagePlaceholder: flomfyNestImg,
    tags: ['Java OOP', 'Eclipse IDE', 'GUI Programming', 'State Management'],
    githubUrl: 'https://github.com/ellieebeann',
    rotation: 'rotate-1'
  }
];

const SKILLS_LIST = [
  { name: 'React.js & Vite', level: 'Framework', icon: '⚛️' },
  { name: 'Java (Android)', level: 'Programming', icon: '📱' },
  { name: 'C# (Unity 2D/3D)', level: 'Game Engine', icon: '🎮' },
  { name: 'Supabase & MySQL', level: 'Database', icon: '🗄️' },
  { name: 'Tailwind CSS', level: 'UI Framework', icon: '🎨' },
  { name: 'Aseprite & Figma', level: 'Assets & UI', icon: '🖌️' }
];

const CERTIFICATIONS = [
  { title: "Networking Devices & Initial Config", issuer: "Cisco Networking Academy (Cisco NetAcad)", year: "2024" },
  { title: "Cisco Networking Basics Certification", issuer: "Cisco Networking Academy (Cisco NetAcad)", year: "2024" },
  { title: "IT Student Seminar Series & Workshops", issuer: "CICT, Bulacan State University", year: "2024" }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = PORTFOLIO_PROJECTS.filter(project => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('maellyssabiacar@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F9F6EA] text-[#670007] font-sans overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <Hero handleCopyEmail={handleCopyEmail} copiedEmail={copiedEmail} />
      <TickerMarquee />
      <About skillsList={SKILLS_LIST} />

      <ScallopDivider fillColor="#670007" height={36} />

      {/* PROJECTS SECTION */}
      <section id="works" className="py-20 bg-gingham-maroon text-[#F9F6EA] relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <div className="inline-block px-4 py-1.5 bg-[#FDE0A5] text-[#670007] border-2 border-white rounded-full text-xs font-bold font-heading shadow-retro-sm">
              ACADEMIC & SYSTEM PROJECTS
            </div>
            <h2 className="text-4xl sm:text-5xl font-display text-white tracking-wide">
              FEATURED PORTFOLIO PROJECTS
            </h2>

            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'ALL PROJECTS' },
                { id: 'web', label: 'WEB & CAPSTONE' },
                { id: 'mobile', label: 'MOBILE APPS' },
                { id: 'game', label: 'GAMES & SIMULATION' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl font-heading font-bold text-xs md:text-sm border-2 border-white transition-all ${activeFilter === tab.id ? 'bg-[#F7BECA] text-[#670007] shadow-retro-sm scale-105' : 'bg-black/30 text-white hover:bg-white/20'}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      <ScallopDivider fillColor="#FDE0A5" flip={true} height={36} />

      {/* CERTS & HONORS SECTION */}
      <section id="certs" className="py-20 bg-[#FDE0A5] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="px-3 py-1 bg-white border-2 border-[#670007] rounded-full text-xs font-bold text-[#670007] uppercase">
              CREDENTIALS & RECOGNITION
            </span>
            <h2 className="text-4xl font-display text-[#670007] mt-3">
              CERTIFICATIONS & AWARDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border-3 border-[#670007] shadow-retro flex flex-col justify-between">
                <div>
                  <Award className="w-10 h-10 text-[#670007] mb-3" />
                  <h3 className="font-display text-lg text-[#670007] mb-1">{cert.title}</h3>
                  <p className="text-xs text-gray-700">{cert.issuer}</p>
                </div>
                <span className="mt-4 px-3 py-1 bg-[#F7BECA] border border-[#670007] text-[#670007] font-bold text-xs rounded-full inline-block w-max">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScallopDivider fillColor="#F7BECA" height={40} />

      <Footer handleCopyEmail={handleCopyEmail} copiedEmail={copiedEmail} />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}