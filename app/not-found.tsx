import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { SectionContainer } from '@/components/SectionContainer';

export default function NotFound() {
  return (
    <SectionContainer padding="2xl">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-brand-600 mb-4">404</p>
        <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
          Page Not Found
        </h1>
        <p className="text-xl text-neutral-600 mb-8">
          The page you are looking for may have moved. Use one of the core sections below to keep exploring Kynosi.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/">
            <Button size="lg">
              Go Home
              <ArrowRight size={20} />
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              View Services
            </Button>
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
