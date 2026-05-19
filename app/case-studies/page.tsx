import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.caseStudies.title,
  description: META.caseStudies.description,
  path: '/case-studies',
});

export default function CaseStudies() {
  return <PageClient />;
}

