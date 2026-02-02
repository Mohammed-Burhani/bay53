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
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="px-7 relative z-10 max-w-5xl">
        <div className="">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
            {description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="default" className="px-8 py-4 shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleHero;
