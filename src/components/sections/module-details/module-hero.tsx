import React from 'react';

interface ModuleHeroProps {
  title: string;
  description: string;
  image: string;
}

const ModuleHero = ({ title, description, image }: ModuleHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
                Get Started
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100">
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleHero;
