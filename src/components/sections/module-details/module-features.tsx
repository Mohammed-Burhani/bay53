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
    <section className="py-20 px-4 bg-gray-50">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-semibold text-indigo-600 tracking-wide uppercase mb-2">Section 3</h2> */}
          <h3 className="text-4xl font-bold text-gray-900">Key Features & Capabilities</h3>
        </div>

        <div className="bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-xl shadow-indigo-100/50 border border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {validFeatures.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all group text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-2xl bg-indigo-50 group-hover:bg-indigo-600 transition-colors flex items-center justify-center">
                    {renderIcon(feature.icon)}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
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
