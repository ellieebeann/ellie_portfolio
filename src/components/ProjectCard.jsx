// src/components/ProjectCard.jsx
import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectCard({ project, onSelect }) {
  return (
    <div 
      className="bg-white rounded-2xl p-4 border-4 border-[#670007] shadow-[6px_6px_0px_0px_#670007] hover:-translate-y-2 hover:rotate-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
      onClick={() => onSelect(project)}
    >
      <div>
        <div className="w-full h-48 bg-[#D9E7FF] rounded-xl border-2 border-[#670007] overflow-hidden relative group mb-4 flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-center p-4">
              <Folder className="w-12 h-12 text-[#670007] mx-auto mb-2 opacity-50" />
              <p className="text-xs font-bold text-[#670007]">PROJECT THUMBNAIL PLACEHOLDER</p>
            </div>
          )}
          <div className="absolute inset-0 bg-[#670007]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-[#F9F6EA] text-[#670007] font-display px-4 py-2 rounded-full border-2 border-[#670007] text-sm">
              View Details ✨
            </span>
          </div>
        </div>

        <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-[#FDE0A5] text-[#670007] rounded-full border border-[#670007]">
          {project.category}
        </span>

        <h3 className="font-display text-2xl text-[#670007] mt-2">{project.title}</h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">{project.description}</p>
      </div>

      <div className="mt-4 pt-3 border-t-2 border-dashed border-[#670007]/30 flex justify-between items-center text-xs">
        <span className="font-mono text-gray-500">{project.tech.join(', ')}</span>
        <div className="flex gap-2">
          {project.github && <GithubIcon className="w-4 h-4 text-[#670007] hover:scale-125 transition" />}
          {project.demo && <ExternalLink className="w-4 h-4 text-[#670007] hover:scale-125 transition" />}
        </div>
      </div>
    </div>
  );
}