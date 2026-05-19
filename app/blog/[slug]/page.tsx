import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { JsonLd } from '@/components/JsonLd';
import { SectionContainer } from '@/components/SectionContainer';
import { BLOG_POSTS, FEATURED_POST } from '@/lib/data/blog';
import { FEATURED_POST_CONTENT } from '@/lib/data/blogPost';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

const blogPosts = [
  {
    ...FEATURED_POST,
    slug: FEATURED_POST.slug,
    contentType: 'featured',
  },
  ...BLOG_POSTS.map((post) => ({
    ...post,
    slug: post.id,
    contentType: 'standard',
  })),
] as const;

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

function getPublishedDate(date: string) {
  if (date.includes('May 2026')) return '2026-05-01';
  if (date.includes('April 2026')) return '2026-04-01';
  if (date.includes('March 2026')) return '2026-03-01';
  return '2026-01-01';
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {};
  }

  return pageMetadata({
    title: `${post.title} | Kynosi`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: 'article',
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const path = `/blog/${post.slug}`;
  const isFeaturedPost = post.slug === FEATURED_POST_CONTENT.slug;
  const relatedPosts = BLOG_POSTS.filter((relatedPost) => relatedPost.id !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path,
            datePublished: getPublishedDate(post.date),
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path },
          ]),
        ]}
      />
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-600 mb-4">{post.category}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {post.title}
          </h1>
          <p className="text-neutral-500">
            {post.date} | {post.readTime}
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <article className="max-w-4xl mx-auto">
          {isFeaturedPost ? (
            <>
              <div className="space-y-5 text-lg text-neutral-600 leading-relaxed mb-12">
                {FEATURED_POST_CONTENT.introduction.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="space-y-12">
                {FEATURED_POST_CONTENT.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-3xl font-bold text-neutral-900 mb-5">{section.title}</h2>
                    {'body' in section && section.body ? (
                      <div className="space-y-4 text-neutral-600 leading-relaxed">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    ) : null}
                    {'items' in section && section.items ? (
                      <div className="grid grid-cols-1 gap-4">
                        {section.items.map(([title, body], index) => (
                          <div key={title} className="bg-white rounded-xl p-6 border border-neutral-200">
                            <h3 className="font-bold text-neutral-900 mb-2">
                              {index + 1}. {title}
                            </h3>
                            <p className="text-neutral-600">{body}</p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>

              <div className="mt-12 border-t border-neutral-200 pt-8">
                <p className="text-lg text-neutral-600 leading-relaxed">
                  {FEATURED_POST_CONTENT.conclusion}
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-12">
              <p className="text-lg text-neutral-600 leading-relaxed">{post.excerpt}</p>
              <section>
                <h2 className="text-3xl font-bold text-neutral-900 mb-5">
                  What to Review First
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    'Clarify the audience, region, and buying intent before choosing tactics.',
                    'Audit the current funnel so traffic, messaging, creative, and conversion points are measured together.',
                    'Prioritise the changes that can improve lead quality, conversion rate, or acquisition cost fastest.',
                  ].map((item, index) => (
                    <div key={item} className="bg-white rounded-xl p-6 border border-neutral-200">
                      <h3 className="font-bold text-neutral-900 mb-2">{index + 1}. Practical step</h3>
                      <p className="text-neutral-600">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h2 className="text-3xl font-bold text-neutral-900 mb-5">
                  How Kynosi Approaches It
                </h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    We connect strategy, execution, analytics, and optimisation into one operating rhythm.
                    That means every campaign, landing page, automation, or brand asset is judged by how well it
                    contributes to measurable growth.
                  </p>
                  <p>
                    The strongest results usually come from tightening the basics first: clear positioning,
                    accurate tracking, fast feedback loops, and a channel plan that matches the customer journey.
                  </p>
                </div>
              </section>
            </div>
          )}
        </article>
      </SectionContainer>

      <SectionContainer padding="2xl" className="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Automate?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            {isFeaturedPost
              ? FEATURED_POST_CONTENT.cta
              : 'Ready to turn this strategy into execution? Book a free consultation and we will help you identify the highest-impact next step.'}
          </p>
          <Link href="/contact">
            <Button size="lg">
              {isFeaturedPost ? FEATURED_POST_CONTENT.ctaButton : 'Book a Free Consultation'}
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer padding="2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.id}`}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:border-brand-300 transition-smooth"
              >
                <p className="font-semibold text-neutral-900">{relatedPost.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
