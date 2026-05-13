# Modules Setup Guide - Niche-Specific Product Trials

## Overview
Your modules pages have been updated to work like Odoo and Zoho, where users can try specific modules based on their business niche. Each module now has:

- **Direct trial links** - Users can start using the product immediately
- **Industry-specific targeting** - Shows which businesses benefit most
- **Use case examples** - Real scenarios for different industries
- **Sticky trial banner** - Persistent CTA as users scroll
- **Enhanced CTAs** - Focus on conversion and trial signup

## What Changed

### 1. Schema Updates (Sanity CMS)
New fields added to the `module` schema:
- `productUrl` - Direct link to signup/trial page
- `trialDuration` - e.g., "14 days", "30 days"
- `targetAudience` - Array of business types
- `useCases` - Industry-specific scenarios

### 2. Component Updates
- **Module Hero** - Now shows trial CTA, target audience badge, trust indicators
- **Module CTA** - Displays use cases by industry, multiple CTAs
- **Sticky Trial Banner** - Appears after scrolling, persistent conversion tool
- **Modules Grid** - Card-based layout with trial badges and dual CTAs

### 3. UX Improvements
- Clear "Start Free Trial" buttons throughout
- Industry-specific messaging
- Trust indicators (no credit card, cancel anytime)
- Smooth scroll to demo section
- Mobile-responsive design

## How to Populate Sanity Data

### Step 1: Access Sanity Studio
```bash
cd studio-bay53
npm run dev
# Visit http://localhost:3333
```

### Step 2: Update Each Module
For each module (Accounting, Inventory, Sales, etc.), add:

#### Product URL
```
https://app.bay53.com/signup?module=accounting
https://app.bay53.com/signup?module=inventory
https://app.bay53.com/signup?module=sales
```
*Replace with your actual signup URLs*

#### Trial Duration
```
14 days
21 days
30 days
Free forever
```

#### Target Audience (Array)
```
Manufacturing Firms
Retail Businesses
Service Companies
E-commerce Stores
Wholesale Distributors
Professional Services
```

#### Use Cases (Array of Objects)
Each use case has:
- **Industry**: e.g., "Manufacturing"
- **Scenario**: Detailed description

Example for Inventory Module:
```
Industry: Manufacturing
Scenario: Track raw materials, work-in-progress, and finished goods across multiple production facilities with real-time stock alerts.

Industry: E-commerce
Scenario: Sync inventory across multiple sales channels, automate reordering, and prevent overselling with real-time stock updates.

Industry: Wholesale Distribution
Scenario: Manage bulk inventory movements, track batch numbers for compliance, and optimize warehouse space utilization.
```

### Step 3: Use the Seed Data
Reference `studio-bay53/seed-modules-enhanced.ts` for complete examples of:
- Product URLs for all modules
- Trial durations
- Target audiences
- Industry-specific use cases

## Example: Complete Module Setup

### Inventory Module
```json
{
  "title": "Inventory",
  "slug": "inventory",
  "heroTitle": "Smart Inventory & Warehouse Management",
  "heroDescription": "Optimize your stock levels and warehouse operations...",
  "productUrl": "https://app.bay53.com/signup?module=inventory",
  "trialDuration": "14 days",
  "targetAudience": [
    "Manufacturing Firms",
    "Warehouses",
    "Retail Chains",
    "E-commerce"
  ],
  "useCases": [
    {
      "industry": "Manufacturing",
      "scenario": "Track raw materials, work-in-progress, and finished goods across multiple production facilities with real-time stock alerts."
    },
    {
      "industry": "E-commerce",
      "scenario": "Sync inventory across multiple sales channels, automate reordering, and prevent overselling with real-time stock updates."
    }
  ]
}
```

## User Journey

### Before (Generic)
1. User visits modules page
2. Sees generic descriptions
3. Clicks "Learn More"
4. Reads about features
5. Maybe contacts sales

### After (Niche-Specific)
1. User visits modules page
2. Sees "Perfect for Manufacturing Firms" badge
3. Reads industry-specific use case
4. Clicks "Start Free 14 Days Trial"
5. **Immediately starts using the product**

## Key Features

### Modules Listing Page (`/modules`)
- Hero with value propositions
- Grid of modules with trial badges
- Target audience tags
- Dual CTAs (Start Trial + Learn More)
- "Talk to Expert" fallback

### Module Detail Page (`/modules/[slug]`)
- Hero with trial CTA and trust indicators
- Target audience badge
- Industry-specific use cases section
- Sticky trial banner (appears on scroll)
- Multiple conversion points

### Sticky Trial Banner
- Appears after 300px scroll
- Shows module name and trial duration
- Dismissible
- Mobile-responsive
- Direct link to product signup

## Testing Checklist

- [ ] All modules have productUrl set
- [ ] Trial durations are populated
- [ ] Target audiences are relevant
- [ ] Use cases are industry-specific
- [ ] Product URLs work and redirect correctly
- [ ] Sticky banner appears on scroll
- [ ] Mobile layout looks good
- [ ] CTAs are prominent and clear
- [ ] Trust indicators are visible

## Next Steps

1. **Update Sanity Data** - Add new fields to all modules
2. **Configure Product URLs** - Point to your actual signup flow
3. **Test User Journey** - Ensure smooth trial signup process
4. **Add Analytics** - Track CTA clicks and conversions
5. **A/B Test** - Try different trial durations and messaging

## Support

If you need help:
- Check `studio-bay53/seed-modules-enhanced.ts` for examples
- Review the updated components in `src/components/sections/module-details/`
- Test with sample data first before going live

---

**Result**: Your modules pages now work like Odoo/Zoho, where users can immediately try the specific module they need for their business, increasing conversion and reducing friction.
