import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Bay53 has transformed our business operations completely. The integrated modules and real-time reporting have given us unprecedented visibility into our operations. Highly recommended for SMEs!",
    author: "Rajesh Kumar",
    role: "Managing Director",
    company: "Alpha Manufacturing Ltd.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f807af7c-0729-4437-95d4-4c3ff0c66b94-bay53-vercel-app/assets/images/images_1.png",
    rating: 5
  },
  {
    id: 2,
    quote: "The financial management capabilities of Bay53 are exceptional. From multi-currency support to automated reconciliation, everything works seamlessly. The support team is always there when we need them.",
    author: "Priya Sharma",
    role: "CFO",
    company: "TechVision Solutions Pvt. Ltd.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f807af7c-0729-4437-95d4-4c3ff0c66b94-bay53-vercel-app/assets/images/images_2.png",
    rating: 5
  },
  {
    id: 3,
    quote: "We were looking for an affordable yet powerful ERP solution for our growing business. Bay53 exceeded our expectations with its comprehensive features and ease of use. Best investment we made!",
    author: "Mohammed Ali",
    role: "Operations Manager",
    company: "Global Traders Inc.",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/f807af7c-0729-4437-95d4-4c3ff0c66b94-bay53-vercel-app/assets/images/images_3.png",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  return (
    <div className="flex flex-col h-full bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
        ))}
      </div>
      
      <blockquote className="flex-grow">
        <p className="text-[#4b5563] text-lg leading-relaxed italic mb-8">
          "{testimonial.quote}"
        </p>
      </blockquote>
      
      <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
          <Image
            src={testimonial.avatar}
            alt={testimonial.author}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-[#111827] text-base leading-tight">
            {testimonial.author}
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

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.25rem] font-bold text-[#111827] mb-5 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-xl text-[#4b5563] max-w-3xl mx-auto leading-relaxed">
            Trusted by over 1000+ companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center items-center gap-8 opacity-40 grayscale pointer-events-none overflow-hidden select-none">
          {/* Decorative logos or trust indicators could go here if needed, matching the "1000+ companies" claim */}
        </div>
      </div>
    </section>
  );
}