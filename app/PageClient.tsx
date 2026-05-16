'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  TrendingUp,
  Target,
  Code2,
  Palette,
  Brain,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionContainer } from '@/components/SectionContainer';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import Link from 'next/link';
import { STATS } from '@/lib/constants/brand';
import { SERVICES } from '@/lib/data/services';
import { CASE_STUDIES } from '@/lib/data/caseStudies';

const serviceIcons = {
  TrendingUp,
  Zap,
  Code2,
  Sparkles,
  Target,
  Brain,
  Palette,
} as const;

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
                 Welcome to Digital Excellence
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
              Unlock your full potential with strategic digital marketing, AI automation, and innovative software solutions tailored for ambitious businesses across India, the UK, the Middle East, and Asia.
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
              <Link href="/case-studies">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-16 pt-12 border-t border-neutral-200 flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-brand-600">
                    {stat.value}
                  </p>
                  <p className="text-neutral-600 text-sm">{stat.label}</p>
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
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-brand-600 font-semibold">What We Do</span>
            </motion.div>
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
              Comprehensive solutions designed to accelerate your business growth  whether you're scaling a startup in Mumbai, expanding a brand in Dubai, or dominating digital in London.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SERVICES.slice(0, 6).map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link href={service.href}>
                  <ServiceCard
                    icon={serviceIcons[service.icon as keyof typeof serviceIcons] || TrendingUp}
                    title={service.title}
                    description={service.description}
                  />
                </Link>
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
                Why Businesses Across India, the UK & the Middle East Choose Kynosi
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                We don't just run campaigns - we engineer growth. Kynosi combines cutting-edge AI technology with battle-tested marketing strategy to deliver results that move the needle for businesses in the world's fastest-growing markets. From Bangalore to Birmingham, from Dubai to Delhi - we've helped 500+ companies unlock their true potential.
              </p>

              <div className="space-y-4">
                {[
                  'Expert team with a proven track record across 20+ industries',
                  'Data-driven strategy and execution - every decision backed by real numbers',
                  'Transparent communication and reporting - you always know what\'s working',
                  'Scalable solutions built for growth - from SMEs to enterprise',
                  'Dedicated account management - one team, fully committed to your success',
                  'Industry-leading AI and marketing technologies',
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
                <div className="text-6xl opacity-20 mb-4"></div>
                <p className="text-neutral-600">
                  Kynosi growth strategy across AI, marketing, software, and brand.
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
              Our Process  A Structured Approach to Explosive Growth
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-neutral-300">
              We don't do guesswork. Every engagement follows a proven four-step framework that has delivered transformative results for clients across India, the UK, the Middle East, and Asia.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                number: '01', 
                title: 'Discovery', 
                description: 'We go deep on your business, your market, and your competition. Understanding your goals, your challenges, and your audience is where breakthrough strategy begins.' 
              },
              { 
                number: '02', 
                title: 'Strategy', 
                description: 'We craft a bespoke, multi-channel growth plan tailored to your industry, target geography, and revenue goals. No cookie-cutter templates  ever.' 
              },
              { 
                number: '03', 
                title: 'Execution', 
                description: 'Our team launches campaigns, builds automations, and develops assets with precision and speed. We move fast without sacrificing quality.' 
              },
              { 
                number: '04', 
                title: 'Growth', 
                description: 'We analyse, optimise, and scale continuously. Every week brings new data. Every month brings better results.' 
              },
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
              Proof That Bold Strategy Delivers Extraordinary Results
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8"
            >
              We let our work speak for itself. Every case study below represents a real business, a real challenge, and a real transformation  delivered by the Kynosi team.
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
            {CASE_STUDIES.slice(0, 2).map((study) => (
              <motion.div key={study.id} variants={itemVariants}>
                <CaseStudyCard
                  title={study.challenge.slice(0, 60)}
                  company={study.client}
                  metrics={study.results.slice(0, 2).map((result) => ({
                    label: result.metric,
                    value: result.value,
                  }))}
                  description={study.approach.slice(0, 80)}
                  tags={study.tags.slice(0, 2)}
                  href={`/case-studies/${study.id}`}
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
              Success stories from companies we've transformed across India, the UK, the Middle East, and Asia.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                quote:
                  'Working with Kynosi was transformative. They increased our leads by 300% in just 3 months. If you\'re serious about growth, these are the people you want in your corner.',
                author: 'Sarah Johnson',
                company: 'Growth Marketing Co',
                rating: 5,
              },
              {
                quote:
                  'Their AI solutions saved us thousands monthly. Professional, innovative, and relentlessly results-driven. Kynosi is the real deal.',
                author: 'Michael Chen',
                company: 'Tech Innovations Ltd',
                rating: 5,
              },
              {
                quote:
                  'Best investment we ever made. ROI exceeded every expectation. Highly recommend Kynosi to any business that wants to dominate its market.',
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
            description="Join hundreds of ambitious companies across India, the UK, the Middle East, and Asia who are achieving exceptional growth with Kynosi's strategic solutions. Your next chapter starts here."
            primaryButtonText="Schedule Your Free Consultation "
            secondaryButtonText="Explore Our Services"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}


