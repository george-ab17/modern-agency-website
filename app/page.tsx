import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.home.title,
  description: META.home.description,
  path: '/',
});

export default function Home() {
  return <PageClient />;
}

