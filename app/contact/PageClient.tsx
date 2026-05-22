'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { SectionContainer } from '@/components';
import { Button } from '@/components';
import { BRAND } from '@/lib/constants/brand';
import { PROJECT_FAQS } from '@/lib/data/faqs';


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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const subject = encodeURIComponent(`New project enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Company: ${formData.company || 'Not provided'}`,
        `Phone: ${formData.phone || 'Not provided'}`,
        `Region: ${formData.region || 'Not selected'}`,
        `Service: ${formData.service || 'Not selected'}`,
        `Budget: ${formData.budget || 'Not selected'}`,
        '',
        'Message:',
        formData.message,
      ].join('\n')
    );

    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
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
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a href="#contact-form" className="inline-flex">
                <Button as="span" size="lg" className="min-w-fit">
                  Start Your Enquiry
                  <ArrowRight size={20} />
                </Button>
              </a>
              <a href="#contact-faqs" className="inline-flex">
                <Button as="span" variant="outline" size="lg" className="min-w-fit">
                  View FAQs
                  <ChevronDown size={20} />
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <SectionContainer id="contact-form" padding="2xl">
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
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
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
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
                        Business Email *
                      </label>
                      <input
                        id="email"
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
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">Company Name</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">Phone Number</label>
                      <input
                        id="phone"
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
                      <label htmlFor="region" className="block text-sm font-medium text-neutral-900 mb-2">Country / Region</label>
                      <select
                        id="region"
                        name="region"
                        value={formData.region}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        <option value="">Select region</option>
                        {['India', 'UK', 'UAE', 'Saudi Arabia', 'Qatar', 'Singapore', 'Malaysia', 'Other'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-900 mb-2">Service of Interest</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        <option value="">Select service</option>
                        {['Digital Marketing', 'AI Automation', 'Software Development', 'Branding', 'Meta Ads', 'Google Ads', 'Conversion Optimisation', 'AI Lead Generation', 'Not Sure Yet'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-neutral-900 mb-2">Monthly Budget</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600 transition-smooth bg-white"
                      >
                        <option value="">Select budget</option>
                        {['Under Rs 50,000', 'Rs 50K-Rs 2L', 'Rs 2L-Rs 5L', 'Rs 5L+', 'Under GBP 1,000', 'GBP 1K-GBP 5K', 'GBP 5K+', 'Prefer not to say'].map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
                      Message / Tell us about your goals
                    </label>
                    <textarea
                      id="message"
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
            <a
              href={BRAND.whatsapp ? `https://wa.me/${String(BRAND.whatsapp).replace(/\D/g, '')}` : '/contact'}
              aria-label="Chat with Kynosi on WhatsApp"
            >
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

      {/* Project FAQs */}
      <SectionContainer id="contact-faqs" padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center mb-12">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Common questions from clients before starting a project.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="max-w-3xl mx-auto space-y-3">
            {PROJECT_FAQS.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-brand-300 transition-smooth">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={openFaq === i}
                  >
                    <span className="font-semibold text-neutral-900">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-brand-600 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
            <a href="#contact-form">
              <Button as="span" size="lg" className="min-w-fit">
                Schedule Your Call
              </Button>
            </a>
            <Link href="/services">
              <Button
                as="span"
                variant="outline"
                size="lg"
                className="min-w-fit"
              >
                View Our Services
              </Button>
            </Link>
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


