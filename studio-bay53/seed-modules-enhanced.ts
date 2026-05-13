/**
 * Enhanced Module Seed Data with Product URLs and Use Cases
 * Run this script to populate your Sanity CMS with niche-specific module data
 * 
 * Usage: Update the existing modules in Sanity Studio with these new fields
 */

export const enhancedModulesData = [
  {
    slug: 'accounting',
    productUrl: 'https://app.bay53.com/signup?module=accounting',
    trialDuration: '30 days',
    targetAudience: ['Small Businesses', 'Accounting Firms', 'Finance Teams'],
    useCases: [
      {
        industry: 'Professional Services',
        scenario: 'Track billable hours, manage client invoices, and generate financial reports for multiple projects simultaneously.'
      },
      {
        industry: 'Retail Business',
        scenario: 'Automate daily sales reconciliation, manage cash flow, and stay compliant with tax regulations across multiple store locations.'
      },
      {
        industry: 'Manufacturing',
        scenario: 'Monitor production costs, track inventory valuation, and generate accurate cost-of-goods-sold reports in real-time.'
      }
    ]
  },
  {
    slug: 'inventory',
    productUrl: 'https://app.bay53.com/signup?module=inventory',
    trialDuration: '14 days',
    targetAudience: ['Manufacturing Firms', 'Warehouses', 'Retail Chains', 'E-commerce'],
    useCases: [
      {
        industry: 'Manufacturing',
        scenario: 'Track raw materials, work-in-progress, and finished goods across multiple production facilities with real-time stock alerts.'
      },
      {
        industry: 'E-commerce',
        scenario: 'Sync inventory across multiple sales channels, automate reordering, and prevent overselling with real-time stock updates.'
      },
      {
        industry: 'Wholesale Distribution',
        scenario: 'Manage bulk inventory movements, track batch numbers for compliance, and optimize warehouse space utilization.'
      }
    ]
  },
  {
    slug: 'sales',
    productUrl: 'https://app.bay53.com/signup?module=sales',
    trialDuration: '21 days',
    targetAudience: ['Sales Teams', 'B2B Companies', 'Distribution Businesses'],
    useCases: [
      {
        industry: 'B2B Sales',
        scenario: 'Manage complex quotations with tiered pricing, track sales pipeline, and automate follow-ups for enterprise deals.'
      },
      {
        industry: 'Distribution',
        scenario: 'Process bulk orders efficiently, manage customer credit limits, and integrate with logistics for seamless delivery tracking.'
      },
      {
        industry: 'Service Industry',
        scenario: 'Create service packages, manage recurring contracts, and track customer satisfaction with integrated feedback tools.'
      }
    ]
  },
  {
    slug: 'purchasing',
    productUrl: 'https://app.bay53.com/signup?module=purchasing',
    trialDuration: '14 days',
    targetAudience: ['Procurement Teams', 'Manufacturing', 'Retail Chains'],
    useCases: [
      {
        industry: 'Manufacturing',
        scenario: 'Automate purchase requisitions based on production schedules, compare vendor quotes, and track delivery performance.'
      },
      {
        industry: 'Hospitality',
        scenario: 'Manage food and beverage procurement, track supplier quality, and optimize ordering based on seasonal demand.'
      },
      {
        industry: 'Construction',
        scenario: 'Track material purchases per project, manage subcontractor agreements, and ensure on-time delivery to job sites.'
      }
    ]
  },
  {
    slug: 'manufacturing',
    productUrl: 'https://app.bay53.com/signup?module=manufacturing',
    trialDuration: '30 days',
    targetAudience: ['Manufacturing Companies', 'Production Facilities', 'Assembly Plants'],
    useCases: [
      {
        industry: 'Discrete Manufacturing',
        scenario: 'Plan production schedules, track work orders through assembly lines, and monitor quality control at each stage.'
      },
      {
        industry: 'Food Processing',
        scenario: 'Manage batch production with recipe management, ensure compliance with food safety standards, and track expiry dates.'
      },
      {
        industry: 'Electronics Assembly',
        scenario: 'Track component usage, manage bill of materials, and ensure traceability for warranty and recall management.'
      }
    ]
  },
  {
    slug: 'hrm',
    productUrl: 'https://app.bay53.com/signup?module=hrm',
    trialDuration: '21 days',
    targetAudience: ['HR Departments', 'Growing Companies', 'Multi-location Businesses'],
    useCases: [
      {
        industry: 'Corporate',
        scenario: 'Automate employee onboarding, track performance reviews, and manage benefits enrollment across departments.'
      },
      {
        industry: 'Retail Chain',
        scenario: 'Schedule shifts across multiple locations, track attendance, and manage payroll for hourly and salaried employees.'
      },
      {
        industry: 'Remote Teams',
        scenario: 'Manage distributed workforce, track time zones, and facilitate virtual onboarding and training programs.'
      }
    ]
  },
  {
    slug: 'crm',
    productUrl: 'https://app.bay53.com/signup?module=crm',
    trialDuration: '14 days',
    targetAudience: ['Sales Teams', 'Marketing Departments', 'Customer Service'],
    useCases: [
      {
        industry: 'B2B Services',
        scenario: 'Track leads through complex sales cycles, manage account relationships, and forecast revenue with pipeline analytics.'
      },
      {
        industry: 'Real Estate',
        scenario: 'Manage property listings, track client preferences, and automate follow-ups for viewings and negotiations.'
      },
      {
        industry: 'SaaS Companies',
        scenario: 'Track customer health scores, manage subscription renewals, and identify upsell opportunities through usage analytics.'
      }
    ]
  },
  {
    slug: 'project-management',
    productUrl: 'https://app.bay53.com/signup?module=project-management',
    trialDuration: '21 days',
    targetAudience: ['Project Managers', 'Agencies', 'Consulting Firms'],
    useCases: [
      {
        industry: 'IT Services',
        scenario: 'Manage software development sprints, track billable hours, and monitor project profitability in real-time.'
      },
      {
        industry: 'Construction',
        scenario: 'Plan project timelines, track subcontractor progress, and manage change orders with full documentation.'
      },
      {
        industry: 'Marketing Agency',
        scenario: 'Coordinate campaigns across teams, track creative approvals, and manage client budgets with time tracking.'
      }
    ]
  }
];

/**
 * Instructions for updating Sanity Studio:
 * 
 * 1. Go to your Sanity Studio (studio-bay53)
 * 2. For each module, add the following fields:
 *    - Product URL: Direct link to signup page for that module
 *    - Trial Duration: e.g., "14 days", "30 days"
 *    - Target Audience: Array of audience types
 *    - Use Cases: Array of industry-specific scenarios
 * 
 * 3. The data above provides realistic examples for each module
 * 4. Customize the productUrl to match your actual signup flow
 */
