import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'cndhhzr5',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for better performance on public data
  perspective: 'published', // Only fetch published content
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
