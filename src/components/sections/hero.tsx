import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-[80px] px-4 overflow-hidden hero-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff6b6b]/10 to-[#51cf66]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[#22d3ee]/10 to-[#60a5fa]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center max-w-[896px] mx-auto">
          {/* Badge Label */}
          <div className="inline-flex items-center rounded-full border-2 border-transparent bg-gradient-to-r from-[#60a5fa]/20 via-[#10b981]/20 to-[#22d3ee]/20 px-4 py-2 text-[12px] font-semibold transition-all shadow-lg mb-6 text-[#0f172a] hover:shadow-xl backdrop-blur-sm gradient-border">
            ✨ AI-Powered ERP Solution
          </div>

          {/* Main Headline */}
          <h1 className="text-[48px] md:text-[60px] font-bold mb-6 text-[#0f172a] leading-[1.1] tracking-[-0.02em]">
            Transform Your Business with <span className="gradient-text">Bay53 ERP</span>
          </h1>

          {/* Subtext Paragraphs */}
          <p className="text-[20px] text-[#334155] mb-8 leading-[1.6] font-medium">
            Transforming Business Operations Through Smart ERP Solutions
          </p>
          
          <p className="text-[18px] text-[#475569] mb-10 max-w-[768px] mx-auto leading-[1.5]">
            Comprehensive AI-Powered ERP solution designed for Small and Medium Enterprises. Streamline operations, increase efficiency, and drive growth with our integrated platform.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="h-[64px] px-8 text-[18px] font-semibold shadow-lg hover:shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 transition-all duration-300 border-0">
              <a href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-[64px] px-8 text-[18px] font-semibold border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa]/10 hover:shadow-lg transition-all duration-300">
              <a href="/features">
                Explore Features
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[80px]">
          {[
            { label: 'Years of Experience', value: '14+', gradient: 'from-[#ff6b6b] to-[#ff8787]' },
            { label: 'Happy Clients', value: '1000+', gradient: 'from-[#51cf66] to-[#22d3ee]' },
            { label: 'Active Installations', value: '500+', gradient: 'from-[#22d3ee] to-[#60a5fa]' },
            { label: 'Support Tickets Resolved', value: '10,000+', gradient: 'from-[#60a5fa] to-[#a78bfa]' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="rounded-[0.75rem] border-2 border-white/50 bg-white/60 backdrop-blur-md text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-white"
            >
              <div className="p-6 pt-6">
                <div className={`text-[36px] font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-[14px] text-[#475569] font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;