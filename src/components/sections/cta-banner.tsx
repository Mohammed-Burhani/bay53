import React from 'react';
import { ArrowRight } from 'lucide-react';

const CtaBanner = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#4f46e5] to-[#9333ea] text-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Heading */}
        <h2 
          className="text-white mb-6"
          style={{
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.025em'
          }}
        >
          Start with the Modules You Need
        </h2>

        {/* Subtext */}
        <p 
          className="max-w-3xl mx-auto mb-10 text-white/90"
          style={{
            fontSize: '20px',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          Begin with core modules and add more as your business grows. Our flexible pricing scales with your needs.
        </p>

        {/* Action Button */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap bg-white text-[#4f46e5] font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          style={{
            height: '48px',
            paddingLeft: '32px',
            paddingRight: '32px',
            borderRadius: '9999px',
            fontSize: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
          }}
        >
          Discuss Your Requirements
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;