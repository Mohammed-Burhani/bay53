import React from 'react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "End-to-End Custom Development",
      description: "From architecture to deployment, we build solutions tailored to your exact requirements using the latest tech stacks."
    },
    {
      title: "Agile + DevOps Methodology",
      description: "Quick delivery cycles with continuous integration, automated testing, and iterative releases for faster time-to-market."
    },
    {
      title: "Flexible Fulfillment Standards",
      description: "No cookie-cutter solutions. Every system adapts to your unique business processes and scales with you."
    },
    {
      title: "Full-Stack Ownership",
      description: "Design, development, deployment, integration, and ongoing support - one partner for your entire digital transformation."
    },
    {
      title: "Industry-Proven Expertise",
      description: "Deep experience in healthcare, manufacturing, construction, and automotive systems with proven track record."
    },
    {
      title: "Dedicated Support",
      description: "Our commitment to quality and deep understanding of your industry ensures continuous support and guidance."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#fef3f2] to-white">
      <div className="px-7 mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4 tracking-tight">
            Why Enterprise Teams <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence and deep industry expertise sets us apart
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-lg hover:border-[#60a5fa]/30 hover:shadow-xl transition-all duration-300 group hover:scale-105"
            >
              <div className="p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-3 group-hover:text-[#60a5fa] transition-colors duration-200">
                  {advantage.title}
                </h3>
                <p className="text-[#475569] leading-relaxed text-base">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;