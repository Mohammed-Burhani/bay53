export type BillingPeriod = 'monthly' | 'yearly';

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  monthlyPrice: {
    user: number;
    employee: number;
  };
  yearlyPrice: {
    user: number;
    employee: number;
  };
  features: string[];
  popular?: boolean;
  minUsers: number;
  maxTransactions?: number;
  cta: {
    primary: string;
    secondary: string;
  };
}

export interface Feature {
  name: string;
  free: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

export interface FeatureCategory {
  category: string;
  features: Feature[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PricingStat {
  value: string;
  label: string;
}
