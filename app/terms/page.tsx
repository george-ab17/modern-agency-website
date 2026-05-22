import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components';
import { BRAND } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: `Terms of Service | ${BRAND.name}`,
  description: `Website terms for using ${BRAND.name}'s digital marketing and AI automation website.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-neutral-600">
            Basic terms for using the {BRAND.name} website.
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <div className="max-w-4xl mx-auto space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Website Use</h2>
            <p>
              This website provides information about {BRAND.name}'s digital marketing, AI automation,
              software development, branding, and growth services. You agree to use it lawfully and not
              disrupt its operation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Service Discussions</h2>
            <p>
              Submitting a contact form or booking a consultation does not create a client engagement.
              Project scope, deliverables, fees, and timelines are agreed separately in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Website Content</h2>
            <p>
              Website content is provided for general information. Results vary by market, offer, budget,
              execution, and business context.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Contact</h2>
            <p>
              For questions about these terms, contact{' '}
              <a href={`mailto:${BRAND.email}`} className="text-brand-600 hover:text-brand-700">
                {BRAND.email}
              </a>
              .
            </p>
          </section>

          <Link href="/contact" className="inline-flex font-medium text-brand-600 hover:text-brand-700">
            Contact Kynosi
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
