"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-20 px-4 cta-gradient">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
          Join 1000+ companies that trust Bay53 for their business operations
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="/contact" 
            className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-md font-semibold text-lg hover:bg-opacity-95 shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <a 
            href="https://wa.me/917299002152" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 bg-white/10 text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto backdrop-blur-sm"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <style jsx global>{`
        .cta-gradient {
          background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
        }
      `}</style>
    </section>
  );
};

export default CTASection;