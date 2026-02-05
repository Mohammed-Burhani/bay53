import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      title: "Application Development",
      description: "Custom applications tailored to your business needs"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and save time"
    },
    {
      title: "AI Solutions",
      description: "Secure AI services for enhanced collaboration"
    },
    {
      title: "DevOps and Maintenance",
      description: "Smooth deployment and ongoing maintenance"
    },
    {
      title: "Data Analysis and Reporting",
      description: "Turn data into actionable insights"
    },
    {
      title: "UX/UI Design",
      description: "Intuitive interfaces for better user experience"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[2.25rem] md:text-4xl font-bold text-[#111827] mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-[#4b5563] max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="rounded-xl bg-[#ffffff] text-[#111827] shadow-sm border-2 border-transparent hover:border-[#e0e7ff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="p-6 pt-6">
                <div className="flex items-start mb-3">
                  <div className="mr-3 mt-1 flex-shrink-0">
                    <CircleCheckBig 
                      className="h-6 w-6 text-[#16a34a]" 
                      strokeWidth={2}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#111827] mb-2 leading-[1.4]">
                      {service.title}
                    </h3>
                    <p className="text-[#4b5563] text-sm leading-[1.625]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;