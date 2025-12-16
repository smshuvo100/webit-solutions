import React, { useRef, useState } from 'react';
import { Layout, LineChart, Bot, Zap, Database, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import ScrollReveal from './ScrollReveal';

const services: ServiceItem[] = [
  {
    title: 'Web Design & Development',
    description: 'Websites built to convert, scale, and outperform competitors. No drag-and-drop garbage.',
    icon: Layout,
    highlight: true,
  },
  {
    title: 'SEO & Local SEO',
    description: 'Long-term visibility that compounds traffic, authority, and inbound demand.',
    icon: LineChart,
  },
  {
    title: 'AI Automation & Chatbots',
    description: '24/7 AI systems that qualify leads, book appointments, and reduce overhead.',
    icon: Bot,
  },
  {
    title: 'Paid Advertising',
    description: 'ROI-focused campaigns on Google & Meta built to produce measurable revenue.',
    icon: Zap,
  },
  {
    title: 'CRM & Automation',
    description: 'Infrastructure that connects leads, follow-ups, and operations into one system.',
    icon: Database,
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative group p-8 rounded-2xl border border-white/5 bg-[#0a0a0a] overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${service.highlight ? 'lg:col-span-2' : ''}`}
    >
      {/* Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.15), transparent 40%)`,
        }}
      />
      {/* Border Glow */}
      <div 
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.4), transparent 40%)`,
          maskImage: 'linear-gradient(black, black)',
          WebkitMaskImage: 'linear-gradient(black, black)',
          WebkitMaskComposite: 'xor', // This creates a border effect
          maskComposite: 'exclude',
          padding: '1px'
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300 shadow-[0_0_0_0_rgba(59,130,246,0)] group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
          <service.icon size={24} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3 font-display group-hover:text-brand-400 transition-colors">{service.title}</h3>
        <p className="text-neutral-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
        
        <div className="flex items-center text-sm font-bold uppercase tracking-wider text-brand-500 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          Learn More <ArrowUpRight className="ml-1" size={14} />
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#030303] relative">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-16 md:flex justify-between items-end border-b border-white/5 pb-8">
            <div className="max-w-2xl">
              <h4 className="text-brand-500 font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-brand-500"></span> What We Do
              </h4>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Everything Required to Win Online</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Most agencies sell design. Most agencies sell buzzwords. <br/>
                We build systems — engineered to generate leads, increase revenue, and remove operational bottlenecks.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
               <a href="#results" className="text-white group border-b border-white/30 pb-1 hover:text-brand-500 hover:border-brand-500 transition-colors inline-flex items-center gap-1">
                  See How We Build <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/>
               </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;