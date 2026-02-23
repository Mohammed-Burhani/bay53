import React from 'react';
import { 
  Cloud, 
  ArrowRight, 
  Award, 
  Package, 
  BarChart3, 
  Shield 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const featureData = [
  {
    icon: <Cloud className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "AI-Powered Solution",
    description: "Access your business data anytime, anywhere with our secure AI infrastructure. No hardware investments required."
  },
  {
    icon: <ArrowRight className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "Fully Integrated",
    description: "Seamless integration across all modules ensuring data consistency and eliminating duplicate entries."
  },
  {
    icon: <Award className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "Highly Customizable",
    description: "Tailor the system to your unique business processes with flexible configuration options and custom workflows."
  },
  {
    icon: <Package className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "Mobile Responsive",
    description: "Work on-the-go with our mobile-optimized interface. Compatible with all devices and screen sizes."
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "Real-Time Analytics",
    description: "Make informed decisions with real-time dashboards, reports, and business intelligence tools."
  },
  {
    icon: <Shield className="h-7 w-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with role-based access, data encryption, and automated backups."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-[#0f172a] mb-4 tracking-tight leading-[1.2]">
            Why Choose <span className="gradient-text">BAY53</span>?
          </h2>
          <p className="text-[1.25rem] text-[#475569] max-w-3xl mx-auto leading-[1.6]">
            Powerful features designed to streamline your business operations and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white/80 backdrop-blur-sm text-card-foreground shadow-lg border-2 border-white/50 hover:border-[#60a5fa]/30 hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-6 pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-[#60a5fa]/20 to-[#10b981]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#10b981] transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[1.25rem] font-semibold text-[#0f172a] mb-3 leading-[1.4]">
                  {feature.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-[1rem]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-2 border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa]/10 font-semibold">
            <a href="/features">
              View All Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;