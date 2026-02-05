import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const TechnicalSpecs = () => {
  const specs = [
    {
      title: "Platform & Infrastructure",
      items: [
        "100% Web-based - No installation required",
        "AI-hosted on enterprise-grade servers",
        "99.9% uptime guarantee",
        "Automatic backups every 24 hours",
        "SSL encryption for data security"
      ]
    },
    {
      title: "Compatibility & Access",
      items: [
        "Works on all modern browsers",
        "Mobile responsive design",
        "Multi-device synchronization",
        "RESTful API for integrations",
        "Multi-language support"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Technical Specifications
          </h2>
          <p className="text-lg text-gray-600">
            Built on modern technology stack for reliability and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specs.map((group, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-white text-gray-900 shadow-sm border-2 border-gray-100 p-6 pt-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CircleCheckBig 
                      className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" 
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-700 font-normal leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;