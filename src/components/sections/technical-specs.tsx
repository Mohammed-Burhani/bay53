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
    <section className="py-20 px-4 bg-gradient-to-br from-[#ecfeff] via-white to-[#f0fdf4]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4 tracking-tight">
            Technical <span className="gradient-text">Specifications</span>
          </h2>
          <p className="text-lg text-[#475569]">
            Built on modern technology stack for reliability and performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {specs.map((group, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-white/80 backdrop-blur-sm text-[#0f172a] shadow-lg border-2 border-white/50 p-6 pt-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-[#0f172a] mb-6">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CircleCheckBig 
                      className="h-5 w-5 text-[#10b981] mr-3 mt-0.5 shrink-0" 
                      strokeWidth={2.5}
                    />
                    <span className="text-[#475569] font-normal leading-normal">
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