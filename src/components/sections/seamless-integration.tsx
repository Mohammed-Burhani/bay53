import React from 'react';
import { Database, LogIn, BarChart3 } from 'lucide-react';

const SeamlessIntegration = () => {
  const integrations = [
    {
      title: 'Single Database',
      description: 'All modules share the same database, ensuring real-time data consistency across your organization',
      icon: <Database className="h-6 w-6 text-indigo-600" />,
      bgIcon: 'bg-indigo-50',
    },
    {
      title: 'Single Sign-On',
      description: 'Access all modules with one login. Role-based permissions control what each user can see and do',
      icon: <LogIn className="h-6 w-6 text-green-600" />,
      bgIcon: 'bg-green-50',
    },
    {
      title: 'Unified Reporting',
      description: 'Generate comprehensive reports spanning multiple modules for complete business insights',
      icon: <BarChart3 className="h-6 w-6 text-purple-600" />,
      bgIcon: 'bg-purple-50',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/50">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-[#111827] mb-4 tracking-tight leading-[1.3]">
            Seamless Integration
          </h2>
          <p className="text-[1rem] text-[#4b5563] max-w-2xl mx-auto leading-[1.6]">
            All modules work together as a unified system, ensuring data consistency and eliminating duplicate entries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-indigo-300 transform hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div 
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.bgIcon} group-hover:bg-indigo-600 transition-colors duration-300`}
                >
                  {/* Clone the icon and change its color on hover */}
                  {React.cloneElement(item.icon as React.ReactElement, {
                    className: `h-6 w-6 ${
                      item.title === 'Single Database' ? 'text-indigo-600' : 
                      item.title === 'Single Sign-On' ? 'text-green-600' : 
                      'text-purple-600'
                    } group-hover:text-white transition-colors duration-300`
                  })}
                </div>
                
                <h3 className="text-[1.5rem] font-semibold text-[#111827] mb-4 leading-[1.4]">
                  {item.title}
                </h3>
                
                <p className="text-[1rem] text-[#4b5563] leading-[1.6]">
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