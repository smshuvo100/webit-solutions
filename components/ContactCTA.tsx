import React from 'react';
import { Phone, Mail, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#020202] pt-24 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Build Something That <span className="text-gradient-brand">Actually Performs?</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-md">
              If you’re serious about growth, we’ll show you exactly how to get there. No fluff, just strategy.
            </p>
            <a href="#" className="group inline-block w-full sm:w-auto text-center px-10 py-5 bg-white text-black font-bold text-xl uppercase tracking-wider rounded hover:bg-brand-500 hover:text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]">
              Book Your Strategy Call
            </a>
          </div>

          <div className="flex flex-col justify-end space-y-6">
            <div className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] rounded-lg hover:bg-white/[0.05] transition-colors group">
               <div className="bg-neutral-900 p-3 rounded group-hover:bg-brand-900/50 transition-colors">
                 <Phone className="text-brand-500" size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-white uppercase mb-1">Call Us</h4>
                 <p className="text-neutral-400 group-hover:text-white transition-colors">+1 (555) 123-4567</p>
               </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 border border-white/5 bg-white/[0.02] rounded-lg hover:bg-white/[0.05] transition-colors group">
               <div className="bg-neutral-900 p-3 rounded group-hover:bg-brand-900/50 transition-colors">
                 <Mail className="text-brand-500" size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-white uppercase mb-1">Email Us</h4>
                 <p className="text-neutral-400 group-hover:text-white transition-colors">growth@webit.solutions</p>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-600 text-white flex items-center justify-center rounded-lg shadow-lg">
                <Zap size={16} className="fill-white"/>
            </div>
            <span className="font-bold text-lg font-display tracking-tight">WebIT Solutions</span>
          </div>

          <div className="flex gap-6">
             <a href="#" className="text-neutral-500 hover:text-brand-400 hover:-translate-y-1 transition-all"><Twitter size={20}/></a>
             <a href="#" className="text-neutral-500 hover:text-brand-400 hover:-translate-y-1 transition-all"><Linkedin size={20}/></a>
             <a href="#" className="text-neutral-500 hover:text-brand-400 hover:-translate-y-1 transition-all"><Instagram size={20}/></a>
          </div>

          <p className="text-neutral-600 text-sm">
            © {new Date().getFullYear()} WebIT Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactCTA;