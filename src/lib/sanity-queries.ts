import { client } from './sanity'

// Module queries
export async function getAllModules() {
  try {
    return await client.fetch(
      `
      *[_type == "module"] | order(order asc) {
        _id,
        title,
        "slug": slug.current,
        heroTitle,
        heroDescription,
        heroImage,
        order
      }
    `,
      {},
      { 
        cache: 'no-store',
        next: { revalidate: 0 }
      }
    )
  } catch (error) {
    console.error('Error fetching modules:', error);
    return [];
  }
}

export async function getModuleBySlug(slug: string) {
  try {
    return await client.fetch(
      `
      *[_type == "module" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        heroTitle,
        heroDescription,
        heroImage,
        challenges,
        solutions,
        features,
        workflow,
        cta_title
      }
    `,
      { slug },
      { 
        cache: 'no-store',
        next: { revalidate: 0 }
      }
    )
  } catch (error) {
    console.error('Error fetching module by slug:', error);
    return null;
  }
}

// Testimonial queries
export async function getAllTestimonials() {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      role,
      company,
      content,
      image,
      rating,
      featured,
      order
    }
  `)
}

export async function getFeaturedTestimonials() {
  return client.fetch(`
    *[_type == "testimonial" && featured == true] | order(order asc) {
      _id,
      name,
      role,
      company,
      content,
      image,
      rating
    }
  `)
}

// Blog queries
export async function getAllBlogs() {
  try {
    return await client.fetch(`
      *[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        "slug": slug.current,
        author,
        publishedAt,
        excerpt,
        mainImage,
        categories,
        tags,
        featured
      }
    `)
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    return await client.fetch(
      `
      *[_type == "blog" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        author,
        publishedAt,
        excerpt,
        mainImage,
        body,
        categories,
        tags
      }
    `,
      { slug }
    )
  } catch (error) {
    console.error('Error fetching blog by slug:', error);
    return null;
  }
}

export async function getFeaturedBlogs() {
  return client.fetch(`
    *[_type == "blog" && featured == true] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      author,
      publishedAt,
      excerpt,
      mainImage,
      categories
    }
  `)
}
