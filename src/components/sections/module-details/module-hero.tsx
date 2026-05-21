'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface ModuleHeroProps {
  title: string;
  description: string;
  image: string;
  productUrl?: string;
  trialDuration?: string;
  targetAudience?: string[];
}

const ModuleHero = ({ 
  title, 
  description, 
  image, 
  productUrl = '#',
  trialDuration = '14 days',
  targetAudience = []
}: ModuleHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/70 to-[#0f172a]/60"></div>
      </div>
      
      {/* Decorative elements with vibrant colors */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#60a5fa]/20 to-[#10b981]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#22d3ee]/20 to-[#a78bfa]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="px-7 relative z-10 max-w-5xl">
        <div className="">
          {/* Target Audience Badge */}
          {targetAudience && targetAudience.length > 0 && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#22d3ee]" />
              <span className="text-sm text-white font-medium">
                Perfect for {targetAudience.join(', ')}
              </span>
            </div>
          )}
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-white/95 mb-8 leading-[1.625] drop-shadow-md">
            {description}
          </p>
          
          {/* CTA Buttons with Trial Focus */}
          <div className="flex flex-wrap gap-4">
            <Link href="/signup">
              <Button 
                size="lg" 
                className="px-8 py-6 text-lg shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold group"
              >
                Start Free {trialDuration} Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 font-semibold"
              onClick={() => {
                const ctaSection = document.getElementById('module-cta');
                ctaSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
              <span>Setup in minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#10b981]" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleHero;
