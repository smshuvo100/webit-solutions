import React, { useState } from 'react';
import { generateAudit } from '../services/geminiService';
import { Bot, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AIStrategist: React.FC = () => {
  const [input, setInput] = useState('');
  const [audit, setAudit] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setAudit(null);
    const result = await generateAudit(input);
    setAudit(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Bot size={16} className="text-brand-500" />
            <span className="text-xs font-bold uppercase text-brand-400">Powered by Gemini AI</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Is Your Site <span className="text-red-500">Bleeding Revenue?</span>
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto">
            Enter your website URL or a short description of your business model. Our AI will roast your current positioning strategy in 10 seconds.
          </p>

          <form onSubmit={handleAudit} className="max-w-xl mx-auto mb-10 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-accent-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex flex-col sm:flex-row gap-2 bg-black p-2 rounded-lg">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g., 'Local HVAC company in Dallas' or 'mysite.com'"
                className="flex-grow bg-neutral-900 border border-neutral-800 rounded px-4 py-4 text-white placeholder-neutral-600 focus:outline-none focus:border-brand-500 focus:bg-neutral-900/50 transition-colors"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-white text-black font-bold uppercase rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-50 hover:text-brand-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : <><Sparkles size={20} /> Roast Me</>}
              </button>
            </div>
          </form>
        </ScrollReveal>

        {audit && (
          <div className="bg-[#050505] border border-white/10 p-8 rounded-xl text-left animate-fade-in shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-accent-500"></div>
            <div className="flex items-center gap-2 mb-4 text-brand-500">
               <AlertCircle size={20} />
               <span className="font-bold uppercase tracking-widest text-sm">Audit Results</span>
            </div>
            <div className="prose prose-invert max-w-none">
              <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-neutral-200">{audit}</pre>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-sm text-neutral-500 mb-2">That was harsh, but necessary.</p>
              <a href="#contact" className="text-white font-bold underline decoration-brand-500 underline-offset-4 hover:text-brand-400 transition-colors">Let us fix it for you.</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIStrategist;