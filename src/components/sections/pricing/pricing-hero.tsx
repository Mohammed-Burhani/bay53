'use client';

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-white to-[#f1f5f9] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#0f172a] md:text-5xl lg:text-6xl">
            Pricing that&apos;s straightforward, flexible, and future-ready
          </h1>
          <p className="mb-8 text-lg text-[#475569] md:text-xl">
            Choose a plan that grows with your business
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748b]">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#10b981]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#10b981]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No surprise charges</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-[#10b981]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Scales with you</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
