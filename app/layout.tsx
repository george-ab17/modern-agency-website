import type { Metadata } from 'next';
import { JsonLd } from '@/components';
import { Navbar } from '@/components';
import { Footer } from '@/components';
import { BRAND, META } from '@/lib/constants/brand';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { pageMetadata, SITE_URL } from '@/lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: META.home.title,
    description: META.home.description,
    path: '/',
  }),
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name, url: SITE_URL }],
  creator: BRAND.name,
  publisher: BRAND.name,
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

