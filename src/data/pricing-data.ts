import { PricingTier, FeatureCategory, FAQ, PricingStat } from '@/types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    description: 'For growing businesses that need comprehensive features, advanced capabilities, and priority support.',
    monthlyPrice: {
      user: 2999,
      employee: 299,
    },
    yearlyPrice: {
      user: 2499,
      employee: 249,
    },
    minUsers: 5,
    maxTransactions: 300000,
    popular: true,
    features: [
      'Unlimited users',
      'Advanced financial controls',
      'Complete supply chain management',
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
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions tailored to your unique business requirements with dedicated support and implementation.',
    monthlyPrice: {
      user: 0,
      employee: 0,
    },
    yearlyPrice: {
      user: 0,
      employee: 0,
    },
    minUsers: 0,
    features: [
      'Everything in Standard',
      'Custom pricing based on requirements',
      'Unlimited transactions',
      'Custom module development',
      'White-label options',
      'Advanced security & compliance',
      'Dedicated infrastructure',
      'Custom integrations',
      'On-premise deployment option',
      '24/7 premium support',
      'Dedicated success team',
      'Custom SLA agreements',
    ],
    cta: {
      primary: 'Contact sales',
      secondary: 'Schedule consultation',
    },
  },
];

export const featureComparison: FeatureCategory[] = [
  {
    category: 'Core financials',
    features: [
      { name: 'Sales', standard: true, enterprise: true },
      { name: 'Purchases', standard: true, enterprise: true },
      { name: 'Banking', standard: true, enterprise: true },
      { name: 'For accountants', standard: true, enterprise: true },
      { name: 'GST compliance', standard: true, enterprise: true },
      { name: 'Internal finance control', standard: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Supply chain management',
    features: [
      { name: 'Supplier management', standard: true, enterprise: true },
      { name: 'Sourcing', standard: true, enterprise: true },
      { name: 'Procurement', standard: true, enterprise: true },
      { name: 'Inventory management', standard: true, enterprise: true },
      { name: 'Order management', standard: true, enterprise: true },
      { name: 'Warehouse management', standard: true, enterprise: true },
      { name: 'Quality', standard: true, enterprise: true },
      { name: 'Manufacturing operations', standard: true, enterprise: true },
      { name: 'Distribution operations', standard: true, enterprise: true },
      { name: 'Retail operations', standard: true, enterprise: true },
    ],
  },
  {
    category: 'Billing management',
    features: [
      { name: 'Subscription billing', standard: true, enterprise: true },
      { name: 'Invoice management', standard: true, enterprise: true },
      { name: 'Payment processing', standard: true, enterprise: true },
      { name: 'Revenue recognition', standard: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Spend management',
    features: [
      { name: 'Expense tracking', standard: true, enterprise: true },
      { name: 'Budget control', standard: true, enterprise: true },
      { name: 'Approval workflows', standard: 'Advanced', enterprise: 'Custom' },
      { name: 'Spend analytics', standard: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Omnichannel commerce',
    features: [
      { name: 'E-commerce integration', standard: true, enterprise: true },
      { name: 'POS system', standard: true, enterprise: true },
      { name: 'Marketplace integration', standard: true, enterprise: true },
      { name: 'Multi-channel inventory', standard: true, enterprise: true },
    ],
  },
  {
    category: 'People and payroll operations',
    features: [
      { name: 'Employee management', standard: true, enterprise: true },
      { name: 'Payroll processing', standard: true, enterprise: true },
      { name: 'Leave management', standard: true, enterprise: true },
      { name: 'Attendance tracking', standard: true, enterprise: true },
      { name: 'Performance management', standard: true, enterprise: true },
    ],
  },
  {
    category: 'Reporting & analytics',
    features: [
      { name: 'Standard reports', standard: true, enterprise: true },
      { name: 'Custom reports', standard: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Dashboards', standard: 'Advanced', enterprise: 'Custom' },
      { name: 'Data export', standard: true, enterprise: true },
      { name: 'API access', standard: 'Full', enterprise: 'Full' },
    ],
  },
  {
    category: 'Customization and automation',
    features: [
      { name: 'Custom fields', standard: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Workflow automation', standard: 'Advanced', enterprise: 'Custom' },
      { name: 'Custom modules', standard: false, enterprise: true },
      { name: 'API integrations', standard: 'Unlimited', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Payment gateways', standard: true, enterprise: true },
      { name: 'Banking integrations', standard: true, enterprise: true },
      { name: 'E-commerce platforms', standard: 'All', enterprise: 'All' },
      { name: 'Third-party apps', standard: 'Premium', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Email support', standard: true, enterprise: true },
      { name: 'Priority support', standard: true, enterprise: true },
      { name: '24/7 support', standard: false, enterprise: true },
      { name: 'Dedicated account manager', standard: true, enterprise: true },
      { name: 'Dedicated success team', standard: false, enterprise: true },
      { name: 'Custom SLA', standard: false, enterprise: true },
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
      'The Standard plan allows you to create up to 300,000 transactions (including sales, purchase, and manufacturing orders). Enterprise plans offer unlimited transactions. If your business requires a higher transaction limit, you can reach out to us and we\'ll help you scale your plan.',
  },
  {
    question: 'Can I try the product before purchasing it?',
    answer:
      'Absolutely. You can sign up for a 14-day free trial of the Standard plan to access all advanced features, workflows, and integrations before making a purchase decision.',
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
      'We offer a pay-as-you-grow service, ensuring that you are not bound by a contract to stay subscribed. You can start and stop your subscription any time you wish to. Enterprise plans may have custom contract terms based on your requirements.',
  },
  {
    question: 'Is my data safe?',
    answer:
      'Safeguarding your data is a top priority. Our infrastructure is secured around the clock with advanced monitoring and industry-standard encryption. We employ intrusion detection and prevention technologies to protect your data.',
  },
  {
    question: 'What makes the Enterprise plan different?',
    answer:
      'The Enterprise plan is designed for businesses with unique requirements. It includes custom pricing, unlimited transactions, dedicated infrastructure, custom module development, white-label options, 24/7 premium support, and custom SLA agreements. Contact our sales team to discuss your specific needs.',
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
