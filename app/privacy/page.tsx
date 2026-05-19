import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionContainer } from '@/components/SectionContainer';
import { BRAND } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: `Privacy Policy | ${BRAND.name}`,
  description: `How ${BRAND.name} handles website enquiries, contact details, and communication data.`,
  path: '/privacy',
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-neutral-600">
            How {BRAND.name} handles information submitted through this website.
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <div className="max-w-4xl mx-auto space-y-8 text-neutral-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Information We Collect</h2>
            <p>
              When you contact {BRAND.name}, we may collect details such as your name, email address,
              company name, phone number, region, service interest, budget range, and message.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">How We Use Information</h2>
            <p>
              We use submitted information to respond to enquiries, prepare consultation notes, improve
              our website experience, and communicate about relevant services you requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Data Sharing</h2>
            <p>
              We do not sell personal information. We may use trusted service providers to operate the
              website, manage communications, or support business operations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3">Contact</h2>
            <p>
              For privacy questions, contact us at{' '}
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
