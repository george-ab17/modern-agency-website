import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'PremiumAgency - Digital Excellence & AI-Powered Growth',
  description:
    'Transform your business with digital marketing, AI automation, software development, and strategic branding solutions.',
  keywords: [
    'Digital Marketing',
    'AI Automation',
    'Software Development',
    'Branding',
    'Business Strategy',
  ],
  openGraph: {
    title: 'PremiumAgency - Premium Digital Solutions',
    description:
      'Transform your business with our comprehensive digital services.',
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
