import React from 'react';
import { Target, Award } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Our Vision Card */}
          <div className="rounded-xl bg-white text-card-foreground shadow border-2 border-transparent hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
            <div className="p-6 pt-6 md:p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-base font-normal">
                To be the leading provider of innovative ERP solutions that empower businesses to achieve operational excellence and sustainable growth. We envision a future where every business, regardless of size, has access to enterprise-grade technology that drives efficiency and competitiveness.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="rounded-xl bg-white text-card-foreground shadow border-2 border-transparent hover:border-indigo-200 hover:shadow-xl transition-all duration-300">
            <div className="p-6 pt-6 md:p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-base font-normal">
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