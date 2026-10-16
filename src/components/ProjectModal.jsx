import React from 'react';
import { X } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectModal({ project, onClose }) {
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
}