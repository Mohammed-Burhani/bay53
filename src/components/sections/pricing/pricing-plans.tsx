'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';
import { BillingPeriod } from '@/types/pricing';
import { pricingTiers } from '@/data/pricing-data';

export default function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('yearly');

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Billing Toggle */}
        <div className="mb-12 flex justify-center">
          <Tabs
            value={billingPeriod}
            onValueChange={(value) => setBillingPeriod(value as BillingPeriod)}
            className="w-auto"
          >
            <TabsList className="grid w-full grid-cols-2 bg-[#f1f5f9]">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-white data-[state=active]:text-[#60a5fa]">Monthly</TabsTrigger>
              <TabsTrigger value="yearly" className="data-[state=active]:bg-white data-[state=active]:text-[#60a5fa]">
                Yearly
                <Badge variant="secondary" className="ml-2 text-xs bg-[#10b981] text-white">
                  Save 30%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3 md:grid-cols-2">
          {pricingTiers.map((tier) => {
            const price = billingPeriod === 'monthly' ? tier.monthlyPrice : tier.yearlyPrice;
            const employeePrice = billingPeriod === 'monthly' ? tier.monthlyPrice.employee : tier.yearlyPrice.employee;
            const isEnterprise = tier.id === 'enterprise';
            const isFree = tier.id === 'free';

            return (
              <Card
                key={tier.name}
                className={`relative flex flex-col border-2 ${
                  tier.popular ? 'border-[#60a5fa] shadow-xl' : 'border-[#e2e8f0]'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="px-4 py-1 bg-gradient-to-r from-[#60a5fa] to-[#10b981] text-white">Most Popular</Badge>
                  </div>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl text-[#0f172a]">{tier.name}</CardTitle>
                  <CardDescription className="mt-2 text-base text-[#475569]">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  {/* Pricing */}
                  {isEnterprise ? (
                    <div className="mb-6 space-y-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-[#0f172a]">Custom</span>
                        </div>
                        <p className="mt-1 text-sm text-[#64748b]">
                          Tailored pricing based on your requirements
                        </p>
                      </div>
                    </div>
                  ) : isFree ? (
                    <div className="mb-6 space-y-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-[#0f172a]">₹0</span>
                          <span className="text-[#64748b]">
                            forever
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[#64748b]">
                          Up to 3 users included
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="mb-6 space-y-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-bold text-[#0f172a]">₹{price.user}</span>
                          <span className="text-[#64748b]">
                            per user/month
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[#64748b]">
                          billed {billingPeriod}
                        </p>
                      </div>

                      <div className="border-t border-[#e2e8f0] pt-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-[#0f172a]">₹{employeePrice}</span>
                          <span className="text-[#64748b]">
                            per employee/month
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-[#64748b]">
                          billed {billingPeriod}
                        </p>
                      </div>

                      <p className="text-sm text-[#64748b]">
                        Minimum users: {tier.minUsers}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="space-y-3">
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#10b981]" />
                        <span className="text-sm text-[#475569]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-3">
                  <Button 
                    className="w-full shadow-lg hover:shadow-xl" 
                    size="lg" 
                    variant={tier.popular ? 'default' : 'outline'}
                    style={tier.popular ? {
                      background: 'linear-gradient(to right, #60a5fa, #10b981)',
                      border: 'none'
                    } : {}}
                  >
                    {tier.cta.primary}
                  </Button>
                  <Button variant="ghost" className="w-full text-[#60a5fa] hover:text-[#60a5fa] hover:bg-[#60a5fa]/10" size="lg">
                    {tier.cta.secondary}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748b]">
            Start with our Free plan or try Pro with a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
