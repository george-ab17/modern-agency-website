import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.services.title,
  description: META.services.description,
};

export default function Services() {
  return <PageClient />;
}

