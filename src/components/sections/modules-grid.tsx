import React from 'react';
import Link from 'next/link';
import { getAllModules } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity';
import { 
  ChartColumn, 
  Package, 
  TrendingUp, 
  Factory, 
  Users, 
  Settings, 
  ShieldCheck, 
  BarChart3,
  CircleCheckBig
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ChartColumn: <ChartColumn className="h-8 w-8 transition-colors duration-300" />,
  Package: <Package className="h-8 w-8 transition-colors duration-300" />,
  TrendingUp: <TrendingUp className="h-8 w-8 transition-colors duration-300" />,
  Factory: <Factory className="h-8 w-8 transition-colors duration-300" />,
  Users: <Users className="h-8 w-8 transition-colors duration-300" />,
  Settings: <Settings className="h-8 w-8 transition-colors duration-300" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 transition-colors duration-300" />,
  BarChart3: <BarChart3 className="h-8 w-8 transition-colors duration-300" />,
};

const ModulesGrid = async () => {
  const modules = await getAllModules();

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white via-[#fef3f2] to-white" id="modules">
      <div className="px-7 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module: any) => (
            <Link 
              key={module._id} 
              href={`/modules/${module.slug}`}
              className="block rounded-xl bg-white/80 backdrop-blur-sm text-card-foreground shadow-lg border-2 border-white/50 hover:border-[#60a5fa]/30 hover:shadow-xl transition-all duration-300 group cursor-pointer hover:scale-105"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-start justify-between">
                  {module.heroImage && (
                    <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={urlFor(module.heroImage).width(600).height(400).url()} 
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
                <div className="font-semibold tracking-tight text-2xl text-[#0f172a] mt-4">
                  {module.title}
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <p className="text-[#475569] mb-6 leading-relaxed text-base">
                  {module.heroDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
