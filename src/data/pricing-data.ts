import { PricingTier, FeatureCategory, FAQ, PricingStat } from '@/types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'For businesses that need a complete solution to manage operations and compliance—without the complexity.',
    monthlyPrice: {
      user: 1399,
      employee: 299,
    },
    yearlyPrice: {
      user: 999,
      employee: 249,
    },
    minUsers: 5,
    maxTransactions: 100000,
    features: [
      'Core financials',
      'Sales & Purchases',
      'Banking & GST compliance',
      'Supply chain management',
      'Inventory management',
      'Order management',
      'Billing management',
      'Spend management',
      'People and payroll operations',
      'Reporting & analytics',
      'Basic customization',
      'Standard integrations',
    ],
    cta: {
      primary: 'Start your free trial',
      secondary: 'Request a demo',
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For large-scale enterprises that need deeper capabilities, extended modules, and advanced system features.',
    monthlyPrice: {
      user: 2999,
      employee: 299,
    },
    yearlyPrice: {
      user: 2499,
      employee: 249,
    },
    minUsers: 10,
    maxTransactions: 300000,
    popular: true,
    features: [
      'Everything in Standard',
      'Advanced financial controls',
      'Warehouse management',
      'Quality management',
      'Manufacturing operations',
      'Distribution operations',
      'Retail operations',
      'Omnichannel commerce',
      'Advanced reporting & analytics',
      'Advanced customization & automation',
      'Priority support',
      'Dedicated account manager',
    ],
    cta: {
      primary: 'Start your free trial',
      secondary: 'Request a demo',
    },
  },
];

export const featureComparison: FeatureCategory[] = [
  {
    category: 'Core financials',
    features: [
      { name: 'Sales', standard: true, premium: true },
      { name: 'Purchases', standard: true, premium: true },
      { name: 'Banking', standard: true, premium: true },
      { name: 'For accountants', standard: true, premium: true },
      { name: 'GST compliance', standard: true, premium: true },
      { name: 'Internal finance control', standard: 'Basic', premium: 'Advanced' },
    ],
  },
  {
    category: 'Supply chain management',
    features: [
      { name: 'Supplier management', standard: true, premium: true },
      { name: 'Sourcing', standard: true, premium: true },
      { name: 'Procurement', standard: true, premium: true },
      { name: 'Inventory management', standard: true, premium: true },
      { name: 'Order management', standard: true, premium: true },
      { name: 'Warehouse management', standard: false, premium: true },
      { name: 'Quality', standard: false, premium: true },
      { name: 'Manufacturing operations', standard: false, premium: true },
      { name: 'Distribution operations', standard: false, premium: true },
      { name: 'Retail operations', standard: false, premium: true },
    ],
  },
  {
    category: 'Billing management',
    features: [
      { name: 'Subscription billing', standard: true, premium: true },
      { name: 'Invoice management', standard: true, premium: true },
      { name: 'Payment processing', standard: true, premium: true },
      { name: 'Revenue recognition', standard: 'Basic', premium: 'Advanced' },
    ],
  },
  {
    category: 'Spend management',
    features: [
      { name: 'Expense tracking', standard: true, premium: true },
      { name: 'Budget control', standard: true, premium: true },
      { name: 'Approval workflows', standard: 'Basic', premium: 'Advanced' },
      { name: 'Spend analytics', standard: 'Basic', premium: 'Advanced' },
    ],
  },
  {
    category: 'Omnichannel commerce',
    features: [
      { name: 'E-commerce integration', standard: true, premium: true },
      { name: 'POS system', standard: false, premium: true },
      { name: 'Marketplace integration', standard: false, premium: true },
      { name: 'Multi-channel inventory', standard: false, premium: true },
    ],
  },
  {
    category: 'People and payroll operations',
    features: [
      { name: 'Employee management', standard: true, premium: true },
      { name: 'Payroll processing', standard: true, premium: true },
      { name: 'Leave management', standard: true, premium: true },
      { name: 'Attendance tracking', standard: true, premium: true },
      { name: 'Performance management', standard: false, premium: true },
    ],
  },
  {
    category: 'Reporting & analytics',
    features: [
      { name: 'Standard reports', standard: true, premium: true },
      { name: 'Custom reports', standard: 'Limited', premium: 'Unlimited' },
      { name: 'Dashboards', standard: 'Basic', premium: 'Advanced' },
      { name: 'Data export', standard: true, premium: true },
      { name: 'API access', standard: 'Limited', premium: 'Full' },
    ],
  },
  {
    category: 'Customization and automation',
    features: [
      { name: 'Custom fields', standard: 'Limited', premium: 'Unlimited' },
      { name: 'Workflow automation', standard: 'Basic', premium: 'Advanced' },
      { name: 'Custom modules', standard: false, premium: true },
      { name: 'API integrations', standard: 'Limited', premium: 'Unlimited' },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Payment gateways', standard: true, premium: true },
      { name: 'Banking integrations', standard: true, premium: true },
      { name: 'E-commerce platforms', standard: 'Limited', premium: 'All' },
      { name: 'Third-party apps', standard: 'Basic', premium: 'Premium' },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Who are users?',
    answer:
      'Users have full control over the account. They can view and access all modules and data, configure features, manage roles, set up workflows, access reports, and control billing and subscriptions. Users also have full access to the user portal.',
  },
  {
    question: 'Who are employees?',
    answer:
      'Employees are internal staff who are given access to the application to manage their payroll, travel and expense claims in their self-service portal, and other operational activities based on assigned roles and permissions.',
  },
  {
    question: 'If an employee is also a salesperson, do I need to purchase two licenses?',
    answer:
      'No, an employee who performs sales activities requires only a single license. Sales roles are assigned as part of the employee\'s role-based access and do not require an additional license.',
  },
  {
    question: 'Are there any limits on transactions?',
    answer:
      'The Standard plan allows you to create 100,000 transactions and the Premium plan allows you to create up to 300,000 transactions (including sales, purchase, and manufacturing orders). If your business requires a higher transaction limit, you can reach out to us and we\'ll help you scale your plan.',
  },
  {
    question: 'Can I try the product before purchasing it?',
    answer:
      'Absolutely. We offer a 14-day free trial so you can explore features, workflows, and integrations before making a purchase decision.',
  },
  {
    question: 'How can I pay?',
    answer:
      'We accept payments via Visa, Mastercard, and American Express. We also accept PayPal and bank transfers for yearly subscriptions.',
  },
  {
    question: 'Do you store my credit card information?',
    answer:
      'No, we don\'t store your credit card information. All payment processing is handled securely through our payment partners.',
  },
  {
    question: 'How long are your contracts?',
    answer:
      'We offer a pay-as-you-grow service, ensuring that you are not bound by a contract to stay subscribed. You can start and stop your subscription any time you wish to.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Safeguarding your data is a top priority. Our infrastructure is secured around the clock with advanced monitoring and industry-standard encryption. We employ intrusion detection and prevention technologies to protect your data.',
  },
  {
    question: 'I have questions on walkthrough and pricing guidance?',
    answer:
      'We are available Mon - Fri (9:00 AM to 6:00 PM). You can either call us or email us at support@example.com for personalized assistance.',
  },
];

export const pricingStats: PricingStat[] = [
  {
    value: '10K+',
    label: 'Active Users',
  },
  {
    value: '5+',
    label: 'Years',
  },
  {
    value: '50+',
    label: 'Countries',
  },
  {
    value: '99.9%',
    label: 'Uptime',
  },
];
