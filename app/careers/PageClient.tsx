'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Users,
  Zap,
  TrendingUp,
  Heart,
  Globe,
  Laptop,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { SectionContainer } from '@/components';
import { CTABanner } from '@/components';
import Link from 'next/link';

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

const OPENINGS = [
  {
    id: 1,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'India / Remote',
    type: 'Full-time',
    description:
      'Drive high-impact digital marketing campaigns across SEO, social media, and content marketing for clients across India, UK, and the Middle East.',
    responsibilities: [
      'Plan and execute multi-channel digital marketing campaigns',
      'Manage SEO strategy and on-page/off-page optimisation',
      'Create and manage social media content calendars',
      'Analyse campaign performance and produce monthly reports',
      'Collaborate with designers and content writers',
    ],
    requirements: [
      '2+ years of digital marketing experience',
      'Strong knowledge of SEO tools (Ahrefs, SEMrush)',
      'Experience with Google Analytics and Search Console',
      'Excellent written and verbal communication skills',
      'Ability to manage multiple client accounts simultaneously',
    ],
  },
  {
    id: 2,
    title: 'AI Automation Engineer',
    department: 'Technology',
    location: 'India / Remote',
    type: 'Full-time',
    description:
      'Build and deploy intelligent automation systems for clients, from AI chatbots and email workflows to CRM integrations and business process automation.',
    responsibilities: [
      'Design and build AI-powered automation workflows',
      'Integrate AI tools with CRM systems and business platforms',
      'Develop and deploy chatbots for WhatsApp and web',
      'Create automated reporting and analytics systems',
      'Optimise and maintain existing automation pipelines',
    ],
    requirements: [
      '2+ years of experience in automation or AI development',
      'Proficiency with tools like Make, Zapier, n8n, or similar',
      'Familiarity with LLM APIs (OpenAI, Anthropic)',
      'Experience with CRM platforms (HubSpot, Salesforce, Zoho)',
      'Strong problem-solving and logical thinking skills',
    ],
  },
  {
    id: 3,
    title: 'Google & Meta Ads Specialist',
    department: 'Paid Media',
    location: 'India / Remote',
    type: 'Full-time',
    description:
      'Manage and optimise high-budget Google and Meta advertising campaigns for clients across e-commerce, real estate, education, and professional services.',
    responsibilities: [
      'Plan, launch and optimise Google Search, Display, and YouTube campaigns',
      'Manage Meta (Facebook & Instagram) ad campaigns end-to-end',
      'Conduct audience research and build targeted ad sets',
      'Monitor budgets and maximise return on ad spend (ROAS)',
      'Produce weekly and monthly performance reports for clients',
    ],
    requirements: [
      'Google Ads and Meta Blueprint certifications preferred',
      '2+ years of hands-on PPC campaign management',
      'Experience managing monthly ad budgets of ₹5L+',
      'Strong analytical skills and attention to detail',
      'Ability to write compelling ad copy',
    ],
  },
  {
    id: 4,
    title: 'Content Writer & SEO Strategist',
    department: 'Content',
    location: 'India / Remote',
    type: 'Full-time',
    description:
      'Create high-quality, SEO-optimised content including blogs, website copy, ad copy, and social media content for a diverse range of client industries.',
    responsibilities: [
      'Write long-form SEO blog posts and website content',
      'Develop brand messaging and copywriting for campaigns',
      'Conduct keyword research and content gap analysis',
      'Collaborate with the design team on content assets',
      'Edit and proofread content across all channels',
    ],
    requirements: [
      '2+ years of content writing or copywriting experience',
      'Strong understanding of SEO best practices',
      'Experience writing for B2B and B2C audiences',
      'Excellent English writing skills — concise, clear, and compelling',
      'Familiarity with tools like Surfer SEO, Clearscope, or similar',
    ],
  },
  {
    id: 5,
    title: 'Business Development Manager',
    department: 'Sales',
    location: 'India / UK / Middle East',
    type: 'Full-time',
    description:
      'Identify, approach, and close new business opportunities for Kynosi across our core markets. Own the full sales cycle from prospecting to contract signing.',
    responsibilities: [
      'Generate and qualify new business leads',
      'Build and maintain a strong pipeline of prospects',
      'Present Kynosi services to senior decision-makers',
      'Negotiate and close contracts with new clients',
      'Collaborate with the delivery team on smooth onboarding',
    ],
    requirements: [
      '3+ years of B2B sales experience in digital services or technology',
      'Proven track record of hitting and exceeding sales targets',
      'Excellent communication and presentation skills',
      'Experience selling into India, UK, or Middle East markets',
      'Self-motivated with strong organisational skills',
    ],
  },
  {
    id: 6,
    title: 'Frontend Developer',
    department: 'Technology',
    location: 'India / Remote',
    type: 'Full-time',
    description:
      'Build fast, modern, and conversion-focused websites and web applications for Kynosi clients using React, Next.js, and Tailwind CSS.',
    responsibilities: [
      'Develop responsive, high-performance websites and landing pages',
      'Collaborate with designers to implement pixel-perfect UIs',
      'Integrate third-party APIs, CMS platforms, and marketing tools',
      'Optimise websites for Core Web Vitals and SEO performance',
      'Maintain and improve existing client web properties',
    ],
    requirements: [
      '2+ years of frontend development experience',
      'Proficiency in React and Next.js',
      'Strong command of Tailwind CSS and modern CSS',
      'Experience with headless CMS platforms (Contentful, Sanity, etc.)',
      'Understanding of web performance and SEO fundamentals',
    ],
  },
];

const PERKS = [
  { icon: Globe, title: 'Work with Global Clients', description: 'Serve ambitious businesses across India, UK, Middle East, and Asia from day one.' },
  { icon: Zap, title: 'AI-First Environment', description: 'Work with cutting-edge AI tools and automation platforms before they hit the mainstream.' },
  { icon: TrendingUp, title: 'Fast Career Growth', description: 'Flat structure, real ownership, and rapid progression for high performers.' },
  { icon: Laptop, title: 'Remote Flexibility', description: 'Most roles offer remote or hybrid working arrangements.' },
  { icon: Users, title: 'Collaborative Team', description: 'Work alongside specialists in marketing, tech, content, and strategy.' },
  { icon: Heart, title: 'Work That Matters', description: 'Your work directly impacts the growth of real businesses and real people.' },
];

function JobCard({ job }: { job: (typeof OPENINGS)[number] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white rounded-xl border border-neutral-200 hover:border-brand-300 hover:shadow-md transition-smooth overflow-hidden">
        <button
          type="button"
          className="w-full text-left p-6 lg:p-8"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-medium text-brand-600 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
                  {job.department}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin size={12} /> {job.location}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <Clock size={12} /> {job.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900">{job.title}</h3>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">{job.description}</p>
            </div>
            <div className="flex-shrink-0 mt-1">
              {expanded
                ? <ChevronUp size={20} className="text-brand-600" />
                : <ChevronDown size={20} className="text-neutral-400" />
              }
            </div>
          </div>
        </button>

        {expanded && (
          <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 mb-3">Requirements</h4>
                <ul className="space-y-2">
                  {job.requirements.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href={`/contact?role=${encodeURIComponent(job.title)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-smooth text-sm"
              >
                Apply for this role
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function CareersClient() {
  const [filter, setFilter] = useState('All');
  const departments = ['All', ...Array.from(new Set(OPENINGS.map((j) => j.department)))];
  const filtered = filter === 'All' ? OPENINGS : OPENINGS.filter((j) => j.department === filter);

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
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-brand-100 text-brand-700 text-sm font-medium rounded-full">
                We're Hiring
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6"
            >
              Build the Future of <span className="text-gradient">Digital Growth</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-3xl mx-auto"
            >
              Join a fast-moving team helping ambitious businesses across India, the UK, the Middle East, and Asia grow with AI-powered marketing, automation, and software.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="mt-3 text-neutral-500 text-lg"
            >
              {OPENINGS.length} open positions · Remote-friendly
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Join Kynosi?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We're building a team of specialists who want real ownership, fast growth, and work that actually moves the needle.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map(({ icon: Icon, title, description }) => (
              <motion.div key={title} variants={itemVariants}>
                <div className="bg-white rounded-xl p-6 border border-neutral-200 h-full hover:border-brand-300 hover:shadow-sm transition-smooth">
                  <div className="w-11 h-11 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-brand-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-2">{title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Open Roles */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Click any role to see the full details and apply.
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 justify-center mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setFilter(dept)}
                aria-pressed={filter === dept}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                  filter === dept
                    ? 'bg-brand-600 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:border-brand-300'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          <div className="space-y-4">
            {filtered.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Open Application */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div variants={itemVariants}>
            <div className="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Briefcase size={26} className="text-brand-600" aria-hidden="true" />
            </div>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Don't See Your Role?
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-neutral-600 mb-8">
            We're always looking for exceptional talent. If you think you can contribute to Kynosi's growth, send us your CV and a short note about what you'd bring to the team.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-smooth"
            >
              Send an Open Application
              <ArrowRight size={18} />
            </Link>
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
            title="Ready to Do the Best Work of Your Career?"
            description="Kynosi is where ambitious people come to build something real. If you're driven by results, energised by fast growth, and excited about AI and digital marketing — we'd love to hear from you."
            primaryButtonText="View Open Roles"
            secondaryButtonText="Learn About Kynosi"
            primaryHref="#"
            secondaryHref="/about"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
