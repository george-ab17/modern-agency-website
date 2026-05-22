import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: 'Digital Marketing Services | SEO, Google Ads & Social Media Marketing',
  description:
    'Grow your business with result-driven digital marketing services including SEO, Google Ads, social media marketing, website development, and lead generation strategies.',
  path: '/digital-marketing-services',
});

export default function DigitalMarketingServicesPage() {
  return <PageClient />;
}
