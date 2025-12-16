import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, Loader2, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const LeadForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    website: '',
    service: 'Web Design & Development',
    budget: '$5k - $15k',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="lead-form" className="py-24 bg-[#040404] relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Copy */}
          <ScrollReveal>
            <div className="pt-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                <span className="text-xs font-bold uppercase text-brand-400 tracking-wider">High Demand</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                Stop Guessing. <br />
                <span className="text-white border-b-4 border-brand-500">Start Scaling.</span>
              </h2>
              
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-lg">
                Your competitors are already optimizing. Don't get left behind. 
                Fill out the form to get a <span className="text-white font-bold">custom strategy roadmap</span> designed to double your inbound leads in 90 days.
              </p>

              <div className="flex flex-col gap-4 text-sm text-neutral-500">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-brand-500" size={20} />
                  <span>100% Confidential Audit</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" size={20} />
                  <span>No "Sales Fluff" — Just Data</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-500" size={20} />
                  <span>Response within 24 Hours</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal delay={200}>
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-2xl shadow-2xl relative group">
              {/* Form Glow */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent rounded-2xl opacity-50 pointer-events-none"></div>
              
              {isSuccess ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 text-green-500">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Received</h3>
                  <p className="text-neutral-400 mb-6">Our strategists are analyzing your request. Expect a battle plan in your inbox shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-brand-500 font-bold hover:text-brand-400 transition-colors"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:bg-brand-500/5 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:bg-brand-500/5 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="website" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Website URL</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      value={formState.website}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 focus:bg-brand-500/5 transition-all"
                      placeholder="https://company.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Primary Goal</label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-500 focus:bg-brand-500/5 transition-all"
                        >
                          <option className="bg-neutral-900">Web Design & Dev</option>
                          <option className="bg-neutral-900">SEO & Traffic</option>
                          <option className="bg-neutral-900">AI Automation</option>
                          <option className="bg-neutral-900">Paid Advertising</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight size={14} className="text-neutral-500 rotate-90" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="budget" className="text-xs font-bold uppercase tracking-wider text-neutral-500">Est. Monthly Budget</label>
                      <div className="relative">
                         <select
                          id="budget"
                          name="budget"
                          value={formState.budget}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-brand-500 focus:bg-brand-500/5 transition-all"
                        >
                          <option className="bg-neutral-900">$2k - $5k</option>
                          <option className="bg-neutral-900">$5k - $15k</option>
                          <option className="bg-neutral-900">$15k - $30k</option>
                          <option className="bg-neutral-900">$30k+</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight size={14} className="text-neutral-500 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg uppercase py-4 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(249,115,22,0.39)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.23)] hover:-translate-y-1 flex items-center justify-center gap-2 group/btn"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        Get My Strategy Blueprint 
                        <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-center text-xs text-neutral-600 mt-4">
                    By clicking above, you agree to our Terms. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;