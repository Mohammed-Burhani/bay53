import { 
  BarChart3, 
  Package, 
  TrendingUp, 
  ShoppingCart, 
  Factory, 
  Users, 
  Banknote, 
  Award,
  Settings,
  ShieldCheck
} from 'lucide-react';

export interface ModuleDetail {
  id: string;
  title: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  challenges: {
    title: string;
    description: string;
    icon: any;
  }[];
  solutions: {
    title: string;
    description: string;
    icon: any;
  }[];
  features: {
    title: string;
    description: string;
    icon: any;
  }[];
  workflow: {
    step: string;
    title: string;
    description: string;
  }[];
}

export const modulesData: Record<string, ModuleDetail> = {
  accounting: {
    id: 'accounting',
    title: 'Accounting',
    heroTitle: 'Accounting & Financial Management',
    heroDescription: 'Streamline your financial operations with our comprehensive accounting module. From general ledger to real-time reporting, manage everything in one integrated platform.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000',
    challenges: [
      {
        title: "Manual Reconciliation",
        description: "Hours spent matching bank statements with internal records.",
        icon: "Banknote"
      },
      {
        title: "Complex Compliance",
        description: "Struggling to keep up with changing tax laws and regulations.",
        icon: "ShieldCheck"
      },
      {
        title: "Delayed Reporting",
        description: "Waiting until month-end to see financial performance.",
        icon: "BarChart3"
      }
    ],
    solutions: [
      {
        title: "Auto-Reconciliation",
        description: "Smart matching algorithms that sync with your bank feeds.",
        icon: "Settings"
      },
      {
        title: "Built-in Compliance",
        description: "Automated tax calculations and updated regulatory frameworks.",
        icon: "ShieldCheck"
      },
      {
        title: "Real-time Dashboards",
        description: "Instant access to P&L, Balance Sheet, and Cash Flow anytime.",
        icon: "BarChart3"
      }
    ],
    features: [
      {
        title: "General Ledger",
        description: "The core of your accounting system with multi-dimensional tracking.",
        icon: "BarChart3"
      },
      {
        title: "AR & AP",
        description: "Streamlined management of receivables and payables with aging analysis.",
        icon: "Banknote"
      },
      {
        title: "Fixed Assets",
        description: "Automated depreciation schedules and asset lifecycle tracking.",
        icon: "Package"
      },
      {
        title: "Multi-Currency",
        description: "Handle international transactions with automatic exchange rate updates.",
        icon: "TrendingUp"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Transaction Entry",
        description: "Capture daily financial activities via direct entry or automated imports."
      },
      {
        step: "02",
        title: "Validation & Posting",
        description: "Automated checks ensure data integrity before posting to the ledger."
      },
      {
        step: "03",
        title: "Reconciliation",
        description: "Match transactions with bank feeds for real-time accuracy."
      },
      {
        step: "04",
        title: "Reporting",
        description: "Generate comprehensive financial reports with a single click."
      }
    ]
  },
  inventory: {
    id: 'inventory',
    title: 'Inventory',
    heroTitle: 'Smart Inventory & Warehouse Management',
    heroDescription: 'Optimize your stock levels and warehouse operations with real-time tracking, automated replenishment, and multi-location management.',
    heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
    challenges: [
      {
        title: "Stockouts & Overstocks",
        description: "Lost sales due to out-of-stock items or tied-up capital in excess inventory.",
        icon: "Package"
      },
      {
        title: "Inaccurate Tracking",
        description: "Discrepancies between physical stock and system records.",
        icon: "BarChart3"
      },
      {
        title: "Warehouse Inefficiency",
        description: "Poor picking routes and disorganized storage locations.",
        icon: "Settings"
      }
    ],
    solutions: [
      {
        title: "Predictive Reordering",
        description: "Automated alerts based on historical demand and lead times.",
        icon: "TrendingUp"
      },
      {
        title: "Barcode Integration",
        description: "High-accuracy scanning for all stock movements and counts.",
        icon: "Settings"
      },
      {
        title: "Smart Put-away",
        description: "Optimized warehouse mapping for faster picking and packing.",
        icon: "Package"
      }
    ],
    features: [
      {
        title: "Multi-Location",
        description: "Track inventory across multiple warehouses, stores, and vans.",
        icon: "Package"
      },
      {
        title: "Batch & Serial Tracking",
        description: "Full traceability for quality control and warranty management.",
        icon: "ShieldCheck"
      },
      {
        title: "Stock Valuation",
        description: "Real-time calculation using FIFO, LIFO, or Weighted Average.",
        icon: "Banknote"
      },
      {
        title: "Mobile Warehouse App",
        description: "Manage stock directly from the floor with mobile devices.",
        icon: "Settings"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Inbound Logistics",
        description: "Receive goods and verify against purchase orders using scanners."
      },
      {
        step: "02",
        title: "Storage & Picking",
        description: "Assign storage bins and generate optimized picking lists for orders."
      },
      {
        step: "03",
        title: "Internal Movement",
        description: "Track transfers between warehouses with full audit trails."
      },
      {
        step: "04",
        title: "Stock Analysis",
        description: "Monitor turnover rates and stock health via analytics."
      }
    ]
  },
  sales: {
    id: 'sales',
    title: 'Sales & Distribution',
    heroTitle: 'Accelerate Your Sales Performance',
    heroDescription: 'From lead to cash, manage your entire sales cycle with integrated CRM, quotation management, and automated fulfillment.',
    heroImage: 'https://images.unsplash.com/photo-1556740734-7f9a2b77a5a0?auto=format&fit=crop&q=80&w=1000',
    challenges: [
      {
        title: "Fragmented Sales Cycle",
        description: "Disconnected data between CRM, sales orders, and invoicing.",
        icon: "Users"
      },
      {
        title: "Slow Quotations",
        description: "Manual pricing and approval delays leading to lost opportunities.",
        icon: "TrendingUp"
      },
      {
        title: "Fulfillment Errors",
        description: "Shipping the wrong items or missing delivery deadlines.",
        icon: "Package"
      }
    ],
    solutions: [
      {
        title: "Unified Workflow",
        description: "Seamless flow from lead to quotation to sales order and invoice.",
        icon: "TrendingUp"
      },
      {
        title: "Smart Pricing Engine",
        description: "Automated discount rules and real-time margin calculations.",
        icon: "Settings"
      },
      {
        title: "Integrated Logistics",
        description: "Real-time sync with warehouse and shipping providers.",
        icon: "Package"
      }
    ],
    features: [
      {
        title: "Quotation Mgmt",
        description: "Generate professional quotes with multi-tier approval workflows.",
        icon: "TrendingUp"
      },
      {
        title: "Order Fulfillment",
        description: "Automated picking list generation and shipment tracking.",
        icon: "Package"
      },
      {
        title: "Customer Portal",
        description: "Self-service dashboard for customers to track orders and pay invoices.",
        icon: "Users"
      },
      {
        title: "Sales Analytics",
        description: "Advanced forecasting and sales team performance tracking.",
        icon: "BarChart3"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Quotation",
        description: "Create and send professional proposals with dynamic pricing."
      },
      {
        step: "02",
        title: "Order Conversion",
        description: "One-click conversion of approved quotes to sales orders."
      },
      {
        step: "03",
        title: "Fulfillment",
        description: "Direct integration with warehouse for picking and shipping."
      },
      {
        step: "04",
        title: "Invoicing",
        description: "Automated invoice generation and payment tracking."
      }
    ]
  }
};
