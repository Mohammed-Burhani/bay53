export interface SanityModule {
  _id: string
  title: string
  slug: string
  heroTitle: string
  heroDescription: string
  heroImage?: any
  challenges?: Challenge[]
  solutions?: Solution[]
  features?: Feature[]
  workflow?: WorkflowStep[]
  cta_title: string
  productUrl: string
  trialDuration: string
  targetAudience?: string[]
  useCases?: UseCase[]
  order: number
}

export interface UseCase {
  industry: string
  scenario: string
}

export interface Challenge {
  title: string
  description: string
  icon?: any // Sanity image object
}

export interface Solution {
  title: string
  description: string
  icon?: any // Sanity image object
}

export interface Feature {
  title: string
  description: string
  icon?: any // Sanity image object
}

export interface WorkflowStep {
  step: string
  title: string
  description: string
  icon?: any // Sanity image object
}

export interface SanityTestimonial {
  _id: string
  name: string
  role: string
  company: string
  content: string
  image?: any
  rating: number
  featured: boolean
  order?: number
}

export interface SanityBlog {
  _id: string
  title: string
  slug: string
  author: string
  publishedAt: string
  excerpt: string
  mainImage: any
  body?: any[]
  categories?: string[]
  tags?: string[]
  featured: boolean
}
