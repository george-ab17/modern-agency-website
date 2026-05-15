import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { THEME } from '@/lib/theme';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-600 to-brand-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                {THEME.brand.logo}
              </div>
              <span className="font-bold text-white">{THEME.brand.name}</span>
            </div>
            <p className="text-sm text-neutral-400 mb-4">
              {THEME.brand.tagline}
            </p>
            <p className="text-xs text-neutral-500">
              © {currentYear} {THEME.brand.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Digital Marketing',
                'Business Strategy',
                'Software Development',
                'Branding',
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-white transition-smooth"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href={`mailto:${THEME.contact.email}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-smooth"
              >
                <Mail size={16} />
                {THEME.contact.email}
              </a>
              <a
                href={`tel:${THEME.contact.phone}`}
                className="flex items-center gap-2 text-neutral-400 hover:text-white transition-smooth"
              >
                <Phone size={16} />
                {THEME.contact.phone}
              </a>
              <div className="flex items-center gap-2 text-neutral-400">
                <MapPin size={16} />
                {THEME.contact.address}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 pt-8">
          {/* Social Links */}
          <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
            <p className="text-sm text-neutral-400">
              Built with modern web technologies
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: THEME.social.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: THEME.social.twitter, label: 'Twitter' },
                { icon: Instagram, href: THEME.social.instagram, label: 'Instagram' },
                { icon: Facebook, href: THEME.social.facebook, label: 'Facebook' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-neutral-400 hover:text-white transition-smooth"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
