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
      className="py-[80px] px-4 bg-gradient-to-r from-[#4f46e5] to-[#9333ea]"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[896px] mx-auto text-center text-white">
        {/* Heading: Experience Bay53 in Action */}
        <h2 
          id="cta-heading"
          className="text-[36px] md:text-[40px] font-bold mb-6 tracking-tight leading-[1.2]"
        >
          Experience Bay53 in Action
        </h2>

        {/* Subtext */}
        <p className="text-[18px] md:text-[20px] mb-8 opacity-90 leading-[1.625] max-w-[768px] mx-auto">
          See how our features can transform your business operations
        </p>

        {/* Request a Demo Button */}
        <div className="flex justify-center">
          <Button asChild size="lg" variant="default" className="h-[60px] px-8 bg-white text-[#4f46e5] hover:bg-gray-100 hover:text-[#4f46e5] text-[18px] shadow-lg hover:shadow-xl">
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