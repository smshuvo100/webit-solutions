import React from 'react';
import { Stethoscope, Hammer, Building2, Car, Briefcase, Rocket } from 'lucide-react';
import { IndustryItem } from '../types';
import ScrollReveal from './ScrollReveal';

const industries: IndustryItem[] = [
  { name: 'Medical & Dental', icon: Stethoscope },
  { name: 'Home Services', icon: Hammer },
  { name: 'Real Estate', icon: Building2 },
  { name: 'Automotive', icon: Car },
  { name: 'Professional Services', icon: Briefcase },
  { name: 'Startups & SaaS', icon: Rocket },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 border-y border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Built for Businesses That Take <span className="text-white border-b-2 border-brand-500">Growth Seriously</span>
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="group relative p-6 border border-white/5 bg-white/[0.02] transition-all hover:-translate-y-2 hover:bg-white/[0.04] overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className="p-4 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-300 text-brand-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:bg-brand-500 group-hover:text-white">
                    <ind.icon size={24} />
                  </div>
                  <span className="font-medium text-sm text-neutral-300 group-hover:text-white transition-colors">{ind.name}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={400}>
          <div className="mt-16">
            <a href="#contact" className="text-neutral-400 hover:text-brand-400 underline decoration-neutral-700 hover:decoration-brand-400 underline-offset-4 transition-all">
              Don't see your industry? Book a Strategy Call to discuss fit.
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Industries;