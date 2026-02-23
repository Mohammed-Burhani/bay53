import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * DemoCTA Component
 * 
 * A vibrant call-to-action section featuring an indigo-to-purple gradient background,
 * high-impact heading, and a request demo button with an arrow icon.
 */
const DemoCTA: React.FC = () => {
  return (
    <section 
      className="py-[80px] px-4 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] via-[#10b981] to-[#22d3ee]" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="max-w-[896px] mx-auto text-center relative z-10">
        {/* Heading: Experience BAY53 in Action */}
        <h2 
          id="cta-heading"
          className="text-[36px] md:text-[40px] font-bold mb-6 tracking-tight leading-[1.2] text-white"
        >
          Experience <span className="drop-shadow-lg">BAY53</span> in Action
        </h2>

        {/* Subtext */}
        <p className="text-[18px] md:text-[20px] mb-8 leading-[1.625] max-w-[768px] mx-auto font-medium text-white/95">
          See how our features can transform your business operations
        </p>

        {/* Request a Demo Button */}
        <div className="flex justify-center">
          <Button asChild size="lg" variant="default" className="h-[60px] px-8 bg-white text-[#0f172a] hover:bg-white/95 text-[18px] shadow-xl hover:shadow-2xl font-semibold border-0">
            <a href="/contact">
              Request a Demo
              <ArrowRight className="ml-2 h-5 w-5 shrink-0" strokeWidth={2} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;