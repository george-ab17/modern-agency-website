'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
import { THEME } from '@/lib/theme';

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
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setFormData({ name: '', email: '', company: '', message: '' });
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
              Get In <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
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
                        Email *
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

                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Company
                    </label>
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
                    <label className="block text-sm font-medium text-neutral-900 mb-2">
                      Message *
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
                    Send Message
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
                    href={`mailto:${THEME.contact.email}`}
                    className="text-brand-600 hover:text-brand-700 transition-smooth"
                  >
                    {THEME.contact.email}
                  </a>
                  <p className="text-xs text-neutral-500 mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                  <a
                    href={`tel:${THEME.contact.phone}`}
                    className="text-brand-600 hover:text-brand-700 transition-smooth"
                  >
                    {THEME.contact.phone}
                  </a>
                  <p className="text-xs text-neutral-500 mt-2">
                    Available Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a href={`https://wa.me/${THEME.contact.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
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
                    {THEME.contact.address}
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
            Schedule a Free Consultation
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 mb-8"
          >
            Take the first step toward transforming your business. Let's discuss your goals and
            how we can help you achieve them.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="min-w-fit">
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-fit"
            >
              Learn Our Process
            </Button>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Map Placeholder */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
          className="rounded-xl overflow-hidden h-96 bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center"
        >
          <div className="text-center">
            <div className="text-6xl opacity-30 mb-4">🗺️</div>
            <p className="text-neutral-600">
              Interactive map with office location would go here
            </p>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
