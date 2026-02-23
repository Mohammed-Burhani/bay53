import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon?: any; // Sanity image object
}

interface ModuleWorkflowProps {
  moduleName: string;
  workflow: WorkflowStep[];
}

const ModuleWorkflow = ({ moduleName, workflow }: ModuleWorkflowProps) => {
  const renderIcon = (icon: any) => {
    if (!icon) return null;
    
    const iconUrl = urlFor(icon).url();
    
    return (
      <Image
        src={iconUrl}
        alt="Workflow step icon"
        width={400}
        height={400}
        className="w-8 h-8 object-contain group-hover:brightness-0 group-hover:invert transition-all duration-300"
      />
    );
  };

  // Handle null or undefined array
  const validWorkflow = workflow || [];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#ecfeff] to-white overflow-hidden">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#0f172a]">How the BAY53 <span className="gradient-text">{moduleName}</span> Workflow Works</h3>
        </div>

        <div className="relative bg-gradient-to-br from-[#ecfeff]/50 to-[#f0fdf4]/50 rounded-[3rem] p-12 lg:p-20 border-2 border-white/50 shadow-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {validWorkflow.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-white shadow-xl border-2 border-white/50 flex items-center justify-center text-[#60a5fa] mb-6 group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#10b981] transition-all duration-300">
                    {renderIcon(step.icon)}
                  </div>
                  <h4 className="text-lg font-bold text-[#0f172a] mb-3">{step.title}</h4>
                  <p className="text-[#475569] text-sm leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for desktop */}
                {index < validWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#10b981]">
                    <div className="absolute right-0 -top-1.5 border-t-2 border-r-2 border-[#10b981] w-3 h-3 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Decorative background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/40 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default ModuleWorkflow;
