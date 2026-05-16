import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionContainer } from '@/components/SectionContainer';
import { SERVICE_PAGES, type ServicePageSlug } from '@/lib/data/servicePages';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return Object.keys(SERVICE_PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICE_PAGES[params.slug as ServicePageSlug];

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} | Kynosi`,
    description: service.subtitle,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICE_PAGES[params.slug as ServicePageSlug];

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      <SectionContainer padding="2xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            {service.sectionTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.items.map(([title, description], index) => (
            <div key={title} className="bg-white rounded-xl p-8 border border-neutral-200">
              <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-brand-600">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
              <p className="text-neutral-600">{description}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {'proof' in service && service.proof ? (
        <SectionContainer padding="2xl" className="bg-neutral-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 text-center">
              {service.proofTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.proof.map((point) => (
                <div key={point} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-neutral-200">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-1" />
                  <span className="text-neutral-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </SectionContainer>
      ) : null}

      {'snippet' in service && service.snippet ? (
        <SectionContainer padding="2xl">
          <div className="bg-white rounded-xl p-8 border border-neutral-200 max-w-4xl mx-auto">
            <p className="text-sm font-medium text-brand-600 mb-2">Case Study Snippet</p>
            <h2 className="text-3xl font-bold text-neutral-900 mb-3">{service.snippet.title}</h2>
            <p className="text-neutral-600">{service.snippet.body}</p>
          </div>
        </SectionContainer>
      ) : null}

      <SectionContainer padding="2xl">
        <div className="bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl py-16 px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free strategy consultation and discover how Kynosi can help you scale smarter.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              Book Your Free Consultation
              <ArrowRight size={20} />
            </Button>
          </Link>
        </div>
      </SectionContainer>
    </>
  );
}
