'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/data/pricing-data';

export default function PricingFAQ() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#0f172a] md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mb-12 text-center text-[#64748b]">
            Everything you need to know about our pricing
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#e2e8f0] bg-white mb-4 rounded-lg px-6">
                <AccordionTrigger className="text-left text-[#0f172a] hover:text-[#60a5fa]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#475569]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
