'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Check, X, Search } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { featureComparison } from '@/data/pricing-data';

export default function PricingComparison() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = featureComparison
    .map((category) => ({
      ...category,
      features: category.features.filter(
        (feature) =>
          feature.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.category.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.features.length > 0);

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="h-5 w-5 text-[#10b981]" />
      ) : (
        <X className="h-5 w-5 text-[#cbd5e1]" />
      );
    }
    return <Badge variant="secondary" className="bg-[#60a5fa]/10 text-[#60a5fa]">{value}</Badge>;
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#0f172a] md:text-4xl">
            Compare plans and features
          </h2>
          <p className="mb-8 text-center text-[#64748b]">
            See what&apos;s included in each plan
          </p>

          {/* Search */}
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
              <Input
                type="text"
                placeholder="Search features like invoicing, inventory, payroll..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#e2e8f0] focus:border-[#60a5fa] focus:ring-[#60a5fa]"
              />
            </div>
          </div>

          {/* Feature Comparison Table */}
          <Card className="border-2 border-[#e2e8f0]">
            <CardHeader className="bg-[#f8fafc]">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <CardTitle className="text-lg text-[#0f172a]">Features</CardTitle>
                </div>
                <div className="text-center">
                  <CardTitle className="text-lg text-[#0f172a]">Standard</CardTitle>
                </div>
                <div className="text-center">
                  <CardTitle className="text-lg text-[#0f172a]">Premium</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Accordion type="multiple" className="w-full">
                {filteredFeatures.map((category, index) => (
                  <AccordionItem key={index} value={`category-${index}`} className="border-[#e2e8f0]">
                    <AccordionTrigger className="text-left font-semibold text-[#0f172a] hover:text-[#60a5fa]">
                      {category.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        {category.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="grid grid-cols-3 gap-4 border-b border-[#f1f5f9] py-3 last:border-b-0"
                          >
                            <div className="col-span-1 text-sm text-[#475569]">
                              {feature.name}
                            </div>
                            <div className="flex justify-center">
                              {renderFeatureValue(feature.standard)}
                            </div>
                            <div className="flex justify-center">
                              {renderFeatureValue(feature.premium)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFeatures.length === 0 && (
                <div className="py-12 text-center text-[#64748b]">
                  No features found matching &quot;{searchQuery}&quot;
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
