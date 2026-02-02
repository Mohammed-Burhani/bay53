import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { getFeaturedTestimonials } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-[#4b5563] text-lg leading-relaxed italic mb-8">
          "{testimonial.content}"
        </p>
      </blockquote>
      
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
            <Image
              src={urlFor(testimonial.image).width(100).height(100).url()}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-[#111827] text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-[#6b7280] text-sm font-medium mt-1">
            {testimonial.role}
          </p>
          <a 
            href="#" 
            className="text-[#4f46e5] text-xs font-semibold hover:underline mt-0.5 block"
          >
            {testimonial.company}
          </a>
        </div>
      </div>
    </div>
  );
};

export default async function Testimonials() {
  const testimonials = await getFeaturedTestimonials();

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.25rem] font-bold text-[#111827] mb-5 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Trusted by over 1000+ companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: any) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center items-center gap-8 opacity-40 grayscale pointer-events-none overflow-hidden select-none">
          {/* Decorative logos or trust indicators could go here if needed, matching the "1000+ companies" claim */}
        </div>
      </div>
    </section>
  );
}