import React from 'react';
import aboutImage from '../assets/ellie.jpg';

export default function About({ skillsList }) {
  return (
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
                  {skillsList.map((skill, index) => (
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
  );
}