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

  const challengeBgColors = ["bg-red-50", "bg-orange-50", "bg-amber-50"];
  const solutionBgColors = ["bg-green-50", "bg-blue-50", "bg-indigo-50"];

  // Handle null or undefined arrays
  const validChallenges = challenges || [];
  const validSolutions = solutions || [];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Section 2</h2> */}
          <h3 className="text-4xl font-bold text-gray-900">Understanding Your Challenges & Our Solutions</h3>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Business Challenges */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-gray-800 pb-4 border-b border-gray-200">Business Challenges</h4>
              <div className="space-y-6">
                {validChallenges.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    {renderIcon(item.icon, challengeBgColors[index % challengeBgColors.length])}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Bay53 Solves Them */}
            <div className="space-y-8">
              <h4 className="text-2xl font-bold text-gray-800 pb-4 border-b border-gray-200">How Bay53 Solves Them</h4>
              <div className="space-y-6">
                {validSolutions.map((item, index) => (
                  <div key={index} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                    {renderIcon(item.icon, solutionBgColors[index % solutionBgColors.length])}
                    <div>
                      <h5 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h5>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
