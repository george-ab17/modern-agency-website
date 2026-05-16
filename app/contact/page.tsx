import type { Metadata } from 'next';
import { META } from '@/lib/constants/brand';
import PageClient from './PageClient';

export const metadata: Metadata = {
  title: META.contact.title,
  description: META.contact.description,
};

export default function Contact() {
  return <PageClient />;
}

