import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { META } from '@/lib/constants/brand';
import './globals.css';

export const metadata: Metadata = {
  title: META.home.title,
  description: META.home.description,
  keywords: [
    'Digital Marketing',
    'AI Automation',
    'Software Development',
    'Branding',
    'Business Strategy',
  ],
  openGraph: {
    title: META.home.title,
    description: META.home.description,
    type: 'website',
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

