import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const benefits = [
  {
    title: "Increase ROI and Productivity",
    description: "BAY53 streamlines all your business processes and eliminates any duplication or unnecessary wastage of resources. Automated workflows reduce manual errors and free up your team to focus on strategic initiatives."
  },
  {
    title: "Enhanced Decision Making",
    description: "Real-time dashboards and comprehensive reports provide actionable insights. Make data-driven decisions with confidence using our advanced analytics and business intelligence tools."
  },
  {
    title: "Improved Collaboration",
    description: "Break down information silos with integrated modules. Every department works with the same real-time data, ensuring consistency and improving cross-functional collaboration."
  },
  {
    title: "Scalable Growth",
    description: "BAY53 grows with your business. Add new users, modules, and locations as needed without disruption. Our flexible architecture supports your expansion plans."
  },
  {
    title: "Compliance & Control",
    description: "Stay compliant with regulatory requirements through automated tracking and reporting. Maintain complete audit trails and ensure data security with role-based access controls."
  },
  {
    title: "Lower TCO",
    description: "Reduce total cost of ownership with our AI-Powered solution. No hardware investments, no maintenance overhead, and predictable subscription pricing."
  }
];

const BusinessBenefits = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-[#0f172a] mb-4 tracking-tight leading-[1.2]">
            Business <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-[1.125rem] text-[#475569] leading-[1.5]">
            Real outcomes that make a difference to your bottom line
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="rounded-xl bg-white/80 backdrop-blur-sm text-[#0f172a] shadow-lg border-2 border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 pt-6">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#10b981]/20 to-[#51cf66]/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <CircleCheckBig className="h-6 w-6 text-[#10b981]" />
                  </div>
                  <h3 className="text-[1.25rem] font-semibold text-[#0f172a] leading-[1.5]">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-[#475569] text-[1rem] leading-[1.625]">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;