import React from 'react';
import { Button } from '@/components/ui/button';

interface ModuleHeroProps {
  title: string;
  description: string;
  image: string;
}

const ModuleHero = ({ title, description, image }: ModuleHeroProps) => {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-white/95 mb-8 leading-[1.625] drop-shadow-md">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="default" className="px-8 py-4 shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleHero;
