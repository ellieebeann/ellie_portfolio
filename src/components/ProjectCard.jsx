import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
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
  );
}