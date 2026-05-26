import type { Metadata } from 'next';
import { BRAND, META } from '@/lib/constants/brand';

export const SITE_URL = 'https://www.kynosi.com';
export const SITE_LOGO_PATH = '/logo.png';

export const SITE_KEYWORDS = [
  'Digital Marketing',
  'AI Automation',
  'Software Development',
  'Branding',
  'Business Strategy',
  'SEO',
  'Meta Ads',
  'Google Ads',
  'Conversion Optimisation',
  'AI Lead Generation',
];

export const STATIC_ROUTES = [
  { path: '/', title: META.home.title, description: META.home.description },
  { path: '/about', title: META.about.title, description: META.about.description },
  { path: '/services', title: META.services.title, description: META.services.description },
  { path: '/blog', title: META.blog.title, description: META.blog.description },
  { path: '/contact', title: META.contact.title, description: META.contact.description },
  {
    path: '/privacy',
    title: `Privacy Policy | ${BRAND.name}`,
    description: `How ${BRAND.name} handles website enquiries, contact details, and communication data.`,
  },
  {
    path: '/terms',
    title: `Terms of Service | ${BRAND.name}`,
    description: `Website terms for using ${BRAND.name}'s digital marketing and AI automation website.`,
  },
] as const;

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: SITE_KEYWORDS,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      type,
      images: [
        {
          url: absoluteUrl(SITE_LOGO_PATH),
          width: 512,
          height: 512,
          alt: `${BRAND.name} logo`,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [absoluteUrl(SITE_LOGO_PATH)],
    },
  };
}
