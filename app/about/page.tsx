'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Award, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/SectionContainer';
import { Button } from '@/components/Button';
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

export default function About() {
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
              About <span className="text-gradient">PremiumAgency</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Pioneering digital transformation with strategy, innovation, and expertise since
              2014.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Our Story</h2>
            <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
              Founded in 2014, PremiumAgency started with a simple mission: to help businesses
              thrive in the digital age. What began as a small team of passionate technologists
              has grown into a full-service digital powerhouse.
            </p>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Today, we partner with over 500 companies worldwide, from ambitious startups to
              Fortune 500 enterprises. Our expertise spans digital marketing, AI automation,
              software development, and strategic branding.
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              We believe in building long-term partnerships based on transparency, results, and
              continuous innovation. Every project we undertake is an opportunity to drive
              meaningful growth and transformation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-12 h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="text-6xl opacity-20 mb-4">🏢</div>
              <p className="text-neutral-600">Our Modern Office Culture</p>
            </div>
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Mission & Vision */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Our Mission</h3>
              <p className="text-neutral-600 leading-relaxed">
                To empower businesses with cutting-edge digital solutions and strategic expertise
                that drive meaningful growth, innovation, and sustainable competitive advantage in
                an ever-evolving market landscape.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-neutral-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Our Vision</h3>
              <p className="text-neutral-600 leading-relaxed">
                To become the globally recognized leader in digital transformation, where
                innovation meets strategy, and where every client partnership creates lasting
                impact and exceptional results.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </SectionContainer>

      {/* Core Values */}
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
              Our Core Values
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We pursue the highest standards in everything we do.',
              },
              {
                icon: Users,
                title: 'Collaboration',
                description: 'Strong partnerships drive extraordinary outcomes.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'We embrace new ideas and push creative boundaries.',
              },
              {
                icon: Target,
                title: 'Integrity',
                description: 'Transparency and honesty in all our dealings.',
              },
            ].map((value, i) => (
              <motion.div key={i} variants={itemVariants}>
                <div className="bg-white rounded-xl p-8 border border-neutral-200 text-center hover:shadow-md transition-smooth">
                  <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2">
                    {value.title}
                  </h4>
                  <p className="text-neutral-600 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Team Section */}
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
              Our Team
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              A diverse group of experts united by passion, creativity, and commitment to excellence
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: 'Alex Thompson',
                role: 'Chief Executive Officer',
                expertise: 'Strategic Leadership',
              },
              {
                name: 'Maria Garcia',
                role: 'Chief Technology Officer',
                expertise: 'Software Architecture',
              },
              {
                name: 'David Lee',
                role: 'Head of Digital Marketing',
                expertise: 'Growth Strategy',
              },
              {
                name: 'Sophie Martin',
                role: 'Creative Director',
                expertise: 'Brand & Design',
              },
              {
                name: 'James Wilson',
                role: 'AI & Automation Lead',
                expertise: 'AI Implementation',
              },
              {
                name: 'Elena Rodriguez',
                role: 'Client Success Manager',
                expertise: 'Partnership Development',
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl p-6 border border-neutral-200 text-center hover:shadow-md transition-smooth"
              >
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-brand-100 to-brand-50 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👤</span>
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-1">
                  {member.name}
                </h4>
                <p className="text-brand-600 font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-neutral-600 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* Why Work With Us Section */}
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
              Why Partner With Us
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                number: '500+',
                label: 'Projects Completed',
                description: 'Proven track record of successful implementations',
              },
              {
                number: '98%',
                label: 'Client Satisfaction',
                description: 'Long-term partnerships built on trust',
              },
              {
                number: '10+',
                label: 'Years of Experience',
                description: 'Industry expertise and market insight',
              },
              {
                number: '150+',
                label: 'Talented Team Members',
                description: 'Diverse skills across all domains',
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 border border-neutral-200"
              >
                <h3 className="text-4xl font-bold text-brand-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-lg font-semibold text-neutral-900 mb-2">
                  {stat.label}
                </p>
                <p className="text-neutral-600">{stat.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer padding="2xl" className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Let's Build Something Great Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Get In Touch
                <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </SectionContainer>
    </>
  );
}
