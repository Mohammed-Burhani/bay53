import React from 'react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

interface FeatureItem {
  icon?: any; // Sanity image object
  title: string;
  description: string;
}

interface ModuleFeaturesProps {
  features: FeatureItem[];
}

const ModuleFeatures = ({ features }: ModuleFeaturesProps) => {
  const renderIcon = (icon: any) => {
    if (!icon) return null;
    
    const iconUrl = urlFor(icon).url();
    
    return (
      <Image
        src={iconUrl}
        alt="Feature icon"
        width={400}
        height={400}
        className="w-8 h-8 object-contain"
      />
    );
  };

  // Handle null or undefined array
  const validFeatures = features || [];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-[#0f172a]">Key <span className="gradient-text">Features</span> & Capabilities</h3>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-16 shadow-2xl border-2 border-white/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validFeatures.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-white/50 hover:border-[#60a5fa]/30 hover:shadow-xl transition-all group text-center hover:scale-105">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#60a5fa]/20 to-[#10b981]/20 group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#10b981] transition-all flex items-center justify-center">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#60a5fa] transition-colors">
                  {feature.title}
                </h4>
                <p className="text-[#475569] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModuleFeatures;
