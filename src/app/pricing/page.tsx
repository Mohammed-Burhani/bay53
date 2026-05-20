import { Metadata } from 'next';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import PricingHero from '@/components/sections/pricing/pricing-hero';
import PricingPlans from '@/components/sections/pricing/pricing-plans';
import PricingComparison from '@/components/sections/pricing/pricing-comparison';
import PricingFAQ from '@/components/sections/pricing/pricing-faq';
import PricingCTA from '@/components/sections/pricing/pricing-cta';
import PricingStats from '@/components/sections/pricing/pricing-stats';

export const metadata: Metadata = {
  title: 'Pricing - Transparent & Flexible Plans | BAY53 ERP',
  description: 'Choose the perfect plan for your business. Straightforward pricing that scales with you. 14-day free trial, no surprise charges.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingHero />
        <PricingPlans />
        <PricingComparison />
        <PricingStats />
        <PricingFAQ />
        <PricingCTA />
      </main>
      <Footer />
    </div>
  );
}
