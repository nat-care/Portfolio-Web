import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-emerald-50/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-200/60 shadow-sm inline-block">
            03. FEATURED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">
            ผลงานเด่น & โครงการพัฒนาจริง
          </h2>
          <p className="text-slate-600 text-sm">
            คัดสรรผลงานที่ผ่านกระบวนการออกแบบ แก้ปัญหาจริง และสร้างด้วย Vibe Coding Workflow
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-rose-200/60 shadow-lg shadow-rose-100/40 hover:shadow-xl hover:shadow-rose-100/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Decorative Soft Ambient Glow ในการ์ด */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100/40 rounded-full blur-2xl -z-10 pointer-events-none" />

              <div className="space-y-4">
                
                {/* 🖼️ ส่วนแสดงรูปภาพหน้าเว็บ */}
                {project.image && (
                  <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-rose-100 shadow-inner bg-slate-50">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Category & Badge */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {project.category === 'vibe' ? '✨ Vibe Coding' : '💻 Web Application'}
                  </span>
                  {project.featured && (
                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{project.shortDesc}</p>

                {/* Problem & Solution */}
                <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80 space-y-2.5 text-xs">
                  <div>
                    <strong className="text-emerald-700 font-bold block mb-0.5">Problem:</strong>
                    <span className="text-slate-600">{project.problem}</span>
                  </div>
                  <div>
                    <strong className="text-teal-700 font-bold block mb-0.5">Solution:</strong>
                    <span className="text-slate-600">{project.solution}</span>
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white text-slate-600 border border-slate-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-100">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 py-2.5 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-200/60 hover:shadow-lg"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.proofUrl && (
                  <a 
                    href={project.proofUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-2.5 bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-200 text-slate-600 hover:text-rose-500 rounded-xl transition-all shadow-sm hover:scale-105"
                    aria-label="View Source Code"
                  >
                    <FaGithub className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}