import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.about.title,
  description: META.about.description,
  path: '/about',
});

export default function About() {
  return <PageClient />;
}

