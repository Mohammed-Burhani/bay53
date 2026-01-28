import React from 'react';
import Link from 'next/link';
import { 
  ChartColumn, 
  Package, 
  TrendingUp, 
  Factory, 
  Users, 
  CheckCircle2, 
  Settings, 
  ShieldCheck, 
  BarChart3,
  CircleCheckBig
} from 'lucide-react';

interface ModuleFeature {
  title: string;
}

interface ERPModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const modules: ERPModule[] = [
  {
    id: 'accounting',
    title: 'Accounting',
    description: 'Comprehensive financial management with real-time reporting, multi-currency support, and automated reconciliation.',
    icon: <ChartColumn className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'General Ledger Management',
      'Accounts Payable & Receivable',
      'Bank Reconciliation',
      'Multi-Currency Support',
      'Financial Reporting & Analytics',
      'Budget Management'
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory',
    description: 'Real-time inventory tracking with automated stock management, multi-warehouse support, and advanced analytics.',
    icon: <Package className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Multi-Warehouse Management',
      'Real-time Stock Tracking',
      'Automated Reorder Points',
      'Barcode Integration',
      'Batch & Serial Number Tracking',
      'Inventory Valuation'
    ]
  },
  {
    id: 'sales',
    title: 'Sales & Distribution',
    description: 'End-to-end sales management from quotation to delivery with integrated logistics and customer management.',
    icon: <TrendingUp className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Quotation Management',
      'Sales Order Processing',
      'Delivery Management',
      'Invoice Generation',
      'Sales Analytics & Reports',
      'Customer Portal'
    ]
  },
  {
    id: 'purchase',
    title: 'Purchase',
    description: 'Streamlined procurement process with vendor management, purchase orders, and automated approval workflows.',
    icon: <Package className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Vendor Management',
      'Purchase Requisitions',
      'Purchase Order Processing',
      'Goods Receipt Management',
      'Vendor Performance Analysis',
      'Automated Approval Workflows'
    ]
  },
  {
    id: 'production',
    title: 'Production',
    description: 'Complete production planning and control with BOM management, work order tracking, and quality integration.',
    icon: <Factory className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Bill of Materials (BOM)',
      'Work Order Management',
      'Production Planning',
      'Shop Floor Control',
      'Capacity Planning',
      'Production Costing'
    ]
  },
  {
    id: 'crm',
    title: 'CRM',
    description: '360-degree customer relationship management with lead tracking, opportunity management, and marketing automation.',
    icon: <Users className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Lead Management',
      'Opportunity Tracking',
      'Contact Management',
      'Sales Pipeline',
      'Customer Service Ticketing',
      'Marketing Campaigns'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll',
    description: 'Automated payroll processing with statutory compliance, leave management, and employee self-service portal.',
    icon: <TrendingUp className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Salary Processing',
      'Leave Management',
      'Attendance Integration',
      'Tax Calculations',
      'Statutory Compliance',
      'Employee Self-Service'
    ]
  },
  {
    id: 'quality',
    title: 'Quality Control',
    description: 'Comprehensive quality management with inspection plans, non-conformance tracking, and quality reports.',
    icon: <ShieldCheck className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Quality Inspection Plans',
      'Non-Conformance Management',
      'Certificate of Analysis',
      'Quality Reports',
      'Supplier Quality Management',
      'CAPA Management'
    ]
  },
  {
    id: 'admin',
    title: 'System Administration',
    description: 'Centralized system configuration with user management, role-based access, and audit trails.',
    icon: <Settings className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'User Management',
      'Role-Based Access Control',
      'Audit Trails',
      'System Configuration',
      'Data Backup & Recovery',
      'Integration Management'
    ]
  },
  {
    id: 'compliance',
    title: 'Compliance Management',
    description: 'Ensure regulatory compliance with automated tracking, reporting, and document management.',
    icon: <ShieldCheck className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Regulatory Compliance Tracking',
      'Document Management',
      'Compliance Reporting',
      'Risk Assessment',
      'Policy Management',
      'Compliance Audits'
    ]
  },
  {
    id: 'reports',
    title: 'Reports',
    description: 'Powerful reporting and analytics with customizable dashboards and real-time business intelligence.',
    icon: <BarChart3 className="h-8 w-8 transition-colors duration-300" />,
    features: [
      'Customizable Dashboards',
      'Real-time Analytics',
      'Standard Report Library',
      'Custom Report Builder',
      'Data Visualization',
      'Export to Multiple Formats'
    ]
  }
];

const ModulesGrid = () => {
  return (
    <section className="py-20 px-4 bg-white" id="modules">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {modules.map((module) => (
            <Link 
              key={module.id} 
              href={`/modules/${module.id}`}
              className="block rounded-xl bg-card text-card-foreground shadow border-2 border-gray-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    {module.icon}
                  </div>
                </div>
                <div className="font-semibold tracking-tight text-2xl text-gray-900 mt-4">
                  {module.title}
                </div>
              </div>
              
              <div className="p-6 pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed text-base">
                  {module.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-3 text-base">
                    Key Features:
                  </h4>
                  <div className="grid gap-2">
                    {module.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CircleCheckBig className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;
