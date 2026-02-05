import {createClient} from '@sanity/client'

const client = createClient({
  projectId: 'cndhhzr5',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // You'll need to add this
  apiVersion: '2024-01-01',
})

const modules = [
  {
    _type: 'module',
    title: 'Accounting',
    slug: {_type: 'slug', current: 'accounting'},
    icon: 'BarChart3',
    heroTitle: 'Accounting & Financial Management',
    heroDescription:
      'Streamline your financial operations with our comprehensive accounting module. From general ledger to real-time reporting, manage everything in one integrated platform.',
    challenges: [
      {
        title: 'Manual Reconciliation',
        description: 'Hours spent matching bank statements with internal records.',
        icon: 'Banknote',
      },
      {
        title: 'Complex Compliance',
        description: 'Struggling to keep up with changing tax laws and regulations.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Delayed Reporting',
        description: 'Waiting until month-end to see financial performance.',
        icon: 'BarChart3',
      },
    ],
    solutions: [
      {
        title: 'Auto-Reconciliation',
        description: 'Smart matching algorithms that sync with your bank feeds.',
        icon: 'Settings',
      },
      {
        title: 'Built-in Compliance',
        description: 'Automated tax calculations and updated regulatory frameworks.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Real-time Dashboards',
        description: 'Instant access to P&L, Balance Sheet, and Cash Flow anytime.',
        icon: 'BarChart3',
      },
    ],
    features: [
      {
        title: 'General Ledger',
        description: 'The core of your accounting system with multi-dimensional tracking.',
        icon: 'BarChart3',
      },
      {
        title: 'AR & AP',
        description: 'Streamlined management of receivables and payables with aging analysis.',
        icon: 'Banknote',
      },
      {
        title: 'Fixed Assets',
        description: 'Automated depreciation schedules and asset lifecycle tracking.',
        icon: 'Package',
      },
      {
        title: 'Multi-Currency',
        description: 'Handle international transactions with automatic exchange rate updates.',
        icon: 'TrendingUp',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Transaction Entry',
        description: 'Capture daily financial activities via direct entry or automated imports.',
      },
      {
        step: '02',
        title: 'Validation & Posting',
        description: 'Automated checks ensure data integrity before posting to the ledger.',
      },
      {
        step: '03',
        title: 'Reconciliation',
        description: 'Match transactions with bank feeds for real-time accuracy.',
      },
      {
        step: '04',
        title: 'Reporting',
        description: 'Generate comprehensive financial reports with a single click.',
      },
    ],
    order: 1,
  },
  {
    _type: 'module',
    title: 'Inventory',
    slug: {_type: 'slug', current: 'inventory'},
    icon: 'Package',
    heroTitle: 'Smart Inventory & Warehouse Management',
    heroDescription:
      'Optimize your stock levels and warehouse operations with real-time tracking, automated replenishment, and multi-location management.',
    challenges: [
      {
        title: 'Stockouts & Overstocks',
        description: 'Lost sales due to out-of-stock items or tied-up capital in excess inventory.',
        icon: 'Package',
      },
      {
        title: 'Inaccurate Tracking',
        description: 'Discrepancies between physical stock and system records.',
        icon: 'BarChart3',
      },
      {
        title: 'Warehouse Inefficiency',
        description: 'Poor picking routes and disorganized storage locations.',
        icon: 'Settings',
      },
    ],
    solutions: [
      {
        title: 'Predictive Reordering',
        description: 'Automated alerts based on historical demand and lead times.',
        icon: 'TrendingUp',
      },
      {
        title: 'Barcode Integration',
        description: 'High-accuracy scanning for all stock movements and counts.',
        icon: 'Settings',
      },
      {
        title: 'Smart Put-away',
        description: 'Optimized warehouse mapping for faster picking and packing.',
        icon: 'Package',
      },
    ],
    features: [
      {
        title: 'Multi-Location',
        description: 'Track inventory across multiple warehouses, stores, and vans.',
        icon: 'Package',
      },
      {
        title: 'Batch & Serial Tracking',
        description: 'Full traceability for quality control and warranty management.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Stock Valuation',
        description: 'Real-time calculation using FIFO, LIFO, or Weighted Average.',
        icon: 'Banknote',
      },
      {
        title: 'Mobile Warehouse App',
        description: 'Manage stock directly from the floor with mobile devices.',
        icon: 'Settings',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Inbound Logistics',
        description: 'Receive goods and verify against purchase orders using scanners.',
      },
      {
        step: '02',
        title: 'Storage & Picking',
        description: 'Assign storage bins and generate optimized picking lists for orders.',
      },
      {
        step: '03',
        title: 'Internal Movement',
        description: 'Track transfers between warehouses with full audit trails.',
      },
      {
        step: '04',
        title: 'Stock Analysis',
        description: 'Monitor turnover rates and stock health via analytics.',
      },
    ],
    order: 2,
  },
  {
    _type: 'module',
    title: 'Sales & Distribution',
    slug: {_type: 'slug', current: 'sales'},
    icon: 'TrendingUp',
    heroTitle: 'Accelerate Your Sales Performance',
    heroDescription:
      'From lead to cash, manage your entire sales cycle with integrated CRM, quotation management, and automated fulfillment.',
    challenges: [
      {
        title: 'Fragmented Sales Cycle',
        description: 'Disconnected data between CRM, sales orders, and invoicing.',
        icon: 'Users',
      },
      {
        title: 'Slow Quotations',
        description: 'Manual pricing and approval delays leading to lost opportunities.',
        icon: 'TrendingUp',
      },
      {
        title: 'Fulfillment Errors',
        description: 'Shipping the wrong items or missing delivery deadlines.',
        icon: 'Package',
      },
    ],
    solutions: [
      {
        title: 'Unified Workflow',
        description: 'Seamless flow from lead to quotation to sales order and invoice.',
        icon: 'TrendingUp',
      },
      {
        title: 'Smart Pricing Engine',
        description: 'Automated discount rules and real-time margin calculations.',
        icon: 'Settings',
      },
      {
        title: 'Integrated Logistics',
        description: 'Real-time sync with warehouse and shipping providers.',
        icon: 'Package',
      },
    ],
    features: [
      {
        title: 'Quotation Mgmt',
        description: 'Generate professional quotes with multi-tier approval workflows.',
        icon: 'TrendingUp',
      },
      {
        title: 'Order Fulfillment',
        description: 'Automated picking list generation and shipment tracking.',
        icon: 'Package',
      },
      {
        title: 'Customer Portal',
        description: 'Self-service dashboard for customers to track orders and pay invoices.',
        icon: 'Users',
      },
      {
        title: 'Sales Analytics',
        description: 'Advanced forecasting and sales team performance tracking.',
        icon: 'BarChart3',
      },
    ],
    workflow: [
      {
        step: '01',
        title: 'Quotation',
        description: 'Create and send professional proposals with dynamic pricing.',
      },
      {
        step: '02',
        title: 'Order Conversion',
        description: 'One-click conversion of approved quotes to sales orders.',
      },
      {
        step: '03',
        title: 'Fulfillment',
        description: 'Direct integration with warehouse for picking and shipping.',
      },
      {
        step: '04',
        title: 'Invoicing',
        description: 'Automated invoice generation and payment tracking.',
      },
    ],
    order: 3,
  },
]

const testimonials = [
  {
    _type: 'testimonial',
    name: 'Rajesh Kumar',
    role: 'Managing Director',
    company: 'Alpha Manufacturing Ltd.',
    content:
      'Bay53 has transformed our business operations completely. The integrated modules and real-time reporting have given us unprecedented visibility into our operations. Highly recommended for SMEs!',
    rating: 5,
    featured: true,
    order: 1,
  },
  {
    _type: 'testimonial',
    name: 'Priya Sharma',
    role: 'CFO',
    company: 'TechVision Solutions Pvt. Ltd.',
    content:
      'The financial management capabilities of Bay53 are exceptional. From multi-currency support to automated reconciliation, everything works seamlessly. The support team is always there when we need them.',
    rating: 5,
    featured: true,
    order: 2,
  },
  {
    _type: 'testimonial',
    name: 'Mohammed Ali',
    role: 'Operations Manager',
    company: 'Global Traders Inc.',
    content:
      'We were looking for an affordable yet powerful ERP solution for our growing business. Bay53 exceeded our expectations with its comprehensive features and ease of use. Best investment we made!',
    rating: 5,
    featured: true,
    order: 3,
  },
]

const blogs = [
  {
    _type: 'blog',
    title: '5 Ways ERP Systems Transform Small Businesses',
    slug: {_type: 'slug', current: '5-ways-erp-transforms-small-businesses'},
    author: 'Bay53 Team',
    publishedAt: new Date().toISOString(),
    excerpt:
      'Discover how modern ERP systems are helping small and medium businesses compete with larger enterprises through automation and integration.',
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Enterprise Resource Planning (ERP) systems are no longer just for large corporations. Modern AI-Powered ERP solutions have made it possible for small and medium businesses to access powerful tools that were once out of reach.',
          },
        ],
      },
    ],
    categories: ['ERP', 'Business Growth'],
    tags: ['automation', 'small business', 'digital transformation'],
    featured: true,
  },
]

async function seedData() {
  try {
    console.log('Starting data seed...')

    // Create modules
    for (const module of modules) {
      const result = await client.create(module)
      console.log(`Created module: ${result.title}`)
    }

    // Create testimonials
    for (const testimonial of testimonials) {
      const result = await client.create(testimonial)
      console.log(`Created testimonial: ${result.name}`)
    }

    // Create blogs
    for (const blog of blogs) {
      const result = await client.create(blog)
      console.log(`Created blog: ${result.title}`)
    }

    console.log('Data seed completed successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedData()
