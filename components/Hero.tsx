import React from 'react';
import { ArrowRight, ChevronDown, Activity, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#030303]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-[120px] animate-pulse-slow mix-blend-screen" style={{ animationDelay: '2s' }}></div>
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Floating Icons for Tech Feel */}
        <div className="absolute top-0 left-10 md:left-20 animate-float opacity-20 md:opacity-40">
           <Activity size={40} className="text-brand-500" />
        </div>
        <div className="absolute bottom-40 right-10 md:right-20 animate-float opacity-20 md:opacity-40" style={{ animationDelay: '1.5s' }}>
           <Globe size={40} className="text-accent-500" />
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 mb-8 animate-fade-in backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-brand-500/20 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          <span className="text-xs font-bold tracking-widest uppercase text-brand-100">Accepting New Clients</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.05] tracking-tighter mb-8 animate-slide-up">
          We Build Digital Systems <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-neutral-500">
            That Dominate Markets
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light animate-slide-up [animation-delay:200ms]">
          High-performance websites, SEO, AI automation, and marketing infrastructure built for businesses that want <span className="text-white font-medium border-b border-brand-500">scale</span> — not excuses.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-slide-up [animation-delay:400ms]">
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wide rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            <span className="relative flex items-center justify-center gap-2">
              Book a Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </a>
          
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg uppercase tracking-wide rounded-lg hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
          >
            View Our Capabilities
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 animate-slide-up [animation-delay:600ms]">
          <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] mb-6">Trusted by ambitious businesses across North America</p>
          <div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-40 hover:opacity-80 transition-opacity duration-700">
             {/* Placeholder Logos with better font styles */}
             {['VERTEX', 'NEXUS', 'ACME CORP', 'GLOBAL', 'FUTURE'].map((logo) => (
                <span key={logo} className="text-xl md:text-2xl font-display font-bold text-white tracking-tighter hover:text-brand-400 transition-colors cursor-default">{logo}</span>
             ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;