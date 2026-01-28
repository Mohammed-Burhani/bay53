import React from 'react';

interface ModuleCTAProps {
  moduleName: string;
}

const ModuleCTA = ({ moduleName }: ModuleCTAProps) => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 rounded-[2.5rem] p-12 lg:p-20 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to transform your {moduleName} management?<br />
              Start your journey with Bay53 ERP today.
            </h2>
            <div className="flex justify-center mt-10">
              <button className="bg-white text-indigo-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl shadow-black/10">
                Request a Personalised Demo
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default ModuleCTA;
