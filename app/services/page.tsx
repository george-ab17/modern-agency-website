'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Brain,
  Code,
  Palette,
  Zap,
  Target,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { CTABanner } from '@/components/CTABanner';

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

const services = [
  {
    id: 1,
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic campaigns that drive traffic, engagement, and conversions.',
    details: [
      'SEO optimization and content strategy',
      'Social media management and advertising',
      'Email marketing automation',
      'Analytics and performance tracking',
    ],
  },
  {
    id: 2,
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent solutions that streamline operations and boost efficiency.',
    details: [
      'AI model implementation and training',
      'Process automation workflows',
      'Machine learning solutions',
      'AI-powered customer service',
    ],
  },
  {
    id: 3,
    icon: Code,
    title: 'Software Development',
    description: 'Custom applications built for scalability and performance.',
    details: [
      'Full-stack web development',
      'Mobile app development',
      'Cloud infrastructure setup',
      'API development and integration',
    ],
  },
  {
    id: 4,
    icon: Palette,
    title: 'Branding',
    description: 'Crafting memorable brand identities that resonate.',
    details: [
      'Logo and brand identity design',
      'Brand strategy and positioning',
      'Visual guidelines development',
      'Brand messaging and communication',
    ],
  },
  {
    id: 5,
    icon: Zap,
    title: 'Meta Ads Management',
    description: 'Expert Facebook and Instagram advertising for maximum ROI.',
    details: [
      'Campaign strategy and setup',
      'Audience segmentation and targeting',
      'Creative optimization',
      'Budget management and scaling',
    ],
  },
  {
    id: 6,
    icon: Target,
    title: 'Google Ads Management',
    description: 'Targeted search and display advertising campaigns.',
    details: [
      'Keyword research and bidding strategy',
      'Ad copy optimization',
      'Landing page optimization',
      'Conversion tracking setup',
    ],
  },
  {
    id: 7,
    icon: BarChart3,
    title: 'Conversion Optimization',
    description: 'Turning visitors into loyal customers.',
    details: [
      'A/B testing and experimentation',
      'User experience optimization',
      'Funnel analysis and improvement',
      'Sales funnel optimization',
    ],
  },
  {
    id: 8,
    icon: Sparkles,
    title: 'AI-Powered Lead Generation',
    description: 'Advanced lead generation using AI and automation.',
    details: [
      'Predictive lead scoring',
      'Automated lead nurturing',
      'Intelligent chatbot deployment',
      'Lead qualification automation',
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

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
              Our <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Comprehensive solutions to accelerate your business growth and digital transformation
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
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <button
                  onClick={() =>
                    setSelectedService(
                      selectedService === service.id ? null : service.id
                    )
                  }
                  className="w-full text-left"
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
                        <service.icon
                          size={24}
                          className={
                            selectedService === service.id
                              ? 'text-white'
                              : 'text-brand-600'
                          }
                        />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {service.description}
                    </p>

                    {selectedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="pt-4 border-t border-neutral-200 mt-4"
                      >
                        <ul className="space-y-2">
                          {service.details.map((detail, i) => (
                            <li
                              key={i}
                              className="text-sm text-neutral-600 flex items-start gap-2"
                            >
                              <span className="text-brand-600 font-bold">•</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
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
              How We Deliver Results
            </motion.h2>
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

      {/* Technology Stack */}
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
              Modern Technology Stack
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              We leverage cutting-edge tools and platforms to deliver exceptional results
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Web Technologies', items: ['React', 'Next.js', 'TypeScript', 'Node.js'] },
              { title: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes'] },
              { title: 'AI & Analytics', items: ['TensorFlow', 'ChatGPT API', 'Data Studio', 'Mixpanel'] },
            ].map((category, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-white rounded-xl p-8 border border-neutral-200">
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-brand-50 text-brand-700 rounded-lg text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
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
            title="Ready to Get Started?"
            description="Let's discuss which services are right for your business and how we can help you achieve your goals."
            primaryButtonText="Schedule Consultation"
            secondaryButtonText="View Case Studies"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
