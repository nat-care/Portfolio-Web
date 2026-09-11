import React, { useState } from 'react';
import { Code2, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-pastel-pink-light/90 backdrop-blur-md border-b border-pastel-pink-soft/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center gap-2 group">
          <div>
            <span className="font-bold text-pastel-text tracking-tight">
              NATTI<span className="text-pastel-pink">.DEV</span>
            </span>
            <span className="block text-[10px] text-pastel-green-sage font-medium tracking-wider uppercase">
              SPU Computer Science
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-pastel-text">
          <a href="#" className="hover:text-pastel-pink transition-colors">About</a>
          <a href="#projects" className="hover:text-pastel-pink transition-colors">Projects</a>
          <a href="#contact" className="hover:text-pastel-pink transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden p-2 rounded-lg text-pastel-text hover:bg-pastel-pink-light"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pastel-pink-light border-b border-pastel-pink-soft/40 px-4 pt-2 pb-6 space-y-3 text-sm font-medium">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-pastel-text">About</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-pastel-text">Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-pastel-pink font-bold">Contact / Resume</a>
        </div>
      )}
    </header>
  );
}