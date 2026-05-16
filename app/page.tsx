import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.home.title,
  description: META.home.description,
};

export default function Home() {
  return <PageClient />;
}

