import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { getFeaturedTestimonials } from '@/lib/sanity-queries';
import { urlFor } from '@/lib/sanity';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => {
  return (
    <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-[#475569] text-lg leading-relaxed italic mb-8">
          "{testimonial.content}"
        </p>
      </blockquote>
      
      <div className="flex items-center gap-4 border-t border-[#e2e8f0] pt-6">
        {testimonial.image && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-[#e2e8f0]">
            <Image
              src={urlFor(testimonial.image).width(100).height(100).url()}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div>
          <h4 className="font-semibold text-[#0f172a] text-base leading-tight">
            {testimonial.name}
          </h4>
          <p className="text-[#64748b] text-sm font-medium mt-1">
            {testimonial.role}
          </p>
          <a 
            href="#" 
            className="text-[#60a5fa] text-xs font-semibold hover:underline mt-0.5 block"
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
    <section className="py-24 px-4 bg-gradient-to-br from-white via-[#fef3f2] to-white overflow-hidden">
      <div className="px-7 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.25rem] font-bold text-[#0f172a] mb-5 tracking-tight">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto leading-relaxed">
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