import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsPage({ projects }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'WEB APP', 'UI DESIGN', 'SCHOOL PROJ'];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === filter);

  return (
    <div className="min-h-screen bg-gingham-yellow py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-display text-5xl text-[#670007]">ALL WORKS & PROJECTS 📁</h1>
          <p className="text-sm text-[#670007] mt-2">Filter through my school and personal projects below:</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl font-display text-sm border-2 border-[#670007] transition ${
                filter === cat
                  ? 'bg-[#670007] text-[#F9F6EA] shadow-[3px_3px_0px_0px_#000]'
                  : 'bg-white text-[#670007] hover:bg-[#F7BECA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <ProjectCard key={proj.id} project={proj} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}