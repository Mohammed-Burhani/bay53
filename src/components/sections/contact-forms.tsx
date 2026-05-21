"use client";

import React, { useState } from 'react';
import { Send, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';
import { useRecaptcha } from '@/hooks/use-recaptcha';

const ContactForms = () => {
  const [contactLoading, setContactLoading] = useState(false);
  const [demoLoading, setDemoLoading] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('');
  const [customSubject, setCustomSubject] = useState('');
  const { getRecaptchaToken } = useRecaptcha();

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setContactLoading(true);

    try {
      console.log('Starting contact form submission...');
      console.log('Event target:', e.target);
      console.log('Event currentTarget:', e.currentTarget);
      
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken('contact_form');
      console.log('reCAPTCHA token received:', recaptchaToken ? 'Yes' : 'No');
      
      if (!recaptchaToken) {
        console.error('reCAPTCHA token is null or undefined');
        toast.error('reCAPTCHA verification failed. Please try again.');
        setContactLoading(false);
        return;
      }

      // Use e.target instead of e.currentTarget for better compatibility
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Determine the subject value
      const subjectValue = selectedSubject === 'custom' ? customSubject : selectedSubject;
      
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        subject: subjectValue,
        message: formData.get('message') as string,
        recaptchaToken,
      };

      console.log('Sending request to /api/contact with data:', { ...data, recaptchaToken: 'HIDDEN' });

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log('API response status:', response.status);

      if (response.ok) {
        toast.success('Message sent successfully!');
        form.reset();
        setSelectedSubject('');
        setCustomSubject('');
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        toast.error(errorData.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setContactLoading(false);
    }
  };

  const handleDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDemoLoading(true);

    try {
      console.log('Starting demo form submission...');
      console.log('Event target:', e.target);
      console.log('Event currentTarget:', e.currentTarget);
      
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken('demo_request');
      console.log('reCAPTCHA token received:', recaptchaToken ? 'Yes' : 'No');
      
      if (!recaptchaToken) {
        console.error('reCAPTCHA token is null or undefined');
        toast.error('reCAPTCHA verification failed. Please try again.');
        setDemoLoading(false);
        return;
      }

      // Use e.target instead of e.currentTarget for better compatibility
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        employees: formData.get('employees') as string,
        message: formData.get('message') as string,
        recaptchaToken,
      };

      console.log('Sending request to /api/demo with data:', { ...data, recaptchaToken: 'HIDDEN' });

      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      console.log('API response status:', response.status);

      if (response.ok) {
        toast.success('Demo request sent successfully!');
        form.reset();
      } else {
        const errorData = await response.json();
        console.error('API error:', errorData);
        toast.error(errorData.error || 'Failed to send demo request. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('An error occurred. Please try again.');
    } finally {
      setDemoLoading(false);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#fef3f2] via-white to-[#ecfeff]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
            Have questions? We're here to help. Choose how you'd like to connect with us.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Send us a Message Form */}
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-[#0f172a] border-2 border-white/50 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-8 bg-gradient-to-r from-[#60a5fa]/5 to-[#10b981]/5 border-b border-[#e2e8f0]">
              <div className="text-2xl font-bold tracking-tight flex items-center text-[#0f172a]">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#60a5fa] to-[#3b82f6] mr-3 shadow-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                Send us a Message
              </div>
              <p className="text-sm text-[#64748b] mt-2">
                We'll get back to you within 24 hours
              </p>
            </div>
            <div className="p-8">
              <form 
                className="space-y-5" 
                onSubmit={handleContactSubmit}
              >
                <div>
                  <label 
                    htmlFor="contact-name" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your full name"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:border-[#60a5fa] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-email" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:border-[#60a5fa] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-phone" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+91 12345 67890"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:border-[#60a5fa] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Select 
                    value={selectedSubject} 
                    onValueChange={setSelectedSubject}
                    required
                  >
                    <SelectTrigger className="h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 shadow-sm hover:border-[#cbd5e1] focus:ring-2 focus:ring-[#60a5fa] focus:border-[#60a5fa]">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                      <SelectItem value="product-information">Product Information</SelectItem>
                      <SelectItem value="pricing-plans">Pricing & Plans</SelectItem>
                      <SelectItem value="technical-support">Technical Support</SelectItem>
                      <SelectItem value="implementation">Implementation & Setup</SelectItem>
                      <SelectItem value="module-inquiry">Module Inquiry</SelectItem>
                      <SelectItem value="integration">Integration Support</SelectItem>
                      <SelectItem value="training">Training & Onboarding</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                      <SelectItem value="custom">Custom (Specify Below)</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  {selectedSubject === 'custom' && (
                    <input
                      type="text"
                      id="custom-subject"
                      value={customSubject}
                      onChange={(e) => setCustomSubject(e.target.value)}
                      placeholder="Please specify your subject"
                      className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:border-[#60a5fa] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50 mt-3"
                      required
                    />
                  )}
                </div>
                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    className="flex min-h-[140px] w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-3 text-sm shadow-sm placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60a5fa] focus-visible:border-[#60a5fa] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="default" 
                  className="w-full h-12 shadow-lg hover:shadow-xl bg-gradient-to-r from-[#60a5fa] to-[#10b981] hover:from-[#60a5fa]/90 hover:to-[#10b981]/90 border-0 font-semibold text-base transition-all duration-300" 
                  disabled={contactLoading}
                >
                  {contactLoading ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Request a Demo Form */}
          <div className="rounded-2xl bg-white/90 backdrop-blur-sm text-[#0f172a] border-2 border-white/50 shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
            <div className="flex flex-col space-y-1.5 p-8 bg-gradient-to-r from-[#10b981]/5 to-[#22d3ee]/5 border-b border-[#e2e8f0]">
              <div className="text-2xl font-bold tracking-tight flex items-center text-[#0f172a]">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[#10b981] to-[#059669] mr-3 shadow-lg">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                Request a Demo
              </div>
              <p className="text-sm text-[#64748b] mt-2">
                See BAY53 ERP in action with a personalized demo
              </p>
            </div>
            <div className="p-8">
              <form 
                className="space-y-5"
                onSubmit={handleDemoSubmit}
              >
                <div>
                  <label 
                    htmlFor="demo-name" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="demo-name"
                    name="name"
                    placeholder="Your full name"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-email" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="demo-email"
                    name="email"
                    placeholder="your.email@example.com"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-phone" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="demo-phone"
                    name="phone"
                    placeholder="+91 12345 67890"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-company" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="demo-company"
                    name="company"
                    placeholder="Your company name"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-employees" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Number of Employees
                  </label>
                  <input
                    type="text"
                    id="demo-employees"
                    name="employees"
                    placeholder="e.g., 10-50, 50-100"
                    className="flex h-11 w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-2 text-sm shadow-sm transition-all placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div>
                  <label 
                    htmlFor="demo-message" 
                    className="text-sm font-semibold leading-none text-[#334155] mb-2 block"
                  >
                    Additional Information
                  </label>
                  <textarea
                    id="demo-message"
                    name="message"
                    placeholder="Tell us about your requirements and which modules interest you..."
                    className="flex min-h-[100px] w-full rounded-lg border-2 border-[#e2e8f0] bg-white px-4 py-3 text-sm shadow-sm placeholder:text-[#94a3b8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:border-[#10b981] hover:border-[#cbd5e1] disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  variant="default" 
                  className="w-full h-12 bg-gradient-to-r from-[#10b981] to-[#22d3ee] hover:from-[#10b981]/90 hover:to-[#22d3ee]/90 shadow-lg hover:shadow-xl border-0 font-semibold text-base transition-all duration-300" 
                  disabled={demoLoading}
                >
                  {demoLoading ? (
                    <>
                      <span className="animate-pulse">Sending...</span>
                    </>
                  ) : (
                    <>
                      Request Demo
                      <Calendar className="ml-2 h-5 w-5" />
                    </>
                  )}
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