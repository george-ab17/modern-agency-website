import type { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { META } from '@/lib/constants/brand';
import { servicesCollectionSchema, servicesFaqSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.services.title,
  description: META.services.description,
  path: '/services',
});

export default function Services() {
  return (
    <>
      <JsonLd data={[servicesCollectionSchema, servicesFaqSchema]} />
      <PageClient />
    </>
  );
}

