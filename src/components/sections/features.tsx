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
    title: "Cloud-Based Solution",
    description: "Access your business data anytime, anywhere with our secure cloud infrastructure. No hardware investments required."
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
    <section className="py-20 px-4 bg-white">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] font-bold text-gray-900 mb-4 tracking-tight leading-[1.2]">
            Why Choose Bay53?
          </h2>
          <p className="text-[1.25rem] text-gray-600 max-w-3xl mx-auto leading-[1.6]">
            Powerful features designed to streamline your business operations and drive growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div 
              key={index}
              className="rounded-xl bg-white text-card-foreground shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-2 border-gray-100 hover:border-indigo-200 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1)] transition-all duration-300 group"
            >
              <div className="p-6 pt-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-[1.25rem] font-semibold text-gray-900 mb-3 leading-[1.4]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[1rem]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
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