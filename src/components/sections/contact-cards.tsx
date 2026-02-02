import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactCards = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="px-7 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <div className="rounded-xl bg-card text-card-foreground shadow-soft border-2 border-[#f3f4f6] hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="p-6 pt-6">
              <div className="w-16 h-16 bg-[#eef2ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#4f46e5]" />
              </div>
              <h3 className="text-[1.125rem] font-semibold text-[#111827] mb-2">Email Us</h3>
              <a 
                href="mailto:info@burhanitechnologies.com" 
                className="text-[#4f46e5] text-[1rem] hover:underline"
              >
                info@burhanitechnologies.com
              </a>
            </div>
          </div>

          {/* Call Card */}
          <div className="rounded-xl bg-card text-card-foreground shadow-soft border-2 border-[#f3f4f6] hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="p-6 pt-6">
              <div className="w-16 h-16 bg-[#f0fdf4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#16a34a]" />
              </div>
              <h3 className="text-[1.125rem] font-semibold text-[#111827] mb-2">Call Us</h3>
              <a 
                href="tel:+917299002152" 
                className="text-[#16a34a] text-[1rem] hover:underline"
              >
                +91 72990 02152
              </a>
            </div>
          </div>

          {/* Visit Card */}
          <div className="rounded-xl bg-card text-card-foreground shadow-soft border-2 border-[#f3f4f6] hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="p-6 pt-6">
              <div className="w-16 h-16 bg-[#f5f3ff] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#9333ea]" />
              </div>
              <h3 className="text-[1.125rem] font-semibold text-[#111827] mb-2">Visit Us</h3>
              <p className="text-[#4b5563] text-[1rem]">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCards;