import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { getAllBlogs } from "@/lib/sanity-queries";
import { urlFor } from "@/lib/sanity";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, User, ArrowRight } from "lucide-react";

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function BlogPage() {
  const blogs = await getAllBlogs();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Blog
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, updates, and best practices for modern ERP systems
              </p>
            </div>

            {blogs && blogs.length > 0 ? (
              <>
                {/* Featured Blog */}
                {blogs[0] && (
                  <div className="mb-16">
                    <Link
                      href={`/blog/${blogs[0].slug}`}
                      className="group block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="grid md:grid-cols-2 gap-0">
                        {blogs[0].mainImage && (
                          <div className="h-64 md:h-full overflow-hidden">
                            <img
                              src={urlFor(blogs[0].mainImage).width(800).height(600).url()}
                              alt={blogs[0].title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-semibold text-white bg-indigo-600 px-4 py-2 rounded-full">
                              Featured
                            </span>
                            {blogs[0].categories?.[0] && (
                              <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full">
                                {blogs[0].categories[0]}
                              </span>
                            )}
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                            {blogs[0].title}
                          </h2>
                          <p className="text-gray-600 mb-6 text-lg line-clamp-3">
                            {blogs[0].excerpt}
                          </p>
                          <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{blogs[0].author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{format(new Date(blogs[0].publishedAt), 'MMM dd, yyyy')}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all">
                            Read More
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogs.slice(1).map((blog: any) => (
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
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            <span className="font-medium">{blog.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>{format(new Date(blog.publishedAt), 'MMM dd')}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-10 h-10 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No Blog Posts Yet</h3>
                  <p className="text-gray-600">
                    Check back soon for insights and updates about our ERP system.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
