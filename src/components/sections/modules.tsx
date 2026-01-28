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
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const modules = [
  {
    id: 'accounting',
    title: 'Accounting',
    description: 'Comprehensive financial management with real-time reporting, multi-currency support...',
    icon: BarChart3,
  },
  {
    id: 'inventory',
    title: 'Inventory',
    description: 'Real-time inventory tracking with automated stock management, multi-warehouse support...',
    icon: Package,
  },
  {
    id: 'sales',
    title: 'Sales & Distribution',
    description: 'End-to-end sales management from quotation to delivery with integrated logistics...',
    icon: TrendingUp,
  },
  {
    id: 'purchase',
    title: 'Purchase',
    description: 'Streamlined procurement process with vendor management, purchase orders, and automated...',
    icon: ShoppingCart,
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Complete production planning and control with BOM management, work order tracking...',
    icon: Factory,
  },
  {
    id: 'crm',
    title: 'CRM',
    description: '360-degree customer relationship management with lead tracking, opportunity management...',
    icon: Users,
  },
  {
    id: 'payroll',
    title: 'Payroll',
    description: 'Automated payroll processing with statutory compliance, leave management, and employee...',
    icon: Banknote,
  },
  {
    id: 'quality',
    title: 'Quality Control',
    description: 'Comprehensive quality management with inspection plans, non-conformance tracking...',
    icon: Award,
  },
];

const IntegratedModules = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[40px] font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            Integrated Modules
          </h2>
          <p className="text-[20px] text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Comprehensive suite of modules covering all aspects of your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Link 
              key={index} 
              href={`/modules/${module.id}`}
              className="rounded-xl bg-white shadow-sm border-2 border-transparent hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col items-center text-center p-6 pt-8"
            >
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors duration-300">
                <module.icon 
                  size={32} 
                  className="text-indigo-600 group-hover:text-white transition-colors duration-300" 
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-3 tracking-tight">
                {module.title}
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {module.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="default" className="shadow-lg">
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
