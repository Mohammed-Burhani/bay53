import Link from "next/link";
import { getAllBlogs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import { format } from "date-fns";
import { ArrowRight } from "lucide-react";

export default async function BlogSection() {
  const blogs = await getAllBlogs();

  if (!blogs || blogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and best practices in ERP systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(0, 3).map((blog: any) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {blog.mainImage && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={urlFor(blog.mainImage).width(600).height(400).url()}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {blog.categories?.slice(0, 2).map((category: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                  {blog.featured && (
                    <span className="text-xs font-semibold text-white bg-indigo-600 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="font-medium">{blog.author}</span>
                  <span>{format(new Date(blog.publishedAt), 'MMM dd, yyyy')}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
