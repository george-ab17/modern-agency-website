'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/SectionContainer';
import { CaseStudyCard } from '@/components/CaseStudyCard';
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

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Revenue Scaling',
    company: 'TechRetail Inc',
    description: 'Scaled e-commerce platform from $50K to $170K monthly revenue through targeted digital marketing and optimization.',
    metrics: [
      { label: 'Revenue Growth', value: '+234%' },
      { label: 'Traffic Increase', value: '+156%' },
      { label: 'Conversion Rate', value: '+87%' },
      { label: 'Time to Scale', value: '6 months' },
    ],
    tags: ['Digital Marketing', 'E-Commerce', 'Growth'],
    details:
      'We implemented a comprehensive digital marketing strategy including SEO optimization, paid advertising, and conversion rate optimization, resulting in significant revenue growth.',
  },
  {
    id: 2,
    title: 'AI Automation Implementation',
    company: 'FinanceFlow',
    description: 'Deployed AI-powered automation reducing manual tasks and improving operational efficiency.',
    metrics: [
      { label: 'Time Saved', value: '40hrs/week' },
      { label: 'Cost Reduction', value: '-35%' },
      { label: 'Error Reduction', value: '-92%' },
      { label: 'ROI Achievement', value: '8 months' },
    ],
    tags: ['AI', 'Automation', 'Efficiency'],
    details:
      'Custom AI solution for automating financial processes, reducing manual data entry by 85% and improving accuracy to 99.8%.',
  },
  {
    id: 3,
    title: 'Brand Identity Transformation',
    company: 'Creative Studios Co',
    description: 'Complete brand redesign resulting in increased market recognition and customer engagement.',
    metrics: [
      { label: 'Brand Recognition', value: '+120%' },
      { label: 'Social Following', value: '+180%' },
      { label: 'Customer Retention', value: '+65%' },
      { label: 'Market Share', value: '+45%' },
    ],
    tags: ['Branding', 'Design', 'Strategy'],
    details:
      'Comprehensive rebranding initiative including new logo, visual identity, and brand messaging across all channels.',
  },
  {
    id: 4,
    title: 'SaaS Lead Generation Campaign',
    company: 'CloudSync Solutions',
    description: 'Generated high-quality B2B leads through targeted ads and content marketing.',
    metrics: [
      { label: 'Quality Leads', value: '+450' },
      { label: 'CAC Reduction', value: '-40%' },
      { label: 'Conversion Rate', value: '12.5%' },
      { label: 'Deal Value Growth', value: '+200%' },
    ],
    tags: ['Lead Generation', 'B2B', 'Ads'],
    details:
      'Strategic lead generation campaign targeting decision-makers in enterprise software, resulting in $2.5M in closed deals.',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    company: 'FitnessTrack',
    description: 'Built full-featured fitness tracking mobile application with 100K+ active users.',
    metrics: [
      { label: 'Active Users', value: '120K+' },
      { label: 'App Rating', value: '4.8/5' },
      { label: 'Daily Active', value: '45K' },
      { label: 'Revenue/Month', value: '$80K+' },
    ],
    tags: ['Mobile Development', 'SaaS', 'UI/UX'],
    details:
      'Cross-platform mobile app with real-time data synchronization, social features, and advanced analytics.',
  },
  {
    id: 6,
    title: 'Conversion Rate Optimization',
    company: 'RetailHub',
    description: 'Optimized website funnel resulting in significant revenue increase without increasing marketing spend.',
    metrics: [
      { label: 'Conversion Rate', value: '+156%' },
      { label: 'Revenue/Visitor', value: '+120%' },
      { label: 'Cart Abandonment', value: '-45%' },
      { label: 'Revenue Growth', value: '+$450K/year' },
    ],
    tags: ['Optimization', 'E-Commerce', 'Analytics'],
    details:
      'A/B testing and UX improvements across the entire user journey, resulting in nearly 3x conversion rate improvement.',
  },
];

export default function CaseStudies() {
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
              Case <span className="text-gradient">Studies</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Real results from real partnerships. See how we've helped businesses transform and scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <motion.div key={study.id} variants={itemVariants}>
                <CaseStudyCard
                  title={study.title}
                  company={study.company}
                  description={study.description}
                  metrics={study.metrics.slice(0, 2)}
                  tags={study.tags}
                  href={`/case-studies/${study.id}`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Results Overview */}
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
              Our Impact
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { stat: '$500M+', label: 'Client Revenue Generated' },
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '6x', label: 'Average ROI' },
              { stat: '500+', label: 'Projects Delivered' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 border border-neutral-200 text-center"
              >
                <p className="text-4xl font-bold text-brand-600 mb-2">
                  {item.stat}
                </p>
                <p className="text-neutral-600">{item.label}</p>
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
            title="Your Success Story Starts Here"
            description="Ready to join hundreds of companies that have transformed their business with our solutions?"
            primaryButtonText="Start Your Project"
            secondaryButtonText="Learn About Our Process"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
