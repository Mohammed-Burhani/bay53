'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket, Users, TrendingUp } from 'lucide-react';

interface ModuleCTAProps {
  moduleName: string;
  productUrl?: string;
  trialDuration?: string;
  useCases?: { industry: string; scenario: string }[];
}

const ModuleCTA = ({ 
  moduleName, 
  productUrl = '#',
  trialDuration = '14 days',
  useCases = []
}: ModuleCTAProps) => {
  return (
    <section id="module-cta" className="py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-white to-[#f0fdf4]">
      <div className="px-7 mx-auto max-w-7xl">
        {/* Use Cases Section - Industry Specific */}
        {useCases && useCases.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#0f172a] mb-4">
                Built for Your Industry
              </h3>
              <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
                See how businesses like yours are using this module
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-[#e2e8f0]"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#60a5fa] to-[#10b981] flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-[#0f172a] text-lg">
                      {useCase.industry}
                    </h4>
                  </div>
                  <p className="text-[#64748b] leading-relaxed">
                    {useCase.scenario}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main CTA Card */}
        <div className="relative overflow-hidden bg-gradient-to-r from-[#60a5fa] via-[#10b981] to-[#22d3ee] rounded-[2.5rem] p-12 lg:p-20">
          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {moduleName || "Ready to transform your operations?"}
              </h2>
              
              <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our platform. Start your free {trialDuration} trial today—no credit card required.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <a href={productUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#0f172a] hover:bg-white/95 px-10 py-6 text-lg shadow-2xl hover:shadow-3xl font-semibold border-0 group w-full sm:w-auto"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 px-10 py-6 text-lg font-semibold w-full sm:w-auto"
                  onClick={() => window.location.href = '/contact'}
                >
                  Talk to Sales
                </Button>
              </div>
              
              {/* Stats/Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Quick Setup</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">Ready in minutes</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">Expert Support</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">24/7 assistance</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <Rocket className="w-5 h-5" />
                    <span className="font-semibold">No Commitment</span>
                  </div>
                  <p className="text-white/80 text-sm mt-1">Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ModuleCTA;
