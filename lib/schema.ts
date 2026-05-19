import { BRAND } from '@/lib/constants/brand';
import { SERVICES } from '@/lib/data/services';
import { SERVICES_FAQS } from '@/lib/data/faqs';
import { absoluteUrl, SITE_LOGO_PATH, SITE_URL } from '@/lib/seo';

type BreadcrumbItem = {
  name: string;
  path: string;
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
  '@id': absoluteUrl('/#organization'),
  name: BRAND.name,
  url: SITE_URL,
  logo: absoluteUrl(SITE_LOGO_PATH),
  email: BRAND.email,
  description: BRAND.tagline,
  areaServed: BRAND.markets.map((market) => ({
    '@type': 'Place',
    name: market,
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    email: BRAND.email,
    contactType: 'customer support',
    areaServed: BRAND.markets,
    availableLanguage: ['English'],
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  name: BRAND.name,
  url: SITE_URL,
  publisher: {
    '@id': absoluteUrl('/#organization'),
  },
};

export const servicesCollectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  '@id': absoluteUrl('/services#services'),
  name: `${BRAND.name} services`,
  itemListElement: SERVICES.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      '@id': absoluteUrl(`${service.href}#service`),
      name: service.title,
      description: service.description,
      url: absoluteUrl(service.href),
      provider: {
        '@id': absoluteUrl('/#organization'),
      },
      areaServed: BRAND.markets,
    },
  })),
};

export const servicesFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': absoluteUrl('/services#faq'),
  mainEntity: SERVICES_FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function serviceSchema({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': absoluteUrl(`${path}#service`),
    name: title,
    description,
    url: absoluteUrl(path),
    provider: {
      '@id': absoluteUrl('/#organization'),
    },
    areaServed: BRAND.markets,
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': absoluteUrl(`${path}#article`),
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    author: {
      '@type': 'Organization',
      name: BRAND.name,
    },
    publisher: {
      '@id': absoluteUrl('/#organization'),
    },
  };
}
