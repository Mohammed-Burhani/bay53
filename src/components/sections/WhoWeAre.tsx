import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#ecfeff] to-white">
      <div className="px-7 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h2 className="text-[2.25rem] font-bold text-[#0f172a] mb-6 leading-[1.3] tracking-tight">
              Who We <span className="gradient-text">Are</span>
            </h2>
            <div className="space-y-4 text-[#475569] leading-[1.625] text-base">
              <p>
                Burhani Technologies is a leading software development company based in Chennai, specializing in custom ERP implementation, AI/ML automation, DevOps/Azure, and business process automation.
              </p>
              <p>
                With over 14 years of expertise serving healthcare, manufacturing, construction, and enterprise clients globally, we have established ourselves as trusted technology partners for businesses seeking digital transformation.
              </p>
              <p>
                Our flagship product, <strong className="font-bold text-[#0f172a]">BAY53</strong>, is a comprehensive AI-Powered ERP solution designed specifically for Small and Medium Enterprises (SMEs). BAY53 enables businesses to quickly move away from manual processes to a fully integrated business solution.
              </p>
            </div>
          </div>

          {/* Right Column: Statistics Grid Card */}
          <div className="w-full">
            <div className="rounded-xl bg-white/80 backdrop-blur-sm border-2 border-white/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="p-10">
                <div className="grid grid-cols-2 gap-y-12 gap-x-8">
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold bg-gradient-to-r from-[#ff6b6b] to-[#ff8787] bg-clip-text text-transparent mb-2 leading-none">
                      14+
                    </div>
                    <div className="text-sm font-medium text-[#475569]">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold bg-gradient-to-r from-[#51cf66] to-[#22d3ee] bg-clip-text text-transparent mb-2 leading-none">
                      1000+
                    </div>
                    <div className="text-sm font-medium text-[#475569]">
                      Happy Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold bg-gradient-to-r from-[#22d3ee] to-[#60a5fa] bg-clip-text text-transparent mb-2 leading-none">
                      500+
                    </div>
                    <div className="text-sm font-medium text-[#475569]">
                      Active Installations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-[2.25rem] font-bold bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent mb-2 leading-none">
                      10,000+
                    </div>
                    <div className="text-sm font-medium text-[#475569]">
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