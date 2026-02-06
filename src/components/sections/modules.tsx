import React from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Package, 
  TrendingUp, 
  ShoppingCart, 
  Factory, 
  Users, 
  Banknote, 
  Award,
  ArrowRight,
  ChartColumn,
  Settings,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getAllModules } from '@/lib/sanity-queries';

const iconMap: Record<string, any> = {
  BarChart3,
  Package,
  TrendingUp,
  ShoppingCart,
  Factory,
  Users,
  Banknote,
  Award,
  ChartColumn,
  Settings,
  ShieldCheck
};

const IntegratedModules = async () => {
  const modules = await getAllModules();
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#f0fdf4] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[40px] font-bold text-[#0f172a] mb-4 tracking-tight leading-tight">
            Integrated <span className="gradient-text">Modules</span>
          </h2>
          <p className="text-[20px] text-[#475569] max-w-3xl mx-auto font-normal leading-relaxed">
            Comprehensive suite of modules covering all aspects of your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module: any) => {
            const IconComponent = iconMap[module.icon] || Package;
            return (
              <Link 
                key={module._id} 
                href={`/modules/${module.slug}`}
                className="rounded-xl bg-white/80 backdrop-blur-sm shadow-lg border-2 border-white/50 hover:border-[#60a5fa]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col items-center text-center p-6 pt-8 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#60a5fa]/20 to-[#10b981]/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#60a5fa] group-hover:to-[#10b981] transition-all duration-300">
                  <IconComponent 
                    size={32} 
                    className="text-[#60a5fa] group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-[18px] font-semibold text-[#0f172a] mb-3 tracking-tight">
                  {module.title}
                </h3>
                <p className="text-[14px] text-[#475569] leading-relaxed">
                  {module.heroDescription}
                </p>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="default" className="shadow-lg bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold">
            <Link href="/modules">
              Explore All Modules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegratedModules;
