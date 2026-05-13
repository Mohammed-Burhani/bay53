import React from 'react';
import { Sparkles, Target, Zap } from 'lucide-react';

const ModulesHero = () => {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#ecfeff] via-[#f0fdf4] to-[#fef3f2] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#60a5fa]/10 to-[#10b981]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-[#22d3ee]/10 to-[#a78bfa]/10 rounded-full blur-3xl"></div>
      
      <div className="px-7 mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#e2e8f0] rounded-full px-4 py-2 mb-6 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#60a5fa]" />
          <span className="text-sm font-medium text-[#0f172a]">
            Choose Your Module • Start Free Trial
          </span>
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-[#0f172a] mb-6 tracking-tight leading-[1.1]">
          Find the Perfect Solution <br />
          <span className="gradient-text">for Your Business</span>
        </h1>
        
        <p className="text-xl text-[#475569] max-w-3xl mx-auto leading-[1.6] mb-8">
          We offer specialized modules for every business need. 
          Try only what you need, no commitment, no credit card required.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 text-[#0f172a]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#10b981] flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Industry-Specific</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f172a]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#10b981] to-[#22d3ee] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Quick Setup</span>
          </div>
          <div className="flex items-center gap-2 text-[#0f172a]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium">Free Trial</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesHero;