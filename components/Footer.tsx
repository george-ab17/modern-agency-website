import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Globe } from 'lucide-react';
import { BRAND } from '@/lib/constants/brand';
import { FOOTER } from '@/lib/constants/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt={`${BRAND.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover"
              />
              <span className="font-bold text-white">{BRAND.name}</span>
            </div>
            <p className="text-sm text-neutral-400 mb-3">{FOOTER.tagline}</p>
            <p className="text-sm text-neutral-500 mb-4">{FOOTER.description}</p>
            <p className="text-xs text-neutral-500">{FOOTER.markets}</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER.links.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-400 hover:text-white transition-smooth">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {FOOTER.links.services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-neutral-400 hover:text-white transition-smooth">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${FOOTER.contact.email}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-smooth"
                aria-label={`Email ${BRAND.name}`}
              >
                <Mail size={16} aria-hidden="true" />
                {FOOTER.contact.email}
              </a>
              <a
                href={`https://${FOOTER.contact.website}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-smooth"
                aria-label={`Visit ${BRAND.name} website`}
              >
                <Globe size={16} aria-hidden="true" />
                {FOOTER.contact.website}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex justify-between items-center flex-col sm:flex-row gap-4">
          <p className="text-sm text-neutral-400">{FOOTER.legal.copyright}</p>
          <div className="flex gap-4 text-sm">
            {FOOTER.legal.links.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-400 hover:text-white transition-smooth">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

