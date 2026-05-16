import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.blog.title,
  description: META.blog.description,
};

export default function Blog() {
  return <PageClient />;
}

