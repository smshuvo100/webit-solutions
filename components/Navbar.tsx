import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Capabilities', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Industries', href: '#industries' },
    { name: 'Results', href: '#results' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#030303]/80 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-500 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20 blur-md"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-brand-500 to-accent-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-brand-500/50 transition-all duration-300 border border-white/10">
              <Zap size={20} className="fill-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight leading-none text-brand-500 group-hover:text-brand-400 transition-colors">WebIT</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold transition-colors">Solutions</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium text-neutral-400 hover:text-white transition-colors uppercase tracking-wide group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="group relative overflow-hidden bg-white text-black px-6 py-2.5 text-sm font-bold uppercase tracking-wider rounded-full transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2 group-hover:gap-3 transition-all">
              Start Now
              <Rocket size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-200 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-display font-medium text-neutral-400 hover:text-white hover:translate-x-2 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
             href="#contact"
             className="bg-brand-600 text-white text-center py-4 rounded-lg font-bold uppercase tracking-wider"
             onClick={() => setIsMobileMenuOpen(false)}
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;