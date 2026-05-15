'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Target,
  Code,
  Palette,
  Brain,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionContainer } from '@/components/SectionContainer';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import Link from 'next/link';

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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 text-sm font-medium rounded-full">
                ✨ Welcome to Digital Excellence
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-gradient">AI-Powered Growth</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Unlock your full potential with strategic digital marketing, AI automation, and
              innovative software solutions tailored to your success.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact">
                <Button size="lg">
                  Start Your Journey
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                View Our Work
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-neutral-200 flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {[
                { label: '500+', description: 'Projects Delivered' },
                { label: '98%', description: 'Client Satisfaction' },
                { label: '10+', description: 'Years Experience' },
                { label: '150+', description: 'Team Members' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-600">
                    {stat.label}
                  </p>
                  <p className="text-neutral-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
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
              Our Services
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Comprehensive solutions designed to accelerate your business growth
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: TrendingUp,
                title: 'Digital Marketing',
                description:
                  'Strategic campaigns that drive traffic, engagement, and conversions with data-driven insights.',
              },
              {
                icon: Brain,
                title: 'AI Automation',
                description:
                  'Intelligent automation solutions that streamline operations and boost efficiency.',
              },
              {
                icon: Code,
                title: 'Software Development',
                description:
                  'Custom applications built with modern technologies for scalable, high-performance solutions.',
              },
              {
                icon: Palette,
                title: 'Branding',
                description:
                  'Crafting memorable brand identities that resonate with your target audience.',
              },
              {
                icon: Zap,
                title: 'Ads Management',
                description:
                  'Expert management of Google and Meta ads for maximum ROI and brand visibility.',
              },
              {
                icon: Target,
                title: 'Conversion Optimization',
                description:
                  'Optimizing every touchpoint to turn visitors into loyal customers and advocates.',
              },
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants}>
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Why Choose Us Section */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We combine cutting-edge technology with strategic expertise to deliver
                transformative results for your business.
              </p>

              <div className="space-y-4">
                {[
                  'Expert team with proven track record',
                  'Data-driven strategy and execution',
                  'Transparent communication & reporting',
                  'Scalable solutions for growth',
                  'Dedicated account management',
                  'Industry-leading technologies',
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                    <span className="text-neutral-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-12 h-96 flex items-center justify-center"
            >
              <div className="text-center">
                <div className="text-6xl opacity-20 mb-4">🚀</div>
                <p className="text-neutral-600">
                  Visual representation of growth and innovation
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Process Section */}
      <SectionContainer padding="2xl" className="bg-neutral-900 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-neutral-300">
              A structured approach to success
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '01', title: 'Discovery', description: 'Understanding your goals and challenges' },
              { number: '02', title: 'Strategy', description: 'Crafting a tailored solution approach' },
              { number: '03', title: 'Execution', description: 'Implementing with precision and care' },
              { number: '04', title: 'Growth', description: 'Optimizing for continuous improvement' },
            ].map((step, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="relative">
                  <div className="text-5xl font-bold text-brand-600 mb-3 opacity-30">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-neutral-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Featured Case Studies Section */}
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
              Featured Case Studies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8"
            >
              Real results from real partnerships
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/case-studies">
                <Button variant="outline">View All Case Studies</Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                title: 'E-Commerce Growth Campaign',
                company: 'TechRetail Inc',
                metrics: [
                  { label: 'Revenue Increase', value: '+234%' },
                  { label: 'Traffic Growth', value: '+156%' },
                ],
                description: 'Scaled an e-commerce platform from $50K to $170K monthly revenue.',
                tags: ['Digital Marketing', 'Ads'],
              },
              {
                title: 'AI Implementation Success',
                company: 'FinanceFlow',
                metrics: [
                  { label: 'Time Saved', value: '40hrs/week' },
                  { label: 'Cost Reduction', value: '-35%' },
                ],
                description:
                  'Deployed AI-powered automation reducing manual tasks by 85%.',
                tags: ['AI', 'Automation'],
              },
            ].map((study, i) => (
              <motion.div key={i} variants={itemVariants}>
                <CaseStudyCard
                  {...study}
                  href={`/case-studies/${i + 1}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Testimonials Section */}
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
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Success stories from companies we've transformed
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  'Working with this team was transformative. They increased our leads by 300% in just 3 months.',
                author: 'Sarah Johnson',
                company: 'Growth Marketing Co',
                rating: 5,
              },
              {
                quote:
                  'Their AI solutions saved us thousands monthly. Professional, innovative, and results-driven.',
                author: 'Michael Chen',
                company: 'Tech Innovations Ltd',
                rating: 5,
              },
              {
                quote:
                  'Best investment we made. ROI exceeded our expectations. Highly recommend their services.',
                author: 'Emma Williams',
                company: 'Digital Ventures',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <motion.div key={i} variants={itemVariants}>
                <TestimonialCard {...testimonial} />
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
            title="Ready to Transform Your Business?"
            description="Join hundreds of companies achieving exceptional growth with our strategic solutions."
            primaryButtonText="Schedule Consultation"
            secondaryButtonText="Explore Services"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
