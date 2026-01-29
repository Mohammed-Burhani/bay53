import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getAllBlogs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { format } from "date-fns";

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, updates, and best practices for modern ERP systems
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog: any) => (
                <Link
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
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
                    <div className="flex items-center gap-2 mb-3">
                      {blog.categories?.map((category: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{blog.author}</span>
                      <span>{format(new Date(blog.publishedAt), 'MMM dd, yyyy')}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
