import type { MetadataRoute } from 'next';
import { BLOG_POSTS, FEATURED_POST } from '@/lib/data/blog';
import { SERVICE_PAGES } from '@/lib/data/servicePages';
import { STATIC_ROUTES, absoluteUrl } from '@/lib/seo';

const lastModified = new Date('2026-05-19');
const weekly = 'weekly' as const;
const monthly = 'monthly' as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = STATIC_ROUTES.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.path === '/' ? weekly : monthly,
    priority: route.path === '/' ? 1 : 0.8,
  }));

  const serviceRoutes = Object.keys(SERVICE_PAGES).map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified,
    changeFrequency: monthly,
    priority: 0.75,
  }));

  const blogRoutes = [FEATURED_POST, ...BLOG_POSTS].map((post) => ({
    url: absoluteUrl(`/blog/${'slug' in post ? post.slug : post.id}`),
    lastModified,
    changeFrequency: monthly,
    priority: 0.65,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
