'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '@/components';
import { BlogCard } from '@/components';
import { CTABanner } from '@/components';
import { FEATURED_POST, BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/data/blog';

const BLOG_POST_IMAGES: Record<string, string> = {
  'vibe-coding-replacing-dev-teams': '/blog/vibe-coding.jpg',
  'zero-click-searches-eating-your-traffic': '/blog/zero-click.png',
  'agentic-ai-b2b-sales': '/blog/agentic-ai.png',
  'authentic-brand-ai-content-flood': '/blog/authentic-brand.png',
  'death-of-third-party-cookies': '/blog/third-party-cookies.png',
  'whatsapp-marketing-high-converting-channel': '/blog/whatsapp-marketing.png',
};


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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const allPosts = [FEATURED_POST, ...BLOG_POSTS].filter(
    (post) => BLOG_POST_IMAGES['slug' in post ? post.slug : post.id]
  );
  const visiblePosts = allPosts.filter(
    (post) => selectedCategory === 'All' || post.category === selectedCategory
  );

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
              Digital Marketing & AI <span className="text-gradient">Blog</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Insights, strategies, and actionable tips on digital marketing, AI automation, SEO, paid ads, and business growth from the Kynosi team.
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
          {BLOG_CATEGORIES.map((category) => (
            <motion.button
              type="button"
              key={category}
              variants={itemVariants}
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
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
            {visiblePosts.map((post, idx) => (
              <motion.div key={post.id || idx} variants={itemVariants}>
                <BlogCard
                  title={post.title}
                  excerpt={post.excerpt || ''}
                  category={post.category}
                  author="Kynosi Team"
                  readTime={Number.parseInt(post.readTime, 10)}
                  date={post.date}
                  href={`/blog/${'slug' in post ? post.slug : post.id}`}
                  image={BLOG_POST_IMAGES['slug' in post ? post.slug : post.id]}
                />
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
            title="Ready to Transform Your Business?"
            description="Turn these insights into results. Let's work together to achieve your growth goals. Book a free strategy consultation with our experts today."
            primaryButtonText="Schedule Your Free Consultation "
            secondaryButtonText="View Our Services"
            primaryHref="/contact"
            secondaryHref="/services"
          />
        </motion.div>
      </SectionContainer>
    </>
  );
}


