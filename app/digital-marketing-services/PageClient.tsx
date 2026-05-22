'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Target,
  Share2,
  Globe,
  FileText,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Users,
  Lightbulb,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import { SectionContainer } from '@/components';
import { CTABanner } from '@/components';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

const CORE_SERVICES = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description:
      'A strong online presence starts with visibility. Our SEO strategies are designed to improve your website rankings, increase organic traffic, and help potential customers discover your business naturally through search engines.',
    items: [
      'Website SEO Audit',
      'Keyword & Competitor Research',
      'On-Page Optimization',
      'Technical SEO Improvements',
      'Local SEO Strategies',
      'Content Optimization',
      'Performance Tracking & Reporting',
    ],
  },
  {
    icon: Target,
    title: 'Google Ads & PPC Campaigns',
    description:
      'Reach customers at the exact moment they are searching for your products or services. We create high-converting Google Ads campaigns focused on maximizing leads while reducing unnecessary ad spend.',
    items: [
      'Google Search Ads',
      'Display Advertising',
      'YouTube Campaigns',
      'Retargeting Ads',
      'Conversion Tracking Setup',
      'Campaign Optimization',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description:
      'Social media is more than just posting content — it\'s about building relationships, increasing engagement, and creating a memorable brand identity. We help brands grow on Instagram, Facebook, LinkedIn, and YouTube.',
    items: [
      'Content Creation',
      'Reel Marketing',
      'Carousel Design',
      'Audience Engagement',
      'Paid Advertising Campaigns',
      'Platform Strategy',
    ],
  },
  {
    icon: Globe,
    title: 'Website Design & Development',
    description:
      'Your website is your digital storefront. We create responsive, modern, and conversion-focused websites that deliver seamless experiences across all devices.',
    items: [
      'Business Website Design',
      'Landing Page Development',
      'Mobile Optimization',
      'Speed & Performance Enhancement',
      'SEO-Friendly Structure',
      'WordPress Development',
    ],
  },
  {
    icon: FileText,
    title: 'Content Marketing Services',
    description:
      'Quality content builds trust and drives long-term engagement. We create strategic content that connects with your audience while supporting your SEO and branding goals.',
    items: [
      'Website Content Writing',
      'SEO Blogs',
      'Brand Copywriting',
      'Ad Copy Creation',
      'Social Media Content',
      'Product Descriptions',
    ],
  },
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    description:
      'We focus on campaigns that deliver measurable outcomes — from lead generation to online sales growth. Every campaign is backed by analytics, optimization, and audience insights.',
    items: [
      'Lead Generation Campaigns',
      'E-commerce Advertising',
      'Conversion Rate Optimization',
      'Audience Targeting',
      'Campaign Analytics',
      'ROI Tracking',
    ],
  },
];

const WHY_CHOOSE_US = [
  { icon: Lightbulb, label: 'Customized Digital Marketing Strategies' },
  { icon: BarChart3, label: 'Data-Driven Campaign Management' },
  { icon: TrendingUp, label: 'Creative & Performance-Focused Team' },
  { icon: ShieldCheck, label: 'Transparent Reporting Process' },
  { icon: Users, label: 'Industry-Specific Marketing Experience' },
  { icon: Target, label: 'Long-Term Growth Approach' },
];

const INDUSTRIES = [
  'Healthcare',
  'Real Estate',
  'Education',
  'Retail',
  'E-commerce',
  'Hospitality',
  'Professional Services',
];

export default function DigitalMarketingServicesClient() {
  return (
    <>
      {/* Hero */}
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
              Digital Marketing <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              Transform Your Online Presence into Real Business Growth
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-neutral-500 max-w-3xl mx-auto"
            >
              Your customers are already online — the question is, can they find your business before they find your competitors? Our digital marketing services are built to help brands stand out, attract the right audience, and turn online attention into measurable business results.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
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
              Our Core Digital Marketing Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              We combine creativity, strategy, and performance-focused marketing to help businesses grow across search engines, social media platforms, and digital advertising channels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.title} variants={itemVariants}>
                  <div className="bg-white rounded-xl p-8 border border-neutral-200 h-full hover:border-brand-300 hover:shadow-md transition-smooth">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-5">
                      <Icon size={24} className="text-brand-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-5 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-neutral-700">
                          <CheckCircle2 size={14} className="text-brand-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Why Choose Us */}
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
              Why Businesses Choose Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map(({ icon: Icon, label }) => (
              <motion.div key={label} variants={itemVariants}>
                <div className="bg-white rounded-xl p-6 border border-neutral-200 flex items-center gap-4 hover:border-brand-300 hover:shadow-sm transition-smooth">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-600" aria-hidden="true" />
                  </div>
                  <span className="text-neutral-800 font-medium">{label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Industries */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Building2 size={24} className="text-brand-600" aria-hidden="true" />
            </div>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4"
          >
            Industries We Work With
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12"
          >
            We provide digital marketing solutions for businesses across various industries.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {INDUSTRIES.map((industry) => (
              <motion.span
                key={industry}
                variants={itemVariants}
                className="px-5 py-2.5 bg-brand-50 border border-brand-200 text-brand-700 font-medium rounded-full text-sm"
              >
                {industry}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={itemVariants}
        >
          <CTABanner
            title="Let's Build Your Brand Online"
            description="Every business has unique goals, and your marketing strategy should reflect that. Whether you want to increase leads, improve brand awareness, or boost online sales, our digital marketing experts are ready to help you achieve sustainable growth with tailored digital solutions."
            primaryButtonText="Get Started Today"
            secondaryButtonText="View Our Work"
            primaryHref="/contact"
            secondaryHref="/case-studies"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
