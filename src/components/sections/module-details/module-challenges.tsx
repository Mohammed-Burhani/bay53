import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface ChallengeItem {
  icon?: any; // Sanity image object
  title: string;
  description: string;
}

interface ModuleChallengesProps {
  challenges: ChallengeItem[];
  solutions: ChallengeItem[];
}

const ModuleChallenges = ({ challenges, solutions }: ModuleChallengesProps) => {
  const renderIcon = (icon: any, bgColorClass: string) => {
    if (!icon) return null;
    
    const iconUrl = urlFor(icon).url();
    
    return (
      <div className={`shrink-0 w-12 h-12 rounded-xl ${bgColorClass} flex items-center justify-center p-2`}>
        <Image
          src={iconUrl}
          alt="Icon"
          width={400}
          height={400}
          className="w-8 h-8 object-contain"
        />
      </div>
    );
  };

  const challengeBgColors = ["bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff8787]/20", "bg-gradient-to-br from-[#ff8787]/20 to-[#fbbf24]/20", "bg-gradient-to-br from-[#fbbf24]/20 to-[#f59e0b]/20"];
  const solutionBgColors = ["bg-gradient-to-br from-[#10b981]/20 to-[#51cf66]/20", "bg-gradient-to-br from-[#60a5fa]/20 to-[#22d3ee]/20", "bg-gradient-to-br from-[#22d3ee]/20 to-[#a78bfa]/20"];

  // Handle null or undefined arrays
  const validChallenges = challenges || [];
  const validSolutions = solutions || [];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#fef3f2] to-white">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#0f172a]">Understanding Your <span className="gradient-text">Challenges</span> & Our Solutions</h3>
        </div>

        <div className="bg-gradient-to-br from-[#f8fafc] to-white rounded-3xl p-8 lg:p-12 border-2 border-white/50 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Challenges */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-[#0f172a] pb-4 border-b-2 border-[#e2e8f0]">Business Challenges</h4>
              <div className="space-y-6">
                {validChallenges.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-white/50 transition-all hover:shadow-xl hover:scale-105">
                    {renderIcon(item.icon, challengeBgColors[index % challengeBgColors.length])}
                    <div>
                      <h5 className="text-lg font-bold text-[#0f172a] mb-1">{item.title}</h5>
                      <p className="text-[#475569] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Bay53 Solves Them */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-[#0f172a] pb-4 border-b-2 border-[#e2e8f0]">How Bay53 Solves Them</h4>
              <div className="space-y-6">
                {validSolutions.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border-2 border-white/50 transition-all hover:shadow-xl hover:scale-105">
                    {renderIcon(item.icon, solutionBgColors[index % solutionBgColors.length])}
                    <div>
                      <h5 className="text-lg font-bold text-[#0f172a] mb-1">{item.title}</h5>
                      <p className="text-[#475569] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleChallenges;
