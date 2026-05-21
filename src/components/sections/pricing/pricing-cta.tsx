'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PricingCTA() {
  return (
    <section className="bg-gradient-to-br from-[#60a5fa] via-[#3b82f6] to-[#10b981] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to transform your business?
          </h2>
          <p className="mb-8 text-lg text-white/90 md:text-xl">
            Join thousands of businesses that trust us to power their operations
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-white text-[#60a5fa] hover:bg-white/90 shadow-xl">
                Start your free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-none text-white hover:scale-110 bg-linear-to-r from-primary to-brand-cyan">
              Schedule a demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/80">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
