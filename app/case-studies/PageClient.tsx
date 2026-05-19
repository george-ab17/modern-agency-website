'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/SectionContainer';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { CTABanner } from '@/components/CTABanner';
import { CASE_STUDIES } from '@/lib/data/caseStudies';


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
              Proof That Bold Strategy Delivers <span className="text-gradient">Extraordinary Results</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              We let our work speak for itself. Every case study below represents a real business, a real challenge, and a real transformation  delivered by the Kynosi team.
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
            {CASE_STUDIES.map((study) => (
              <motion.div key={study.id} variants={itemVariants}>
                <CaseStudyCard
                  title={study.client}
                  company={study.industry}
                  description={study.challenge.slice(0, 100)}
                  metrics={study.results.slice(0, 2).map((result) => ({
                    label: result.metric,
                    value: result.value,
                  }))}
                  tags={study.tags.slice(0, 2)}
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
              Kynosi By the Numbers
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { stat: '500+', label: 'Projects Delivered' },
              { stat: '98%', label: 'Client Satisfaction' },
              { stat: '5+', label: 'Years Experience' },
              { stat: '150+', label: 'Team Members' },
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
            title="Want Results Like These?"
            description="Let's talk about what Kynosi can do for your business. Book a free strategy consultation  no pressure, no fluff, just an honest conversation about your goals and how we can help you smash them."
            primaryButtonText="Book Your Free Consultation "
            secondaryButtonText="View Our Services"
            primaryHref="/contact"
            secondaryHref="/services"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}


