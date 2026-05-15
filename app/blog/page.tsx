'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components/SectionContainer';
import { BlogCard } from '@/components/BlogCard';
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

const blogPosts = [
  {
    id: 1,
    title: '10 AI Trends Transforming Marketing in 2024',
    excerpt: 'Discover the AI breakthroughs that are revolutionizing how businesses approach marketing and customer engagement.',
    category: 'AI & Automation',
    author: 'Alex Thompson',
    readTime: 8,
    date: 'May 15, 2024',
    featured: true,
  },
  {
    id: 2,
    title: 'The Complete Guide to SEO Optimization',
    excerpt: 'Master SEO strategies that drive organic traffic and improve your search engine rankings.',
    category: 'SEO',
    author: 'Maria Garcia',
    readTime: 12,
    date: 'May 10, 2024',
    featured: true,
  },
  {
    id: 3,
    title: 'Building a Strong Brand Identity',
    excerpt: 'Learn how to create a brand that stands out and resonates with your target audience.',
    category: 'Branding',
    author: 'Sophie Martin',
    readTime: 7,
    date: 'May 8, 2024',
    featured: false,
  },
  {
    id: 4,
    title: 'PPC Campaign Strategies That Drive ROI',
    excerpt: 'Maximize your advertising spend with proven PPC strategies and best practices.',
    category: 'Ads Strategy',
    author: 'David Lee',
    readTime: 10,
    date: 'May 5, 2024',
    featured: false,
  },
  {
    id: 5,
    title: 'Content Marketing: From Strategy to Execution',
    excerpt: 'Create compelling content that attracts, engages, and converts your ideal customers.',
    category: 'Marketing Tips',
    author: 'Elena Rodriguez',
    readTime: 9,
    date: 'May 1, 2024',
    featured: false,
  },
  {
    id: 6,
    title: 'Web Development Best Practices 2024',
    excerpt: 'Stay ahead with the latest web development trends and best practices.',
    category: 'Technology',
    author: 'James Wilson',
    readTime: 11,
    date: 'April 28, 2024',
    featured: false,
  },
];

const categories = [
  'All',
  'Marketing Tips',
  'SEO',
  'Branding',
  'AI & Automation',
  'Ads Strategy',
  'Technology',
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

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
              Our <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Insights, strategies, and trends to help you succeed in digital marketing and business growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <SectionContainer padding="md">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-wrap gap-3 justify-center"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-smooth
                ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:border-brand-300'
                }
              `}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </SectionContainer>

      {/* Blog Posts Grid */}
      <SectionContainer padding="2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
            {blogPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <BlogCard {...post} href={`/blog/${post.id}`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* Newsletter Signup */}
      <SectionContainer padding="2xl" className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 mb-8"
            >
              Subscribe to our newsletter for the latest insights, tips, and industry trends delivered to your inbox.
            </motion.p>
            <motion.form
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-600"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-smooth"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
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
            title="Ready to Take Action?"
            description="Turn these insights into results. Let's work together to achieve your business goals."
            primaryButtonText="Get In Touch"
            secondaryButtonText="View Services"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}
