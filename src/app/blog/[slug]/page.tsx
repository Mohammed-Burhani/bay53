import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getBlogBySlug, getAllBlogs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PortableText } from '@portabletext/react';

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  
  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }
  
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <article className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {blog.mainImage && (
              <div className="mb-8 rounded-2xl overflow-hidden">
                <img
                  src={urlFor(blog.mainImage).width(1200).height(600).url()}
                  alt={blog.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                {blog.categories?.map((category: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="font-medium">{blog.author}</span>
                <span>•</span>
                <span>{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <PortableText value={blog.body} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
