"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * CTASection Component
 * 
 * Clones the conversion section with a vibrant purple-to-indigo gradient background,
 * centered white text, and action buttons for 'Get Started Today' and 'Chat on WhatsApp'.
 * 
 * Design matches the pre-footer CTA specified in the high-level design system.
 */
const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] via-[#10b981] to-[#22d3ee]" />
      
      {/* Animated orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      
      <div className="px-7 mx-auto text-center relative z-10">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/95 text-xl mb-10 max-w-2xl mx-auto font-medium">
          Join 1000+ companies that trust Bay53 for their business operations
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="default" className="bg-white text-[#0f172a] hover:bg-white/95 shadow-xl hover:shadow-2xl w-full sm:w-auto font-semibold border-0">
            <a href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-2 border-white/60 bg-white/10 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto backdrop-blur-sm font-semibold">
            <a href="https://wa.me/917299002152" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;