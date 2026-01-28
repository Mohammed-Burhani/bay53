import React from 'react';
import { 
  Cloud, 
  Link as LinkIcon, 
  Wrench, 
  Smartphone, 
  ChartLine, 
  Lock, 
  Zap, 
  DollarSign, 
  Headphones 
} from 'lucide-react';

const FEATURE_DATA = [
  {
    icon: Cloud,
    title: "Cloud-Based Solution",
    description: "Access your business data anytime, anywhere with our secure cloud infrastructure. No hardware investments required."
  },
  {
    icon: LinkIcon,
    title: "Fully Integrated",
    description: "Seamless integration across all modules ensuring data consistency and eliminating duplicate entries."
  },
  {
    icon: Wrench,
    title: "Highly Customizable",
    description: "Tailor the system to your unique business processes with flexible configuration options and custom workflows."
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Work on-the-go with our mobile-optimized interface. Compatible with all devices and screen sizes."
  },
  {
    icon: ChartLine,
    title: "Real-Time Analytics",
    description: "Make informed decisions with real-time dashboards, reports, and business intelligence tools."
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with role-based access, data encryption, and automated backups."
  },
  {
    icon: Zap,
    title: "Quick Deployment",
    description: "Get started quickly with our streamlined implementation process. Go live in weeks, not months."
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Lower total cost of ownership with no upfront hardware costs and flexible subscription pricing."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated support team available round the clock to assist you with any queries or issues."
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-[#111827] mb-4 tracking-[-0.025em] leading-[1.2]">
            Complete Feature Set
          </h2>
          <p className="text-[1.125rem] text-[#4b5563] font-normal leading-[1.5]">
            Everything you need to run your business efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_DATA.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white text-[#111827] shadow-sm border-2 border-[#e5e7eb] hover:border-[#c7d2fe] hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-[#eef2ff] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#4f46e5] transition-colors duration-300">
                  <feature.icon 
                    className="h-8 w-8 text-[#4f46e5] group-hover:text-white transition-colors duration-300" 
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-[1.25rem] font-semibold text-[#111827] mb-3 leading-[1.5]">
                  {feature.title}
                </h3>
                <p className="text-[#4b5563] text-[1rem] leading-[1.625]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}