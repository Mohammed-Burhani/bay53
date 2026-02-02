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

const features = [
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

const FeatureSetGrid = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="px-7 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Complete Feature Set
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to run your business efficiently
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white text-card-foreground shadow-sm border-2 border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-6 pt-6">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors duration-300">
                  <feature.icon 
                    className="h-8 w-8 text-indigo-600 group-hover:text-white transition-colors duration-300" 
                    strokeWidth={2}
                  />
                </div>
                
                {/* Text Content */}
                <h3 className="text-[1.25rem] font-semibold text-gray-900 mb-3 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[1.0625rem]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSetGrid;