import React from 'react';
import ScallopDivider from '../components/ScallopDivider';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F9F6EA]">
      <section className="bg-gingham-pink py-12 px-6 border-b-4 border-[#670007]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl text-[#670007]">ABOUT ME ✨</h1>
          <p className="text-sm font-semibold text-[#670007] mt-2">Get to know the student behind the code!</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto py-12 px-6 space-y-8">
        <div className="bg-white p-8 rounded-3xl border-4 border-[#670007] shadow-[8px_8px_0px_0px_#670007]">
          <h2 className="font-display text-3xl text-[#670007] mb-4">Hello! I'm a Web Developer Student 👋</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            I am currently studying Information Technology / Computer Science. I love creating interactive websites with standard HTML, Tailwind CSS, and React JS. My design aesthetic combines retro, colorful pastel layouts with modern frontend features.
          </p>
          <p className="text-gray-700 leading-relaxed">
            When I'm not coding school projects or POS systems, I practice designing custom web apps and UI cutouts!
          </p>
        </div>

        {/* Education & Experience Placeholders */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F8E599] p-6 rounded-2xl border-3 border-[#670007]">
            <h3 className="font-display text-2xl text-[#670007] mb-3">🎓 Education</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-bold text-[#670007]">BS Information Technology</p>
                <p className="text-xs text-gray-700">Your University Name (2022 - Present)</p>
              </div>
              <div>
                <p className="font-bold text-[#670007]">Senior High School (TVL / ICT)</p>
                <p className="text-xs text-gray-700">Your High School Name (2020 - 2022)</p>
              </div>
            </div>
          </div>

          <div className="bg-[#D9E7FF] p-6 rounded-2xl border-3 border-[#670007]">
            <h3 className="font-display text-2xl text-[#670007] mb-3">🛠️ Skills</h3>
            <ul className="list-disc list-inside text-sm space-y-1 text-[#670007] font-semibold">
              <li>React.js & JavaScript (ES6)</li>
              <li>HTML5 & CSS3 / Tailwind CSS</li>
              <li>Node.js / Express (Basic)</li>
              <li>Git & GitHub Version Control</li>
              <li>Figma UI/UX Mockup Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}