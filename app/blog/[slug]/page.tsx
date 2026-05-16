import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionContainer } from '@/components/SectionContainer';
import { FEATURED_POST_CONTENT } from '@/lib/data/blogPost';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  if (params.slug !== FEATURED_POST_CONTENT.slug) {
    return {};
  }

  return {
    title: `${FEATURED_POST_CONTENT.title} | Kynosi`,
    description: FEATURED_POST_CONTENT.introduction[0],
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  if (params.slug !== FEATURED_POST_CONTENT.slug) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-600 mb-4">{FEATURED_POST_CONTENT.category}</p>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {FEATURED_POST_CONTENT.title}
          </h1>
          <p className="text-neutral-500">
            {FEATURED_POST_CONTENT.date} | {FEATURED_POST_CONTENT.readTime}
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <article className="max-w-4xl mx-auto">
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
            <p className="text-lg text-neutral-600 leading-relaxed">{FEATURED_POST_CONTENT.conclusion}</p>
          </div>
        </article>
      </SectionContainer>

      <SectionContainer padding="2xl" className="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Ready to Automate?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">{FEATURED_POST_CONTENT.cta}</p>
          <Link href="/contact">
            <Button size="lg">
              {FEATURED_POST_CONTENT.ctaButton}
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionContainer>

      <SectionContainer padding="2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FEATURED_POST_CONTENT.relatedPosts.map((post) => (
              <div key={post} className="bg-white rounded-xl p-6 border border-neutral-200">
                <p className="font-semibold text-neutral-900">{post}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
