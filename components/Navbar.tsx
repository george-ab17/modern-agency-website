'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from './Button';
import { NAV_LINKS, NAV_CTA } from '@/lib/constants/navigation';
import { BRAND } from '@/lib/constants/brand';
import { SERVICES } from '@/lib/data/services';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) =>
    href === '/' ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200" aria-label="Primary navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              aria-label={`${BRAND.name} home`}
              className="flex items-center gap-2 font-bold text-xl text-brand-600 hover:text-brand-700 transition-smooth"
            >
              <Image
                src="/logo.png"
                alt={`${BRAND.name} logo`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-lg object-cover"
                priority
              />
              <span className="hidden sm:inline">{BRAND.name}</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) =>
                item.href === '/services' ? (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 transition-smooth text-sm font-medium ${
                        isActiveLink(item.href)
                          ? 'text-brand-600'
                          : 'text-neutral-700 hover:text-brand-600'
                      }`}
                      aria-haspopup="true"
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" aria-hidden="true" />
                    </Link>
                    <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-smooth group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="rounded-lg border border-neutral-200 bg-white p-2 shadow-lg">
                        <Link
                          href="/services"
                          className="block rounded-md px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                        >
                          All Services
                        </Link>
                        <div className="my-1 h-px bg-neutral-100" />
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-brand-50 hover:text-brand-700 transition-smooth"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`transition-smooth text-sm font-medium ${
                      isActiveLink(item.href)
                        ? 'text-brand-600'
                        : 'text-neutral-700 hover:text-brand-600'
                    }`}
                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href={NAV_CTA.href}>
                <Button size="sm">
                  {NAV_CTA.label}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-brand-600 transition-smooth"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-navigation" className="md:hidden border-t border-neutral-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              {NAV_LINKS.map((item) =>
                item.href === '/services' ? (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className={`block transition-smooth text-sm font-medium py-2 ${
                        isActiveLink(item.href)
                          ? 'text-brand-600'
                          : 'text-neutral-700 hover:text-brand-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                    <div className="ml-3 border-l border-neutral-200 pl-3">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="block text-neutral-600 hover:text-brand-600 transition-smooth text-sm py-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block transition-smooth text-sm font-medium py-2 ${
                      isActiveLink(item.href)
                        ? 'text-brand-600'
                        : 'text-neutral-700 hover:text-brand-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link href={NAV_CTA.href} className="block">
                <Button className="w-full" size="md">
                  {NAV_CTA.label}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

