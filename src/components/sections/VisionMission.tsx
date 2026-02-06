import React from 'react';
import { Target, Award } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Vision Card */}
          <div className="rounded-xl bg-white/80 backdrop-blur-sm text-card-foreground shadow-lg border-2 border-white/50 hover:border-[#60a5fa]/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="p-6 pt-6 md:p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#60a5fa]/20 to-[#22d3ee]/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[#60a5fa]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Our Vision
              </h3>
              <p className="text-[#475569] leading-relaxed text-base font-normal">
                To be the leading provider of innovative ERP solutions that empower businesses to achieve operational excellence and sustainable growth. We envision a future where every business, regardless of size, has access to enterprise-grade technology that drives efficiency and competitiveness.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="rounded-xl bg-white/80 backdrop-blur-sm text-card-foreground shadow-lg border-2 border-white/50 hover:border-[#10b981]/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="p-6 pt-6 md:p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#10b981]/20 to-[#51cf66]/20 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-[#10b981]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Our Mission
              </h3>
              <p className="text-[#475569] leading-relaxed text-base font-normal">
                To deliver cutting-edge, customized ERP solutions that streamline operations, boost market presence, and drive profitability. We are committed to helping businesses scale efficiently with technology-driven strategies, exceptional support, and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;