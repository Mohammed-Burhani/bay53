import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative py-[80px] px-4 overflow-hidden">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eff6ff] via-[#eef2ff] to-[#f5f3ff] opacity-70" />
      
      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center max-w-[896px] mx-auto">
          {/* Badge Label */}
          <div className="inline-flex items-center rounded-md border border-indigo-200 px-[10px] py-[2px] text-[12px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 shadow mb-6 bg-[#e0e7ff] text-[#4338ca] hover:bg-indigo-200">
            AI-Powered ERP Solution
          </div>

          {/* Main Headline */}
          <h1 className="text-[48px] md:text-[60px] font-bold mb-6 text-[#111827] leading-[1.1] tracking-[-0.02em]">
            Transform Your Business with <span className="text-[#4f46e5]">Bay53 ERP</span>
          </h1>

          {/* Subtext Paragraphs */}
          <p className="text-[20px] text-[#4b5563] mb-8 leading-[1.6]">
            Transforming Business Operations Through Smart ERP Solutions
          </p>
          
          <p className="text-[18px] text-[#6b7280] mb-10 max-w-[768px] mx-auto leading-[1.5]">
            Comprehensive AI-Powered ERP solution designed for Small and Medium Enterprises. Streamline operations, increase efficiency, and drive growth with our integrated platform.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default" className="h-[64px] px-8 text-[18px] shadow-lg hover:shadow-xl">
              <a href="/contact">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-[64px] px-8 text-[18px]">
              <a href="/features">
                Explore Features
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-[80px]">
          {[
            { label: 'Years of Experience', value: '14+' },
            { label: 'Happy Clients', value: '1000+' },
            { label: 'Active Installations', value: '500+' },
            { label: 'Support Tickets Resolved', value: '10,000+' }
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className="rounded-[0.75rem] border-none bg-white text-center shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <div className="p-6 pt-6">
                <div className="text-[36px] font-bold text-[#4f46e5] mb-2">
                  {stat.value}
                </div>
                <div className="text-[14px] text-[#4b5563] font-medium">
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