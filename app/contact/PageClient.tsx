'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import { BRAND } from '@/lib/constants/brand';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    region: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        region: '',
        service: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6"
            >
              Let's Build Something <span className="text-gradient">Exceptional Together</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Whether you're ready to start or just exploring your options  we'd love to hear from you. Book a free strategy consultation and let's talk about what's possible for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-neutral-200 p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-neutral-900 mb-8">Send us a Message</h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <CheckCircle2 size={64} className="text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600">
                    We've received your message and will get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">Country / Region</label>
                      <select
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        {['India', 'UK', 'UAE', 'Saudi Arabia', 'Qatar', 'Singapore', 'Malaysia', 'Other'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">Service of Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        {['Digital Marketing', 'AI Automation', 'Software Development', 'Branding', 'Meta Ads', 'Google Ads', 'Conversion Optimisation', 'AI Lead Generation', 'Not Sure Yet'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-900 mb-2">Monthly Budget</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        {['Under Rs 50,000', 'Rs 50K-Rs 2L', 'Rs 2L-Rs 5L', 'Rs 5L+', 'Under GBP 1,000', 'GBP 1K-GBP 5K', 'GBP 5K+', 'Prefer not to say'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Message / Tell us about your goals
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Your Message
                    <Send size={20} />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Email */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-brand-600 hover:text-brand-700 transition-smooth"
                  >
                    {BRAND.email}
                  </a>
                  <p className="text-xs text-neutral-500 mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Website */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Website</h3>
                  <a
                    href={`https://${BRAND.website}`}
                    className="text-brand-600 hover:text-brand-700 transition-smooth"
                  >
                    {BRAND.website}
                  </a>
                  <p className="text-xs text-neutral-500 mt-2">
                    Serving India, the UK, the Middle East, and Asia
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a href={BRAND.whatsapp ? `https://wa.me/${String(BRAND.whatsapp).replace(/\D/g, '')}` : '/contact'}>
              <div className="bg-white rounded-xl border border-neutral-200 p-6 hover:border-brand-300 transition-smooth cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-green-600 hover:text-green-700 text-sm font-medium transition-smooth">
                      Chat with us now
                    </p>
                    <p className="text-xs text-neutral-500 mt-2">
                      Quick response via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Location
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {BRAND.markets.join(' | ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-brand-50 rounded-xl border border-brand-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-200 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">
                    Business Hours
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Monday - Friday: 9am - 6pm PST
                  </p>
                  <p className="text-sm text-neutral-600">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Consultation Booking CTA */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Book a Free 30-Minute Strategy Call
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 mb-8"
          >
            No pressure, no sales scripts  just an honest conversation about your goals and how Kynosi can help. We'll audit your current digital presence and identify your biggest growth opportunities on the call.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="min-w-fit">
              Schedule Your Call 
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-fit"
            >
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Trust Signals */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {['500+ Projects Delivered', '98% Client Satisfaction', 'Response within 24 hours', 'No obligation, no pressure'].map((signal) => (
            <div key={signal} className="bg-white rounded-xl p-6 border border-neutral-200 text-center">
              <p className="font-semibold text-neutral-900">{signal}</p>
            </div>
          ))}
        </motion.div>
      </SectionContainer>
    </>
  );
}


