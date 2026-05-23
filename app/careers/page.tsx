import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import CareersClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: 'Careers at Kynosi | Join Our AI-Powered Digital Marketing Team',
  description:
    'Explore open roles at Kynosi. Join a fast-growing team building AI-powered digital marketing, automation, and software solutions for businesses across India, UK, and the Middle East.',
  path: '/careers',
});

export default function CareersPage() {
  return <CareersClient />;
}
