// SEO Configuration and Metadata Utilities
// Centralized SEO settings for all pages

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  canonical?: string;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://waleedkhalil.vercel.app';
const SITE_NAME = 'Muhammad Waleed Khalil';
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-image.jpg`;

// Common keywords used across the site
const COMMON_KEYWORDS = [
  'full-stack developer',
  'Next.js developer',
  'React developer',
  'Laravel developer',
  'MERN stack developer',
  'AI integration specialist',
  'software engineer Pakistan',
  'web developer Islamabad',
  'React Native developer',
  'Node.js developer',
  'TypeScript developer',
  'PHP developer',
  'JavaScript developer',
  'freelance developer Pakistan',
];

// Page-specific SEO configurations
export const PAGE_SEO: Record<string, SEOConfig> = {
  home: {
    title: 'Muhammad Waleed Khalil | Full-Stack Developer & AI Integration Specialist',
    description:
      'Full-Stack Developer with 4+ years experience in Next.js, React, Laravel, and AI integration. Building scalable SaaS, e-commerce, and mobile solutions in Islamabad, Pakistan.',
    keywords: [
      ...COMMON_KEYWORDS,
      'portfolio',
      'projects',
      'web applications',
      'mobile apps',
      'AI systems',
    ].join(', '),
    ogTitle: 'Muhammad Waleed Khalil - Full-Stack Developer & AI Specialist',
    ogDescription:
      'Building scalable, AI-enhanced web and mobile applications with Laravel, Next.js, React, and MERN stack. Available for freelance and full-time opportunities.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterCard: 'summary_large_image',
    canonical: SITE_URL,
  },

  about: {
    title: 'About Muhammad Waleed Khalil - Full-Stack Developer from Islamabad',
    description:
      'Learn about Muhammad Waleed Khalil, a full-stack developer specializing in Laravel, MERN, Next.js, and AI integration with 4+ years of experience building enterprise solutions.',
    keywords: [
      ...COMMON_KEYWORDS,
      'about',
      'biography',
      'experience',
      'education',
      'skills',
      'certifications',
      'BS Computer Science',
    ].join(', '),
    ogTitle: 'About Muhammad Waleed Khalil - Full-Stack Developer',
    ogDescription:
      '4+ years of experience delivering SaaS, e-commerce, and government platforms. Specializing in Laravel, MERN, Next.js, React Native, and AI integration.',
    ogImage: DEFAULT_OG_IMAGE,
    twitterCard: 'summary_large_image',
    canonical: `${SITE_URL}/about`,
  },

  works: {
    title: 'Portfolio Projects - SaaS, AI Systems, Web & Mobile Apps | Muhammad Waleed Khalil',
    description:
      'Explore portfolio projects including MOC-PULSE AI Interview System, PMRU Government Dashboard, IntelliDelve SaaS, and e-commerce platforms built with Next.js, Laravel, and React.',
    keywords: [
      ...COMMON_KEYWORDS,
      'portfolio projects',
      'web applications',
      'mobile apps',
      'SaaS platforms',
      'AI systems',
      'e-commerce solutions',
      'government platforms',
      'MOC-PULSE',
      'IntelliDelve',
      'React Native apps',
    ].join(', '),
    ogTitle: 'Portfolio Projects - Muhammad Waleed Khalil',
    ogDescription:
      'Featured projects: AI Interview System (35% performance boost), Government Dashboard (90% faster), SaaS Platform (5K+ users), E-commerce Suite (40% faster load).',
    ogImage: `${SITE_URL}/images/projects-og.jpg`,
    twitterCard: 'summary_large_image',
    canonical: `${SITE_URL}/works`,
  },

  contact: {
    title: 'Contact Muhammad Waleed Khalil - Freelance Full-Stack Developer',
    description:
      'Get in touch with Muhammad Waleed Khalil for full-stack development, AI integration, mobile app development, and DevOps services. Available for freelance and full-time work.',
    keywords: [
      ...COMMON_KEYWORDS,
      'contact',
      'hire developer',
      'freelance developer',
      'consultation',
      'software development services',
      'web development services Pakistan',
    ].join(', '),
    ogTitle: 'Contact Muhammad Waleed Khalil - Available for Projects',
    ogDescription:
      'Available for freelance and full-time opportunities. Let\'s build something impactful together. Email: mwaleedkhalil@gmail.com',
    ogImage: DEFAULT_OG_IMAGE,
    twitterCard: 'summary',
    canonical: `${SITE_URL}/contact`,
  },
};

// Generate full metadata object for Next.js
export const generateMetadata = (pageKey: string): SEOConfig => {
  const config = PAGE_SEO[pageKey] || PAGE_SEO.home;
  return {
    ...config,
    canonical: config.canonical || `${SITE_URL}/${pageKey}`,
  };
};

// Helper to get Open Graph tags
export const getOpenGraphTags = (pageKey: string) => {
  const config = PAGE_SEO[pageKey] || PAGE_SEO.home;
  return {
    title: config.ogTitle || config.title,
    description: config.ogDescription || config.description,
    url: config.canonical || `${SITE_URL}/${pageKey}`,
    siteName: SITE_NAME,
    images: [
      {
        url: config.ogImage || DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: config.ogTitle || config.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  };
};

// Helper to get Twitter tags
export const getTwitterTags = (pageKey: string) => {
  const config = PAGE_SEO[pageKey] || PAGE_SEO.home;
  return {
    card: config.twitterCard || 'summary_large_image',
    title: config.ogTitle || config.title,
    description: config.ogDescription || config.description,
    images: [config.ogImage || DEFAULT_OG_IMAGE],
    creator: '@mwaleedkhalil',
    site: '@mwaleedkhalil',
  };
};

// Get robots meta tag
export const getRobotsTags = (index = true, follow = true) => {
  const directives = [];
  directives.push(index ? 'index' : 'noindex');
  directives.push(follow ? 'follow' : 'nofollow');
  return directives.join(', ');
};

// Generate canonical URL
export const getCanonicalUrl = (path: string) => {
  return `${SITE_URL}${path}`;
};

// Export site URL for use in components
export { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE };
