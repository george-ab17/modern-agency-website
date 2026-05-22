import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageClient from './PageClient';

export const metadata: Metadata = pageMetadata({
  title: 'AI Automation Services | Smart Business Automation Solutions',
  description:
    'Boost productivity and streamline operations with AI automation services. Automate customer support, marketing, sales, and business workflows for faster growth.',
  path: '/ai-automation-services',
});

export default function AiAutomationServicesPage() {
  return <PageClient />;
}
