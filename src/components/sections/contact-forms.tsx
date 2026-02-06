"use client";

import React, { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const ContactForms = () => {
  const [contactLoading, setContactLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        e.currentTarget.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setContactLoading(false);
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDemoLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      employees: formData.get('employees') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Demo request sent successfully!');
        e.currentTarget.reset();
      } else {
        toast.error('Failed to send demo request. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#fef3f2] via-white to-[#ecfeff]">
      <div className="px-7 mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Send us a Message Form */}
          <div className="rounded-xl bg-white/80 backdrop-blur-sm text-[#0f172a] border-2 border-white/50 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold tracking-tight flex items-center text-[#0f172a]">
                <Send className="mr-3 h-6 w-6 text-[#60a5fa]" />
                Send us a Message
              </div>
            </div>
            <div className="p-6 pt-0">
              <form 
                className="space-y-4" 
                onSubmit={handleContactSubmit}
              >
                <div>
                  <label 
                    htmlFor="contact-name" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-email" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-phone" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+91 12345 67890"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="What is this about?"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="flex min-h-[120px] w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  ></textarea>
                </div>
                <Button type="submit" variant="default" className="w-full shadow-lg hover:shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold" disabled={contactLoading}>
                  {contactLoading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>

          {/* Request a Demo Form */}
          <div className="rounded-xl bg-white/80 backdrop-blur-sm text-[#0f172a] border-2 border-white/50 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold tracking-tight flex items-center text-[#0f172a]">
                <Calendar className="mr-3 h-6 w-6 text-[#10b981]" />
                Request a Demo
              </div>
            </div>
            <div className="p-6 pt-0">
              <form 
                className="space-y-4"
                onSubmit={handleDemoSubmit}
              >
                <div>
                  <label 
                    htmlFor="demo-name" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="demo-name"
                    name="name"
                    placeholder="Your full name"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-email" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="demo-email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-phone" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    placeholder="+91 12345 67890"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-company" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="demo-company"
                    name="company"
                    placeholder="Your company name"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-employees" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Number of Employees
                  </label>
                  <input
                    type="text"
                    id="demo-employees"
                    name="employees"
                    placeholder="e.g., 10-50, 50-100"
                    className="flex h-9 w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-message" 
                    className="text-sm font-medium leading-none text-[#334155]"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="demo-message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    className="flex min-h-[85px] w-full rounded-md border border-[#e2e8f0] bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] disabled:cursor-not-allowed disabled:opacity-50 mt-1"
                  ></textarea>
                </div>
                <Button type="submit" variant="default" className="w-full bg-gradient-to-r from-[#10b981] to-[#22d3ee] hover:from-[#10b981]/90 hover:to-[#22d3ee]/90 shadow-lg hover:shadow-xl border-0 font-semibold" disabled={demoLoading}>
                  {demoLoading ? 'Sending...' : 'Request Demo'}
                  <Calendar className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForms;