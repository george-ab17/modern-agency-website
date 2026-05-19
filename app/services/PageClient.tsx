'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Brain,
  Code2,
  Search,
  Zap,
  Target,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { CTABanner } from '@/components/CTABanner';
import { SERVICES_FAQS } from '@/lib/data/faqs';
import { SERVICES } from '@/lib/data/services';


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

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

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
              Comprehensive Digital <span className="text-gradient">Solutions</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Whether you're a fast-scaling startup in Bangalore, an established enterprise in London, or a regional powerhouse in Dubai  Kynosi has the exact services you need to dominate your market. Every solution we offer is battle-tested, data-driven, and built for scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const iconMap: { [key: string]: any } = {
                TrendingUp, Brain, Code2, Search, Zap, Target, BarChart3, Sparkles
              };
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <motion.div key={service.id} variants={itemVariants}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedService(
                        selectedService === service.id ? null : service.id
                      )
                    }
                    className="w-full text-left"
                    aria-expanded={selectedService === service.id}
                  >
                    <div
                      className={`
                        p-6 rounded-xl border transition-smooth cursor-pointer
                        ${
                          selectedService === service.id
                            ? 'bg-brand-50 border-brand-300 shadow-md'
                            : 'bg-white border-neutral-200 hover:border-brand-300'
                        }
                      `}
                    >
                      <div className="mb-4">
                        <div
                          className={`
                            w-12 h-12 rounded-lg flex items-center justify-center transition-smooth
                            ${
                              selectedService === service.id
                                ? 'bg-brand-600'
                                : 'bg-brand-100'
                            }
                          `}
                        >
                          {IconComponent && (
                            <IconComponent
                              size={24}
                              aria-hidden="true"
                              className={
                                selectedService === service.id
                                  ? 'text-white'
                                  : 'text-brand-600'
                              }
                            />
                          )}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Detailed Service Section */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            >
              How We Work  Fast, Smart, and Accountable
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              Kynosi operates with a unique blend of creative thinking and data science. Every campaign we run is built on three pillars: deep market intelligence, precision targeting, and continuous optimisation. We monitor, analyse, and improve every single day.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Strategic Planning',
                description:
                  'We start with deep analysis of your business, competition, and market to develop a data-driven strategy.',
              },
              {
                title: 'Expert Implementation',
                description:
                  'Our experienced team executes with precision, using proven methodologies and best practices.',
              },
              {
                title: 'Continuous Optimization',
                description:
                  'We continuously monitor, test, and refine to ensure peak performance and ROI.',
              },
              {
                title: 'Transparent Reporting',
                description:
                  'Regular insights and detailed reports keep you informed every step of the journey.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-brand-600">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Services FAQ */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
            >
              Services FAQ
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Clear answers before you book your free strategy consultation.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SERVICES_FAQS.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA Banner */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
        >
          <CTABanner
            title="Not Sure Where to Start?"
            description="Book a free 30-minute strategy consultation with our experts. We'll audit your current digital presence, identify your biggest growth opportunities, and recommend the exact services that will move the needle for your business  whether you're based in India, the UK, the Middle East, or anywhere across Asia."
            primaryButtonText="Book Your Free Strategy Call "
            secondaryButtonText="Explore Case Studies"
            primaryHref="/contact"
            secondaryHref="/case-studies"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}


