import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import ScrollReveal from './ScrollReveal';

const data = [
  { name: 'Month 1', leads: 24 },
  { name: 'Month 2', leads: 45 },
  { name: 'Month 3', leads: 82 },
  { name: 'Month 4', leads: 115 },
  { name: 'Month 5', leads: 156 },
  { name: 'Month 6', leads: 210 },
];

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-[#030303] relative">
       <div className="max-w-7xl mx-auto px-6">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="order-2 lg:order-1 h-[400px] w-full bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl shadow-2xl relative group">
                 {/* Glow effect behind chart */}
                 <div className="absolute inset-0 bg-brand-500/5 blur-xl -z-10 group-hover:bg-brand-500/10 transition-colors duration-500"></div>
                 
                 <div className="flex items-center justify-between mb-6">
                   <h4 className="text-sm font-bold uppercase text-neutral-400 tracking-wider">Client Lead Velocity</h4>
                   <div className="flex gap-2 items-center">
                     <span className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_10px_#f97316]"></span>
                     <span className="text-xs text-neutral-500">Qualified Leads</span>
                   </div>
                 </div>
                 <ResponsiveContainer width="100%" height="85%">
                   <BarChart data={data}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                      <XAxis 
                        dataKey="name" 
                        stroke="#555" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                        dy={10}
                      />
                      <YAxis 
                        stroke="#555" 
                        fontSize={12} 
                        tickLine={false} 
                        axisLine={false}
                      />
                      <Tooltip 
                        cursor={{fill: 'rgba(249,115,22,0.1)'}}
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff' }}
                      />
                      <Bar dataKey="leads" fill="#f97316" radius={[4, 4, 0, 0]} animationDuration={1500} />
                   </BarChart>
                 </ResponsiveContainer>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Results Speak Louder Than <span className="text-neutral-600 line-through decoration-brand-500">Promises</span>
                </h2>
                <p className="text-xl text-neutral-400 mb-8 leading-relaxed">
                  We don’t hide behind vague claims. Our work delivers measurable outcomes — traffic, leads, and conversions.
                </p>
                
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="p-4 border-l-2 border-brand-500 bg-brand-900/10">
                     <span className="block text-4xl font-bold text-white mb-1">300%</span>
                     <span className="text-sm text-neutral-400 uppercase tracking-wider">Avg. Traffic Increase</span>
                  </div>
                  <div className="p-4 border-l-2 border-accent-500 bg-accent-900/10">
                     <span className="block text-4xl font-bold text-white mb-1">10x</span>
                     <span className="text-sm text-neutral-400 uppercase tracking-wider">ROI on Ad Spend</span>
                  </div>
                </div>

                <a href="#contact" className="px-8 py-4 bg-brand-600 text-white font-bold uppercase rounded-lg hover:bg-brand-500 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.6)] hover:-translate-y-1 transform duration-300">
                  Get Similar Results
                </a>
              </div>
            </ScrollReveal>
         </div>
       </div>
    </section>
  );
};

export default Results;