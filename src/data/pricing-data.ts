import { PricingTier, FeatureCategory, FAQ, PricingStat } from '@/types/pricing';

export const pricingTiers: PricingTier[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Perfect for startups and small teams getting started with basic business operations.',
    monthlyPrice: {
      user: 0,
      employee: 0,
    },
    yearlyPrice: {
      user: 0,
      employee: 0,
    },
    minUsers: 1,
    maxTransactions: 1000,
    features: [
      'Up to 3 users',
      'Basic financials',
      'Sales & Purchases (limited)',
      'Basic inventory management',
      'Standard reports',
      'Email support',
      'Community access',
    ],
    cta: {
      primary: 'Get started free',
      secondary: 'Learn more',
    },
  },
  {
    id: 'pro',
    name: 'Pro',
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
      'Everything in Free',
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
      'Everything in Pro',
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
      { name: 'Sales', free: 'Limited', pro: true, enterprise: true },
      { name: 'Purchases', free: 'Limited', pro: true, enterprise: true },
      { name: 'Banking', free: false, pro: true, enterprise: true },
      { name: 'For accountants', free: false, pro: true, enterprise: true },
      { name: 'GST compliance', free: false, pro: true, enterprise: true },
      { name: 'Internal finance control', free: false, pro: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Supply chain management',
    features: [
      { name: 'Supplier management', free: false, pro: true, enterprise: true },
      { name: 'Sourcing', free: false, pro: true, enterprise: true },
      { name: 'Procurement', free: false, pro: true, enterprise: true },
      { name: 'Inventory management', free: 'Basic', pro: true, enterprise: true },
      { name: 'Order management', free: false, pro: true, enterprise: true },
      { name: 'Warehouse management', free: false, pro: true, enterprise: true },
      { name: 'Quality', free: false, pro: true, enterprise: true },
      { name: 'Manufacturing operations', free: false, pro: true, enterprise: true },
      { name: 'Distribution operations', free: false, pro: true, enterprise: true },
      { name: 'Retail operations', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Billing management',
    features: [
      { name: 'Subscription billing', free: false, pro: true, enterprise: true },
      { name: 'Invoice management', free: 'Basic', pro: true, enterprise: true },
      { name: 'Payment processing', free: false, pro: true, enterprise: true },
      { name: 'Revenue recognition', free: false, pro: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Spend management',
    features: [
      { name: 'Expense tracking', free: false, pro: true, enterprise: true },
      { name: 'Budget control', free: false, pro: true, enterprise: true },
      { name: 'Approval workflows', free: false, pro: 'Advanced', enterprise: 'Custom' },
      { name: 'Spend analytics', free: false, pro: 'Advanced', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Omnichannel commerce',
    features: [
      { name: 'E-commerce integration', free: false, pro: true, enterprise: true },
      { name: 'POS system', free: false, pro: true, enterprise: true },
      { name: 'Marketplace integration', free: false, pro: true, enterprise: true },
      { name: 'Multi-channel inventory', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'People and payroll operations',
    features: [
      { name: 'Employee management', free: false, pro: true, enterprise: true },
      { name: 'Payroll processing', free: false, pro: true, enterprise: true },
      { name: 'Leave management', free: false, pro: true, enterprise: true },
      { name: 'Attendance tracking', free: false, pro: true, enterprise: true },
      { name: 'Performance management', free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: 'Reporting & analytics',
    features: [
      { name: 'Standard reports', free: 'Basic', pro: true, enterprise: true },
      { name: 'Custom reports', free: false, pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Dashboards', free: false, pro: 'Advanced', enterprise: 'Custom' },
      { name: 'Data export', free: 'Limited', pro: true, enterprise: true },
      { name: 'API access', free: false, pro: 'Full', enterprise: 'Full' },
    ],
  },
  {
    category: 'Customization and automation',
    features: [
      { name: 'Custom fields', free: false, pro: 'Unlimited', enterprise: 'Unlimited' },
      { name: 'Workflow automation', free: false, pro: 'Advanced', enterprise: 'Custom' },
      { name: 'Custom modules', free: false, pro: false, enterprise: true },
      { name: 'API integrations', free: false, pro: 'Unlimited', enterprise: 'Unlimited' },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Payment gateways', free: false, pro: true, enterprise: true },
      { name: 'Banking integrations', free: false, pro: true, enterprise: true },
      { name: 'E-commerce platforms', free: false, pro: 'All', enterprise: 'All' },
      { name: 'Third-party apps', free: false, pro: 'Premium', enterprise: 'Custom' },
    ],
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Email support', free: true, pro: true, enterprise: true },
      { name: 'Priority support', free: false, pro: true, enterprise: true },
      { name: '24/7 support', free: false, pro: false, enterprise: true },
      { name: 'Dedicated account manager', free: false, pro: true, enterprise: true },
      { name: 'Dedicated success team', free: false, pro: false, enterprise: true },
      { name: 'Custom SLA', free: false, pro: false, enterprise: true },
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
      'The Free plan allows up to 1,000 transactions, and the Pro plan allows you to create up to 300,000 transactions (including sales, purchase, and manufacturing orders). Enterprise plans offer unlimited transactions. If your business requires a higher transaction limit, you can reach out to us and we\'ll help you scale your plan.',
  },
  {
    question: 'Can I try the product before purchasing it?',
    answer:
      'Absolutely. You can start with our Free plan to explore basic features, or sign up for a 14-day free trial of the Pro plan to access all advanced features, workflows, and integrations before making a purchase decision.',
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
