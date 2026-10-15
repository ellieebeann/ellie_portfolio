import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Code2, 
  Briefcase, 
  Copy, 
  Check, 
  X, 
  ArrowUpRight,
  GraduationCap,
  Award
} from 'lucide-react';

import heroImage from './assets/ellie2.jpg';
import aboutImage from './assets/ellie.jpg';
import strayPetsImg from './assets/straypets.png';
import axelogImg from './assets/Axelog.png';
import pocketPawsImg from './assets/pocketpaws.png';
import scribdImg from './assets/scribd.png';
import flomfyNestImg from './assets/flomfynest.png';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@500;700&display=swap');

  .font-display { font-family: 'Lilita One', cursive, sans-serif; }
  .font-heading { font-family: 'Space Grotesk', sans-serif; }
  .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }

  .bg-gingham-pink {
    background-color: #F7BECA;
    background-image: 
      linear-gradient(90deg, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      linear-gradient(rgba(255, 255, 255, 0.4) 50%, transparent 50%);
    background-size: 32px 32px;
  }

  .bg-gingham-blue {
    background-color: #D9E7FF;
    background-image: 
      linear-gradient(90deg, rgba(255, 255, 255, 0.45) 50%, transparent 50%),
      linear-gradient(rgba(255, 255, 255, 0.45) 50%, transparent 50%);
    background-size: 30px 30px;
  }

  .bg-gingham-yellow {
    background-color: #FDE0A5;
    background-image: 
      linear-gradient(90deg, rgba(255, 255, 255, 0.4) 50%, transparent 50%),
      linear-gradient(rgba(255, 255, 255, 0.4) 50%, transparent 50%);
    background-size: 28px 28px;
  }

  .bg-gingham-maroon {
    background-color: #670007;
    background-image: 
      linear-gradient(90deg, rgba(255, 255, 255, 0.08) 50%, transparent 50%),
      linear-gradient(rgba(255, 255, 255, 0.08) 50%, transparent 50%);
    background-size: 28px 28px;
  }

  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .animate-marquee {
    display: flex;
    width: 200%;
    animation: marquee 22s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }

  .shadow-retro { box-shadow: 6px 6px 0px 0px #670007; }
  .shadow-retro-lg { box-shadow: 10px 10px 0px 0px #670007; }
  .shadow-retro-sm { box-shadow: 4px 4px 0px 0px #670007; }
`;

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
    title: 'Pocket Paws - 2D/3D Pet Rescue Game',
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

const ScallopDivider = ({ fillColor = '#670007', flip = false, height = 40 }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''}`} style={{ height: `${height}px` }}>
    <svg className="w-full h-full block" viewBox="0 0 1200 120" preserveAspectRatio="none" fill={fillColor}>
      <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,-30 1200,40 L1200,120 L0,120 Z"></path>
    </svg>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#F9F6EA] rounded-3xl border-4 border-[#670007] p-6 md:p-8 shadow-retro-lg overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#F7BECA] text-[#670007] rounded-full border-2 border-[#670007] hover:bg-[#670007] hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <span className="inline-block px-3 py-1 bg-[#FDE0A5] border-2 border-[#670007] rounded-full text-xs font-bold text-[#670007] uppercase mb-3">
          {project.category}
        </span>

        <h3 className="text-3xl font-display text-[#670007] mb-3">{project.title}</h3>
        
        <div className="relative w-full h-56 md:h-64 rounded-2xl overflow-hidden border-3 border-[#670007] mb-4 bg-white flex items-center justify-center">
          <img src={project.imagePlaceholder} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-[#670007] font-sans font-medium mb-4 text-sm md:text-base leading-relaxed">
          {project.fullDetail}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-3 py-1 bg-[#D9E7FF] border border-[#670007] rounded-lg text-xs font-bold text-[#670007]">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 border-t-2 border-dashed border-[#670007]/20">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#670007] text-white rounded-xl font-bold font-heading hover:bg-[#850009] shadow-retro-sm">
            <GithubIcon className="w-5 h-5" /> GitHub Repository
          </a>
        </div>
      </div>
    </div>
  );
};

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
      <style>{customStyles}</style>

      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-2 bg-[#F9F6EA]/90 backdrop-blur-md border-b-2 border-[#670007] shadow-sm' : 'py-4 bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-[#670007] text-[#F9F6EA] flex items-center justify-center font-display text-lg group-hover:rotate-12 transition-transform shadow-retro-sm">
              🐝
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

      {/* MARQUEE BANNER */}
      <div className="bg-[#670007] text-[#F9F6EA] py-3 overflow-hidden border-b-4 border-[#670007] relative z-20">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 font-display text-lg md:text-xl tracking-widest uppercase">
          <span>REACT.JS ● JAVA ANDROID ● C# UNITY ● SUPABASE ● SQL DATABASE ● TAILWIND CSS ● CISCO NETACAD ●</span>
          <span>REACT.JS ● JAVA ANDROID ● C# UNITY ● SUPABASE ● SQL DATABASE ● TAILWIND CSS ● CISCO NETACAD ● </span>
        </div>
      </div>

      {/* ABOUT & EDUCATION SECTION */}
      <section id="about" className="py-20 bg-[#D9E7FF] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#F9F6EA] rounded-3xl border-4 border-[#670007] p-8 md:p-12 shadow-retro-lg relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="bg-[#F7BECA] p-4 rounded-2xl border-3 border-[#670007] shadow-retro transform -rotate-2">
                  <div className="bg-white rounded-xl overflow-hidden border-2 border-[#670007] aspect-square relative mb-3">
                    <img src={aboutImage} alt="Ellie Regodon Working" className="w-full h-full object-cover" />
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-[#670007] text-center">
                    <h4 className="font-display text-[#670007] text-lg">BSIT CANDIDATE</h4>
                    <p className="text-xs font-semibold text-[#670007]">Bulacan State University</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 bg-[#FDE0A5] border-2 border-[#670007] rounded-full text-xs font-bold text-[#670007]">
                  CAREER OBJECTIVE & SUMMARY
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-[#670007] leading-tight">
                  DEDICATED IT CANDIDATE READY TO <span className="bg-[#F7BECA] px-2 py-0.5 rounded-md border border-[#670007]">CONTRIBUTE</span> & LEARN.
                </h2>

                <p className="text-sm sm:text-base text-[#670007] font-medium leading-relaxed">
                  A 3-time Dean's Lister with a strong academic foundation in Object-Oriented Programming, Database Management Systems, Data Structures, and HCI. Seeking an IT internship where I can apply my experience with React, Java, C#, and SQL to real-world projects.
                </p>

                <div>
                  <h3 className="font-heading font-bold text-sm uppercase text-[#670007] mb-3 tracking-wider">
                    Technical Toolkit:
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {SKILLS_LIST.map((skill, index) => (
                      <div key={index} className="p-2.5 bg-white border-2 border-[#670007] rounded-xl flex items-center gap-2 hover:bg-[#FDE0A5] transition-colors shadow-retro-sm">
                        <span className="text-base">{skill.icon}</span>
                        <div>
                          <p className="text-xs font-bold text-[#670007] font-heading">{skill.name}</p>
                          <p className="text-[10px] text-[#670007]/70 font-semibold">{skill.level}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScallopDivider fillColor="#670007" height={36} />

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
                  className={`px-4 py-2 rounded-xl font-heading font-bold text-xs md:text-sm border-2 border-white transition-all ${
                    activeFilter === tab.id ? 'bg-[#F7BECA] text-[#670007] shadow-retro-sm scale-105' : 'bg-black/30 text-white hover:bg-white/20'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer bg-[#F9F6EA] text-[#670007] rounded-3xl border-4 border-white p-5 shadow-retro-lg transition-all duration-300 hover:-translate-y-2 ${project.rotation}`}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-[#670007] mb-4 bg-white">
                  <img src={project.imagePlaceholder} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 bg-white border border-[#670007] rounded-full text-[10px] font-bold text-[#670007]">
                    {project.category}
                  </div>
                  <div className="absolute bottom-2 right-2 p-1.5 bg-[#F7BECA] text-[#670007] border border-[#670007] rounded-full">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <h3 className="text-xl font-display text-[#670007] mb-2">{project.title}</h3>
                <p className="text-xs font-sans font-medium text-[#670007]/90 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-1 pt-2 border-t border-dashed border-[#670007]/20">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#D9E7FF] border border-[#670007] rounded-md text-[10px] font-bold text-[#670007]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScallopDivider fillColor="#FDE0A5" flip={true} height={36} />

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

      <footer id="contact" className="bg-[#F7BECA] pt-12 pb-16 relative border-t-4 border-[#670007]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-[#F9F6EA] rounded-3xl border-4 border-[#670007] p-8 md:p-12 shadow-retro-lg mb-12 relative overflow-hidden">
            <span className="inline-block px-4 py-1.5 bg-[#FDE0A5] border-2 border-[#670007] rounded-full text-xs font-bold text-[#670007] mb-4">
              OPEN FOR IT INTERNSHIP OPPORTUNITIES
            </span>

            <h2 className="text-4xl sm:text-6xl font-display text-[#670007] mb-4">
              LET'S WORK TOGETHER!
            </h2>

            <p className="text-sm sm:text-base text-[#670007] font-medium max-w-xl mx-auto mb-8">
              Feel free to reach out for internship screening, technical roles, or software projects!
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white p-2.5 rounded-2xl border-3 border-[#670007] shadow-retro">
              <span className="px-4 py-2 font-heading font-bold text-sm text-[#670007]">
                maellyssabiacar@gmail.com
              </span>
              <button onClick={handleCopyEmail} className="w-full sm:w-auto px-6 py-3 bg-[#670007] text-white rounded-xl font-heading font-bold text-xs uppercase hover:bg-[#850009] flex items-center justify-center gap-2">
                {copiedEmail ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedEmail ? 'COPIED!' : 'COPY EMAIL'}</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="https://github.com/ellieebeann" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/maellyssabiancaregodon/" target="_blank" rel="noreferrer" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="mailto:maellyssabiacar@gmail.com" className="w-12 h-12 bg-white text-[#670007] border-2 border-[#670007] rounded-full flex items-center justify-center shadow-retro-sm hover:bg-[#670007] hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <p className="text-xs font-bold font-heading text-[#670007]/80">
            © {new Date().getFullYear()} MA. ELLYSSA BIANCA REGODON • BSIT •
          </p>
        </div>
      </footer>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}