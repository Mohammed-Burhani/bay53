import React from 'react';
import { Clock } from 'lucide-react';

const BusinessHours = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="rounded-xl bg-white text-gray-900 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] border-2 border-[#f3f4f6] transition-shadow duration-300">
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="font-semibold tracking-tight text-2xl flex items-center justify-center text-[#111827]">
              <Clock className="mr-3 h-6 w-6 text-[#4f46e5]" />
              Business Hours
            </div>
          </div>
          <div className="p-6 pt-0">
            <div className="space-y-3 text-center">
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="text-gray-700 font-medium text-base">Monday - Friday:</span>
                <span className="text-gray-600 text-base">9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="text-gray-700 font-medium text-base">Saturday:</span>
                <span className="text-gray-600 text-base">9:00 AM - 1:00 PM IST</span>
              </div>
              <div className="flex justify-between items-center max-w-md mx-auto">
                <span className="text-gray-700 font-medium text-base">Sunday:</span>
                <span className="text-gray-600 text-base">Closed</span>
              </div>
              <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-lg mx-auto">
                For urgent support, please call us or send an email. We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHours;