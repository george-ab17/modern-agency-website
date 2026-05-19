import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: META.blog.title,
  description: META.blog.description,
  path: '/blog',
});

export default function Blog() {
  return <PageClient />;
}

