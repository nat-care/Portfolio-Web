import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      {/* การ์ดหลัก: ใช้การไล่เฉดสีพื้นหลังแบบอ่อน ยอมให้มีขอบสว่างสดใส */}
      <div className="bg-gradient-to-b from-white/90 via-emerald-50/30 to-rose-50/40 backdrop-blur-md p-10 sm:p-16 rounded-3xl border border-rose-200/60 shadow-xl shadow-rose-100/50 relative overflow-hidden">
        
        {/* Background Decorative Blobs: เพิ่มโทนพาสเทลหลายเฉดและขยายรัศมี Blur */}
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-rose-200/60 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-emerald-200/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-amber-100/40 rounded-full blur-3xl -z-10"></div>

        {/* Subtitle: สีเขียวมินต์สดใส (Emerald) */}
        <h2 className="text-xs sm:text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3 bg-emerald-100/80 px-4 py-1.5 rounded-full inline-block shadow-sm">
          Get In Touch
        </h2>

        {/* Headline: ใช้ Gradient Text ไล่สีจากเขียวเข้มไปชมพูเข้ม */}
        <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-emerald-700 via-teal-600 to-rose-500 bg-clip-text text-transparent">
          พร้อมที่จะร่วมงานกันหรือยัง?
        </h3>

        {/* Body Text: สีนวลตา อ่านง่าย */}
        <p className="text-slate-600 font-normal mb-8 max-w-lg mx-auto leading-relaxed">
          ไม่ว่าคุณจะมีโปรเจกต์ใหม่ หรืออยากพูดคุยแลกเปลี่ยนไอเดีย สามารถส่งอีเมลหาดิฉันได้เสมอค่ะ
        </p>

        {/* Mail Button: ปุ่มไล่สีสดใส พร้อม Hover Effect & Glow Shadow */}
        <a 
          href="mailto:nattichalasongchan@gmail.com" 
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-rose-400 text-white font-semibold hover:from-emerald-500 hover:to-rose-500 transition-all duration-300 shadow-lg shadow-emerald-200/60 hover:shadow-xl hover:shadow-rose-200/60 hover:-translate-y-0.5 active:translate-y-0"
        >
          <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          Send Me an Email
        </a>

        {/* Social Links: ไอคอนที่มีพื้นหลังทรงกลมแบบซอฟต์พาสเทล */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {/* GitHub Icon */}
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-rose-100 hover:text-rose-500 hover:scale-110 transition-all duration-200 shadow-sm"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-emerald-100 hover:text-emerald-600 hover:scale-110 transition-all duration-200 shadow-sm"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}