import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
                This Is Not a <span className="text-neutral-600">Design Studio.</span> <br />
                This Is a <span className="text-gradient-brand">Growth Partner.</span>
              </h2>
              <div className="space-y-6 text-lg text-neutral-400">
                <p>
                  If you want something that “looks nice,” we are not a fit.
                </p>
                <p>
                  If you want a digital presence that drives revenue, builds authority, and scales with your business, keep reading.
                </p>
              </div>
              
              <div className="mt-10">
                <a href="#contact" className="inline-block px-8 py-4 border border-white/20 text-white font-bold uppercase hover:bg-brand-600 hover:border-brand-600 hover:scale-105 transition-all duration-300 rounded-lg">
                  Work With Us
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-[#0a0a0a]/50 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-md relative overflow-hidden group">
              {/* Subtle Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <h3 className="text-xl font-bold uppercase tracking-widest text-brand-500 mb-8 border-b border-white/5 pb-4">The WebIT Standard</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Strategy before execution",
                  "Custom builds — no templates",
                  "Conversion and performance first",
                  "Automation baked into everything",
                  "Built for businesses planning to scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                    <CheckCircle2 className="text-brand-500 shrink-0 mt-1 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" size={24} />
                    <span className="text-xl font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 pt-8 border-t border-white/5 opacity-50">
                 <div className="flex items-center gap-2 text-red-500 mb-2">
                   <XCircle size={20} />
                   <span className="uppercase font-bold text-sm tracking-wider">The "Other Guys"</span>
                 </div>
                 <p className="text-sm text-neutral-500">Generic themes, slow load times, zero strategy, ghosting after launch.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;