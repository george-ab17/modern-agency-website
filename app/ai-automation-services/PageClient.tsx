'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Mail,
  TrendingUp,
  Workflow,
  PenSquare,
  CheckCircle2,
  Clock,
  DollarSign,
  Users,
  Zap,
  BarChart3,
  Layers,
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

const AUTOMATION_SOLUTIONS = [
  {
    icon: Bot,
    title: 'AI Chatbot Automation',
    description:
      'Deliver instant responses to your website visitors and customers with intelligent AI chatbots.',
    label: 'Features',
    items: [
      '24/7 Customer Support',
      'Lead Qualification',
      'Appointment Booking',
      'WhatsApp & Website Integration',
      'Automated Responses',
      'FAQ Handling',
    ],
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description:
      'Automate your marketing activities and create personalized customer journeys that convert better.',
    label: 'Includes',
    items: [
      'Email Automation',
      'Lead Nurturing Workflows',
      'CRM Automation',
      'Campaign Scheduling',
      'Audience Segmentation',
      'Automated Follow-Ups',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Sales Automation',
    description:
      'Streamline your sales pipeline with AI-driven workflows designed to improve conversions and reduce manual tracking.',
    label: 'Solutions',
    items: [
      'Lead Tracking',
      'Automated Follow-Ups',
      'Sales Pipeline Management',
      'Customer Reminders',
      'AI Lead Scoring',
      'Performance Reports',
    ],
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description:
      'We help businesses automate day-to-day operational tasks to improve efficiency and reduce human errors.',
    label: 'Automation Areas',
    items: [
      'Data Entry',
      'Invoice Processing',
      'Internal Notifications',
      'Task Management',
      'Workflow Automation',
      'Reporting Systems',
    ],
  },
  {
    icon: PenSquare,
    title: 'AI Content & Social Media Automation',
    description:
      'Scale your content production with AI-assisted content workflows and scheduling systems.',
    label: 'Services',
    items: [
      'AI Content Generation',
      'Social Media Scheduling',
      'Automated Publishing',
      'Content Planning',
      'Caption Generation',
      'Performance Tracking',
    ],
  },
];

const WHAT_AI_HELPS = [
  { icon: Clock, label: 'Save time on repetitive work' },
  { icon: Zap, label: 'Improve response speed' },
  { icon: DollarSign, label: 'Reduce operational costs' },
  { icon: Users, label: 'Increase team productivity' },
  { icon: BarChart3, label: 'Deliver better customer experiences' },
  { icon: TrendingUp, label: 'Generate more qualified leads' },
];

const WHY_CHOOSE_US = [
  {
    icon: Layers,
    title: 'Tailored for Your Business',
    description:
      'Every business works differently. We create customized automation systems based on your operations, goals, and workflow requirements.',
  },
  {
    icon: Clock,
    title: 'Reduce Manual Work',
    description:
      'Automate repetitive tasks and free your team to focus on high-value activities that drive growth.',
  },
  {
    icon: Zap,
    title: 'Improve Speed & Productivity',
    description:
      'AI-powered workflows help businesses respond faster, manage leads efficiently, and operate with greater accuracy.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description:
      "Our automation systems are built to grow with your business — whether you're a startup or an established company.",
  },
];

const INDUSTRIES = [
  'Healthcare',
  'Real Estate',
  'E-commerce',
  'Education',
  'Finance',
  'Agencies',
  'Service-Based Businesses',
];

export default function AiAutomationServicesClient() {
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
              AI Automation <span className="text-gradient">Services</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              Smarter Systems. Faster Growth. Less Manual Work.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-4 text-lg text-neutral-500 max-w-3xl mx-auto"
            >
              Modern businesses lose valuable time handling repetitive tasks, scattered workflows, and slow operations. Our AI automation services help companies simplify processes, improve efficiency, and scale faster using intelligent automation solutions tailored to their business needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* What is AI Automation */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                  What is AI Automation?
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  AI automation combines artificial intelligence with workflow automation to reduce manual effort and improve business performance. Instead of relying on repetitive human tasks, AI-powered systems can analyze data, trigger actions, respond to customers, and manage operations automatically.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Our solutions are designed to help businesses work smarter — not harder.
                </p>
              </motion.div>

              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHAT_AI_HELPS.map(({ icon: Icon, label }) => (
                  <motion.div key={label} variants={itemVariants}>
                    <div className="bg-white rounded-xl p-4 border border-neutral-200 flex items-center gap-3 hover:border-brand-300 hover:shadow-sm transition-smooth">
                      <div className="w-9 h-9 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-brand-600" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-neutral-700 font-medium">{label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Automation Solutions */}
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
              Our AI Automation Solutions
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 max-w-2xl mx-auto"
            >
              From lead management and customer communication to marketing workflows and reporting, we build AI-powered systems that work around the clock.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AUTOMATION_SOLUTIONS.map((solution) => {
              const Icon = solution.icon;
              return (
                <motion.div key={solution.title} variants={itemVariants}>
                  <div className="bg-white rounded-xl p-8 border border-neutral-200 h-full hover:border-brand-300 hover:shadow-md transition-smooth">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-5">
                      <Icon size={24} className="text-brand-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-neutral-600 mb-5 text-sm leading-relaxed">
                      {solution.description}
                    </p>
                    <p className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-3">
                      {solution.label}
                    </p>
                    <ul className="space-y-2">
                      {solution.items.map((item) => (
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
              Why Choose Our AI Automation Services?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={itemVariants}>
                <div className="bg-white rounded-xl p-8 border border-neutral-200 h-full hover:border-brand-300 hover:shadow-sm transition-smooth">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
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
            Industries We Serve
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-neutral-600 max-w-2xl mx-auto mb-12"
          >
            We provide AI automation solutions for businesses across a wide range of industries.
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
            title="Transform Your Business with AI Automation"
            description="The future of business is automation-driven. Whether you want to automate marketing, sales, customer support, or internal workflows, our AI automation experts can help you build intelligent systems that save time and accelerate business growth."
            primaryButtonText="Get in Touch Today"
            secondaryButtonText="View Our Work"
            primaryHref="/contact"
            secondaryHref="/case-studies"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
