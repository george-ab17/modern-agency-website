export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export const NAV_CTA = {
  label: "Book a Free Call",
  href: "/contact#contact-form",
} as const;

export const FOOTER = {
  tagline: "Digital Excellence & AI-Powered Growth",
  description:
    "AI-powered digital marketing, automation, and software development for ambitious businesses across India, the UK, the Middle East, and Asia.",
  markets: "India | UK | Middle East | Asia",
  links: {
    services: [
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "AI Automation", href: "/services/ai-automation" },
      { label: "Software Development", href: "/services/software-development" },
      { label: "Branding", href: "/services/branding" },
      { label: "Meta Ads", href: "/services/meta-ads" },
      { label: "Google Ads", href: "/services/google-ads" },
      { label: "Conversion Optimisation", href: "/services/conversion-optimisation" },
      { label: "AI Lead Generation", href: "/services/ai-lead-generation" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  contact: {
    email: "digital@kynosi.com",
    website: "kynosi.com",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/kynosi/about/",
  },
  legal: {
    copyright: "(c) 2026 Kynosi. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

