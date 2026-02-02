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
    <section className="py-20 px-4 cta-gradient">
      <div className="px-7 mx-auto text-center">
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-medium">
          Join 1000+ companies that trust Bay53 for their business operations
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="default" className="bg-white text-indigo-600 hover:bg-white/95 shadow-lg hover:shadow-xl w-full sm:w-auto">
            <a href="/contact">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          
          <Button asChild size="lg" variant="outline" className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white w-full sm:w-auto backdrop-blur-sm">
            <a href="https://wa.me/917299002152" target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </a>
          </Button>
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