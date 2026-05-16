export const CASE_STUDIES = [
  {
    id: "techretail-ecommerce",
    client: "TechRetail Inc",
    services: ["Digital Marketing", "Meta Ads", "SEO"],
    industry: "E-Commerce",
    region: "India",
    challenge:
      "TechRetail Inc was generating Rs 40 lakh/month in e-commerce revenue but had plateaued. Their existing agency was delivering minimal growth, and customer acquisition costs were rising unsustainably.",
    approach:
      "We conducted a full digital audit, rebuilt their Meta Ads strategy from the ground up, implemented a content-led SEO programme, and launched a high-converting landing page redesign. We deployed advanced audience segmentation and lookalike targeting to reach new customers at scale.",
    results: [
      { metric: "Revenue Increase", value: "+234%" },
      { metric: "Traffic Growth", value: "+156%" },
      { metric: "CPA Reduction", value: "42%" },
      { metric: "Monthly Revenue", value: "Rs 40L to Rs 1.36Cr" },
    ],
    duration: "6 months",
    tags: ["Digital Marketing", "Meta Ads", "SEO", "E-Commerce"],
  },
  {
    id: "financeflow-ai",
    client: "FinanceFlow",
    services: ["AI Automation"],
    industry: "Finance",
    region: "India",
    challenge:
      "FinanceFlow's operations team was spending over 40 hours per week on manual data entry, report generation, and client communication - leaving little bandwidth for strategic work.",
    approach:
      "We mapped every manual process across their operations, identified the highest-impact automation opportunities, and deployed a custom AI automation stack including AI-powered reporting, automated client communication workflows, and intelligent document processing.",
    results: [
      { metric: "Hours Saved Weekly", value: "40hrs" },
      { metric: "Manual Task Reduction", value: "85%" },
      { metric: "Operational Cost Reduction", value: "35%" },
      { metric: "Strategic Capacity Increase", value: "3x" },
    ],
    duration: "90 days",
    tags: ["AI Automation", "Operations", "Workflow Automation"],
  },
  {
    id: "saas-b2b-leads",
    client: "SaaS Enterprise Platform",
    services: ["AI Lead Generation"],
    industry: "SaaS",
    region: "UK & Middle East",
    challenge:
      "A growing SaaS company targeting enterprise clients in the UK and Middle East was struggling to build a consistent, high-quality pipeline. Their sales team spent too much time prospecting and not enough time closing.",
    approach:
      "We deployed our AI-powered lead generation system - building ideal customer profiles, automating LinkedIn and email outreach, implementing AI lead scoring, and integrating everything directly into their HubSpot CRM.",
    results: [
      { metric: "Qualified Leads Increase", value: "5x" },
      { metric: "Cost-Per-Lead Reduction", value: "60%" },
      { metric: "Sales Demo Capacity", value: "4x" },
      { metric: "New Pipeline Generated", value: "GBP 2.3M" },
    ],
    duration: "60 days",
    tags: ["AI Lead Generation", "B2B", "SaaS", "UK", "Middle East"],
  },
  {
    id: "hospitality-brand",
    client: "Regional Hospitality Group",
    services: ["Branding", "Digital Marketing"],
    industry: "Hospitality",
    region: "India & UAE",
    challenge:
      "A hospitality group with 8 properties across India and the UAE had inconsistent branding that failed to command premium positioning in competitive markets.",
    approach:
      "We delivered a full brand transformation - new visual identity, brand guidelines, updated messaging for Indian and Gulf Arab audiences - and launched a digital marketing campaign across Meta, Google, and travel platforms.",
    results: [
      { metric: "Direct Bookings Increase", value: "+180%" },
      { metric: "Brand Awareness Increase", value: "65%" },
      { metric: "Average Room Rate Improvement", value: "22%" },
      { metric: "Brand Perception Score", value: "4.8/5" },
    ],
    duration: "4 months",
    tags: ["Branding", "Digital Marketing", "Hospitality", "India", "UAE"],
  },
] as const;

