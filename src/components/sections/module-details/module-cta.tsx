import React from 'react';
import { Button } from '@/components/ui/button';

interface ModuleCTAProps {
  moduleName: string;
}

const ModuleCTA = ({ moduleName }: ModuleCTAProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-white to-[#f0fdf4]">
      <div className="px-7 mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#60a5fa] via-[#10b981] to-[#22d3ee] rounded-[2.5rem] p-12 lg:p-20 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              {moduleName || "Ready to transform your management? Start your journey with Bay53 ERP today."}
            </h2>
            <div className="flex justify-center mt-10">
              <Button size="lg" variant="default" className="bg-white text-[#0f172a] hover:bg-white/95 px-10 py-5 text-lg shadow-2xl hover:shadow-3xl font-semibold border-0">
                Request a Personalised Demo
              </Button>
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
