import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.about.title,
  description: META.about.description,
};

export default function About() {
  return <PageClient />;
}

