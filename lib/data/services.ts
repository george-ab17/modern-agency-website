export const SERVICES = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Strategic, data-led campaigns that drive qualified traffic, build brand authority, and convert visitors into loyal customers. From SEO to content marketing to social media - we own every channel.",
    icon: "TrendingUp",
    href: "/services/digital-marketing",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline your operations, eliminate manual tasks, and boost efficiency. Let AI do the heavy lifting while your team focuses on growth.",
    icon: "Zap",
    href: "/services/ai-automation",
  },
  {
    id: "software-development",
    title: "Software Development",
    description:
      "Custom-built web applications, SaaS platforms, and digital tools engineered with modern technology for maximum performance and scalability.",
    icon: "Code2",
    href: "/services/software-development",
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Powerful brand identities that stop the scroll and win hearts. From logo and visual identity to brand voice and strategy - we build brands that last.",
    icon: "Sparkles",
    href: "/services/branding",
  },
  {
    id: "meta-ads",
    title: "Meta Ads Management",
    description:
      "Expert Facebook and Instagram advertising that maximises your ROI. Precision targeting, compelling creative, and relentless optimisation across every audience segment.",
    icon: "Target",
    href: "/services/meta-ads",
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    description:
      "High-performance Google Search, Display, Shopping, and YouTube campaigns managed by certified experts. We make every rupee, pound, and dirham count.",
    icon: "Search",
    href: "/services/google-ads",
  },
  {
    id: "conversion-optimisation",
    title: "Conversion Optimisation",
    description:
      "Every touchpoint on your customer journey - optimised. We turn browsers into buyers, visitors into leads, and leads into revenue.",
    icon: "BarChart3",
    href: "/services/conversion-optimisation",
  },
  {
    id: "ai-lead-generation",
    title: "AI-Powered Lead Generation",
    description:
      "AI-driven lead generation systems that identify, attract, and qualify your ideal customers at scale - feeding your sales team a steady stream of high-intent prospects.",
    icon: "Brain",
    href: "/services/ai-lead-generation",
  },
] as const;

export type Service = (typeof SERVICES)[number];

