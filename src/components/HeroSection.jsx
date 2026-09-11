import React from 'react';
// UI Icons ทั่วไปจาก lucide-react
import { Sparkles, ChevronRight, CheckCircle2, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { profileData } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-rose-50/50 via-white to-emerald-50/40">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-32 right-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Main Info Side */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-sm text-xs font-semibold text-emerald-800 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {profileData.faculty}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800 leading-tight">
             <span className="text-emerald-700">{profileData.nameEn}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              {profileData.role} <span className="font-semibold text-emerald-700 underline decoration-rose-300 decoration-2 underline-offset-4"></span>
            </p>

            {/* Recruiter Summary Box */}
            <div className="bg-white/80 backdrop-blur-md border border-emerald-200/70 rounded-2xl p-4 shadow-sm text-left max-w-xl mx-auto lg:mx-0">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Skills
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div>• <strong className="text-slate-800 font-bold">Programming Languages:</strong> JavaScript HTML/CSS C++</div>
                <div>• <strong className="text-slate-800 font-bold">Frontend Development:</strong> React, Tailwind, CSS, Vite</div>
                <div>• <strong className="text-slate-800 font-bold">Backend Development:</strong> Node.js Express Python FastAPI</div>
                <div>• <strong className="text-slate-800 font-bold">Databases, Cloud & Tools</strong> MongoDB, Firebase, GitHub Docker n8n</div>
              </div>
            </div>

            {/* Action Buttons & Social Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* Primary Button */}
              <a 
                href="#projects" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold rounded-xl shadow-md shadow-emerald-200/60 hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2 text-sm"
              >
                View Featured Projects <ChevronRight className="w-4 h-4" />
              </a>
              
              {/* GitHub Link Icon */}
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white hover:bg-rose-50 border border-slate-200/80 text-slate-600 hover:text-rose-500 hover:border-rose-200 rounded-xl transition-all shadow-sm hover:scale-105"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-5 h-5" />
              </a>

              {/* LinkedIn Link Icon */}
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="p-3 bg-white hover:bg-emerald-50 border border-slate-200/80 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 rounded-xl transition-all shadow-sm hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Card Side */}
          <div className="w-full max-w-md lg:w-96">
            <div className="relative bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-rose-200/60 shadow-xl shadow-rose-100/50 text-center space-y-4">
              
              {/* Avatar Ring */}
              <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-tr from-emerald-300 via-teal-200 to-rose-300 p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-rose-50 flex items-center justify-center text-3xl font-bold text-slate-700">
                  NL
                </div>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 text-lg">{profileData.nameEn}</h3>
                <p className="text-xs text-slate-500 mt-0.5">Computer Science Student @ SPU</p>
              </div>

              {/* Resume Button */}
              <a 
                href="#contact" 
                className="w-full py-2.5 bg-gradient-to-r from-rose-400 to-emerald-400 hover:from-rose-500 hover:to-emerald-500 text-white font-semibold rounded-xl text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-rose-100 hover:shadow-lg"
              >
                <FileText className="w-3.5 h-3.5" /> Request Resume / Interview
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}