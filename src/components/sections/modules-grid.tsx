import React from 'react';
import Link from 'next/link';
import { getAllModules } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModulesGrid = async () => {
  const modules = await getAllModules();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#fef3f2] to-white" id="modules">
      <div className="px-7 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f172a] mb-4">
            Explore Our Modules
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Select the module that fits your business needs and start your free trial today
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module: any) => (
            <div 
              key={module._id} 
              className="rounded-2xl bg-white text-card-foreground shadow-lg border border-[#e2e8f0] hover:border-[#60a5fa]/50 hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Module Image */}
              {module.heroImage && (
                <div className="w-full h-48 overflow-hidden relative">
                  <img 
                    src={urlFor(module.heroImage).width(600).height(400).url()} 
                    alt={module.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Trial Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3 text-[#10b981]" />
                    <span className="text-xs font-semibold text-[#0f172a]">
                      {module.trialDuration || 'Free Trial'}
                    </span>
                  </div>
                </div>
              )}
              
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-bold text-2xl text-[#0f172a] mb-3 group-hover:text-[#60a5fa] transition-colors">
                  {module.title}
                </h3>
                
                <p className="text-[#64748b] mb-4 leading-relaxed text-sm flex-1 line-clamp-3">
                  {module.heroDescription}
                </p>

                {/* Target Audience Tags */}
                {module.targetAudience && module.targetAudience.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {module.targetAudience.slice(0, 2).map((audience: string, idx: number) => (
                      <span 
                        key={idx}
                        className="text-xs bg-[#f1f5f9] text-[#475569] px-2 py-1 rounded-full"
                      >
                        {audience}
                      </span>
                    ))}
                    {module.targetAudience.length > 2 && (
                      <span className="text-xs bg-[#f1f5f9] text-[#475569] px-2 py-1 rounded-full">
                        +{module.targetAudience.length - 2} more
                      </span>
                    )}
                  </div>
                )}

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-[#64748b]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#64748b]">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0" />
                    <span>Setup in minutes</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col gap-3">
                  {module.productUrl ? (
                    <a 
                      href={module.productUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 text-white font-semibold group/btn"
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link href={`/modules/${module.slug}`} className="w-full">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 text-white font-semibold group/btn"
                      >
                        Start Free Trial
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                  
                  <Link href={`/modules/${module.slug}`}>
                    <Button 
                      variant="outline"
                      className="w-full border-[#e2e8f0] hover:border-[#f8fafc] hover:bg-[#60a5fa] font-medium"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] rounded-2xl p-8 border border-[#e2e8f0]">
            <p className="text-lg text-[#475569] max-w-xl">
              Not sure which module to start with? Our team can help you choose the right solution for your business.
            </p>
            <Link href="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-[#60a5fa] text-[#60a5fa] hover:bg-[#60a5fa] hover:text-white font-semibold"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
