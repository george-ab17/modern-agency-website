import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.caseStudies.title,
  description: META.caseStudies.description,
};

export default function CaseStudies() {
  return <PageClient />;
}

