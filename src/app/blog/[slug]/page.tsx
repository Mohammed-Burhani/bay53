import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getBlogBySlug, getAllBlogs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { PortableText } from '@portabletext/react';
import { Calendar, User, Tag, ArrowLeft } from "lucide-react";
import Link from "next/link";

// Revalidate every 60 seconds
export const revalidate = 60;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  
  if (!blogs || !Array.isArray(blogs)) {
    return [];
  }
  
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-lg overflow-hidden">
        <img
          src={urlFor(value).width(1200).url()}
          alt={value.alt || 'Blog image'}
          className="w-full h-auto"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-12 mb-6">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-gray-700 leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-indigo-600 pl-6 py-2 my-8 italic text-gray-700 bg-indigo-50 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800 underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }: any) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: any) => (
      <code className="bg-gray-100 text-indigo-600 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
  },
};

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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-8 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Hero Image */}
            {blog.mainImage && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={urlFor(blog.mainImage).width(1200).height(600).url()}
                  alt={blog.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Article Header */}
            <div className="mb-12 bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-2 mb-6 flex-wrap">
                {blog.categories?.map((category: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {blog.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {blog.excerpt}
              </p>
              
              <div className="flex items-center gap-6 text-gray-600 border-t pt-6">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-600" />
                  <span className="font-medium">{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span>{format(new Date(blog.publishedAt), 'MMMM dd, yyyy')}</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-12">
              <div className="prose prose-lg max-w-none">
                <PortableText value={blog.body} components={portableTextComponents} />
              </div>
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-5 h-5 text-indigo-600" />
                  <span className="font-semibold text-gray-900">Tags:</span>
                  {blog.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg mb-8 opacity-90">
                Discover how our ERP system can streamline your operations
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
