import React from 'react';
import { Database, LogIn, BarChart3 } from 'lucide-react';

const SeamlessIntegration = () => {
  const integrations = [
    {
      title: 'Single Database',
      description: 'All modules share the same database, ensuring real-time data consistency across your organization',
      icon: <Database className="h-6 w-6 text-[#60a5fa]" />,
      bgIcon: 'bg-gradient-to-br from-[#60a5fa]/20 to-[#22d3ee]/20',
    },
    {
      title: 'Single Sign-On',
      description: 'Access all modules with one login. Role-based permissions control what each user can see and do',
      icon: <LogIn className="h-6 w-6 text-[#10b981]" />,
      bgIcon: 'bg-gradient-to-br from-[#10b981]/20 to-[#51cf66]/20',
    },
    {
      title: 'Unified Reporting',
      description: 'Generate comprehensive reports spanning multiple modules for complete business insights',
      icon: <BarChart3 className="h-6 w-6 text-[#a78bfa]" />,
      bgIcon: 'bg-gradient-to-br from-[#a78bfa]/20 to-[#ec4899]/20',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#ecfeff] via-white to-[#f0fdf4]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-[#0f172a] mb-4 tracking-tight leading-[1.3]">
            Seamless <span className="gradient-text">Integration</span>
          </h2>
          <p className="text-[1rem] text-[#475569] max-w-2xl mx-auto leading-[1.6]">
            All modules work together as a unified system, ensuring data consistency and eliminating duplicate entries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 border-2 border-white/50 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-[#60a5fa]/30 transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.bgIcon} group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#10b981] transition-all duration-300`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: `h-6 w-6 ${
                      item.title === 'Single Database' ? 'text-[#60a5fa]' : 
                      item.title === 'Single Sign-On' ? 'text-[#10b981]' : 
                      'text-[#a78bfa]'
                    } group-hover:text-white transition-colors duration-300`
                  })}
                </div>
                
                <h3 className="text-[1.5rem] font-semibold text-[#0f172a] mb-4 leading-[1.4]">
                  {item.title}
                </h3>
                
                <p className="text-[1rem] text-[#475569] leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeamlessIntegration;