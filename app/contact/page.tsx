import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.contact.title,
  description: META.contact.description,
  path: '/contact',
});

export default function Contact() {
  return <PageClient />;
}

