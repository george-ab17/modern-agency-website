import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components';
import { JsonLd } from '@/components';
import { SectionContainer } from '@/components';
import { CASE_STUDIES } from '@/lib/data/caseStudies';
import { SERVICES } from '@/lib/data/services';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.id === slug);
}

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.id }));
}

export function generateMetadata({ params }: CaseStudyPageProps): Metadata {
  const study = getCaseStudy(params.slug);

  if (!study) {
    return {};
  }

  return pageMetadata({
    title: `${study.client} ${study.industry} Case Study | Kynosi`,
    description: study.challenge,
    path: `/case-studies/${study.id}`,
    type: 'article',
  });
}

export default function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const study = getCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  const path = `/case-studies/${study.id}`;
  const relatedServices = SERVICES.filter((service) =>
    study.services.some((studyService) => service.title.includes(studyService) || studyService.includes(service.title))
  );
  const relatedStudies = CASE_STUDIES.filter((caseStudy) => caseStudy.id !== study.id).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: `${study.client} ${study.industry} Case Study`,
            description: study.challenge,
            path,
            datePublished: '2026-05-01',
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Case Studies', path: '/case-studies' },
            { name: study.client, path },
          ]),
        ]}
      />

      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-600 mb-4">
            {study.industry} | {study.region}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            {study.client}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {study.challenge}
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Challenge</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">{study.challenge}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Approach</h2>
              <p className="text-lg text-neutral-600 leading-relaxed">{study.approach}</p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Results</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {study.results.map((result) => (
                  <div key={result.metric} className="rounded-xl border border-neutral-200 bg-white p-6">
                    <p className="text-3xl font-bold text-brand-600 mb-2">{result.value}</p>
                    <p className="text-neutral-700">{result.metric}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Project Snapshot</h2>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-neutral-900">Duration</dt>
                  <dd className="text-neutral-600">{study.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-900">Region</dt>
                  <dd className="text-neutral-600">{study.region}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-900">Services</dt>
                  <dd className="flex flex-wrap gap-2 pt-2">
                    {study.services.map((service) => (
                      <span key={service} className="rounded bg-brand-50 px-2 py-1 text-xs text-brand-700">
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {relatedServices.length > 0 ? (
              <div className="rounded-xl border border-neutral-200 bg-white p-6">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Related Services</h2>
                <div className="space-y-3">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 p-3 text-sm font-medium text-neutral-700 hover:border-brand-300 hover:text-brand-700 transition-smooth"
                    >
                      {service.title}
                      <ArrowRight size={16} />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </SectionContainer>

      <SectionContainer padding="2xl" className="bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">What Made This Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              'Clear diagnosis before execution',
              'Channel strategy connected to business goals',
              'Continuous measurement and optimisation',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-brand-600" />
                <p className="text-sm text-neutral-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer padding="2xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">More Case Studies</h2>
              <p className="text-neutral-600">See how Kynosi connects strategy, execution, and measurable results.</p>
            </div>
            <Link href="/case-studies">
              <Button as="span" variant="outline">View All</Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedStudies.map((caseStudy) => (
              <Link
                key={caseStudy.id}
                href={`/case-studies/${caseStudy.id}`}
                className="rounded-xl border border-neutral-200 bg-white p-6 hover:border-brand-300 transition-smooth"
              >
                <p className="text-sm font-medium text-brand-600 mb-2">{caseStudy.industry}</p>
                <h3 className="font-bold text-neutral-900 mb-2">{caseStudy.client}</h3>
                <p className="text-sm text-neutral-600">{caseStudy.challenge.slice(0, 120)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer padding="2xl" className="bg-neutral-900 text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Growth Plan?
          </h2>
          <p className="text-neutral-300 mb-8">
            Book a free consultation and we will identify the highest-impact opportunities for your business.
          </p>
          <Link href="/contact">
            <Button as="span" variant="secondary" size="lg">
              Book Your Free Consultation
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
