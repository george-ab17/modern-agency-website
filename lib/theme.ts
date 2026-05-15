// Centralized theme and design system
export const THEME = {
  // Brand identity (placeholder - easy to change)
  brand: {
    name: "PremiumAgency",
    tagline: "Digital Excellence & AI-Powered Growth",
    logo: "PA",
  },

  // Colors - Blue-based premium palette
  colors: {
    primary: {
      50: "#f0f7ff",
      100: "#e0ecff",
      200: "#c2dcff",
      300: "#a3c8ff",
      400: "#7aacff",
      500: "#4b89ff",
      600: "#1f5ef0",
      700: "#1849d6",
      800: "#1337b8",
      900: "#102a94",
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    accent: {
      blue: "#1f5ef0",
      cyan: "#06b6d4",
      green: "#10b981",
    },
  },

  // Typography
  typography: {
    fontFamily: {
      sans: 'system-ui, -apple-system, sans-serif',
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
    },
  },

  // Spacing
  spacing: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
    "2xl": "3rem",
    "3xl": "4rem",
    "4xl": "5rem",
    "5xl": "6rem",
    "6xl": "8rem",
  },

  // Section spacing
  sectionSpacing: {
    xs: "2rem",
    sm: "3rem",
    md: "4rem",
    lg: "5rem",
    xl: "6rem",
    "2xl": "8rem",
  },

  // Border radius
  borderRadius: {
    sm: "0.375rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.5rem",
    "2xl": "2rem",
  },

  // Shadows
  shadows: {
    xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    sm: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.1)",
  },

  // Navigation
  navigation: {
    height: "4rem",
    mobileHeight: "3.5rem",
  },

  // Breakpoints
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Social links (placeholder)
  social: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },

  // Contact info (placeholder)
  contact: {
    email: "hello@premiumagency.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    address: "San Francisco, CA",
  },
};

// Export color utilities
export const getColorByVariant = (
  variant: "primary" | "secondary" | "neutral" = "primary"
) => {
  switch (variant) {
    case "primary":
      return THEME.colors.primary[600];
    case "secondary":
      return THEME.colors.accent.blue;
    case "neutral":
      return THEME.colors.neutral[600];
    default:
      return THEME.colors.primary[600];
  }
};
