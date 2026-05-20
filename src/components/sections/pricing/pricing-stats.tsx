'use client';

import { pricingStats } from '@/data/pricing-data';

export default function PricingStats() {
  return (
    <section className="border-y border-[#e2e8f0] bg-[#f8fafc] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4">
          {pricingStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 text-4xl font-bold text-[#0f172a] md:text-5xl">{stat.value}</div>
              <div className="text-sm text-[#64748b] md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
