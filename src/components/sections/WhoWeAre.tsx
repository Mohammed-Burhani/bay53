import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-[2.25rem] font-bold text-[#111827] mb-6 leading-[1.3] tracking-tight">
              Who We Are
            </h2>
            <div className="space-y-4 text-[#4b5563] leading-[1.625] text-base">
              <p>
                Burhani Technologies is a leading software development company based in Chennai, specializing in custom ERP implementation, AI/ML automation, DevOps/Azure, and business process automation.
              </p>
              <p>
                With over 14 years of expertise serving healthcare, manufacturing, construction, and enterprise clients globally, we have established ourselves as trusted technology partners for businesses seeking digital transformation.
              </p>
              <p>
                Our flagship product, <strong className="font-bold text-[#111827]">Bay53</strong>, is a comprehensive cloud-based ERP solution designed specifically for Small and Medium Enterprises (SMEs). Bay53 enables businesses to quickly move away from manual processes to a fully integrated business solution.
              </p>
            </div>
          </div>

          {/* Right Column: Statistics Grid Card */}
          <div className="w-full">
            <div className="rounded-xl bg-white border-2 border-[#e0e7ff] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="p-10">
                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold text-[#4f46e5] mb-2 leading-none">
                      14+
                    </div>
                    <div className="text-sm font-medium text-[#4b5563]">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold text-[#4f46e5] mb-2 leading-none">
                      1000+
                    </div>
                    <div className="text-sm font-medium text-[#4b5563]">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold text-[#4f46e5] mb-2 leading-none">
                      500+
                    </div>
                    <div className="text-sm font-medium text-[#4b5563]">
                      Active Installations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold text-[#4f46e5] mb-2 leading-none">
                      10,000+
                    </div>
                    <div className="text-sm font-medium text-[#4b5563]">
                      Support Tickets Resolved
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;