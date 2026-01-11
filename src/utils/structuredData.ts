// Structured Data (JSON-LD) Utilities for SEO
// Implements Schema.org markup for Person, Organization, and WebPage

export interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  image: string;
  sameAs: string[];
  jobTitle: string;
  worksFor?: {
    "@type": string;
    name: string;
  };
  description: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": string;
    addressLocality: string;
    addressCountry: string;
  };
}

export interface ProjectSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  image?: string;
  url?: string;
  creator: {
    "@type": string;
    name: string;
  };
  dateCreated: string;
  keywords: string[];
  programmingLanguage?: string[];
}

export interface WebPageSchema {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  image?: string;
  author: {
    "@type": string;
    name: string;
  };
  datePublished?: string;
  dateModified?: string;
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

// Main Person Schema for Muhammad Waleed Khalil
export const getPersonSchema = (siteUrl: string): PersonSchema => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Waleed Khalil",
  url: siteUrl,
  image: `${siteUrl}/images/profile.jpg`,
  sameAs: [
    "https://github.com/Muhammad-Waleed-Khalil",
    "https://www.linkedin.com/in/mwaleedkhalil/",
  ],
  jobTitle: "Full-Stack Developer & AI Integration Specialist",
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  description:
    "Full-Stack Developer with 4+ years of experience specializing in Next.js, Laravel, MERN stack, React Native, and AI integration for scalable SaaS and e-commerce platforms. Based in Islamabad, Pakistan.",
  email: "mwaleedkhalil@gmail.com",
  telephone: "+92-319-9648331",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "Pakistan",
  },
});

// Project Schema Generator
export const getProjectSchema = (
  project: {
    title: string;
    description: string;
    image?: string;
    website?: string;
    github?: string;
    year: string;
    technologies: string[];
  },
  siteUrl: string
): ProjectSchema => ({
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: project.title,
  description: project.description,
  image: project.image,
  url: project.website || project.github,
  creator: {
    "@type": "Person",
    name: "Muhammad Waleed Khalil",
  },
  dateCreated: project.year,
  keywords: project.technologies,
  programmingLanguage: project.technologies,
});

// WebPage Schema for each page
export const getWebPageSchema = (
  pageName: string,
  description: string,
  path: string,
  siteUrl: string
): WebPageSchema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageName,
  description: description,
  url: `${siteUrl}${path}`,
  author: {
    "@type": "Person",
    name: "Muhammad Waleed Khalil",
  },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
});

// Organization/Professional Service Schema
export const getOrganizationSchema = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Muhammad Waleed Khalil - Full-Stack Development Services",
  description:
    "Professional full-stack web development, AI integration, mobile app development, and DevOps services.",
  url: siteUrl,
  founder: {
    "@type": "Person",
    name: "Muhammad Waleed Khalil",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "Pakistan",
  },
  areaServed: "Worldwide",
  priceRange: "$$",
  sameAs: [
    "https://github.com/Muhammad-Waleed-Khalil",
    "https://www.linkedin.com/in/mwaleedkhalil/",
  ],
});

// Breadcrumb Schema Generator
export const getBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
  siteUrl: string
): BreadcrumbSchema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  })),
});

// Portfolio Schema - Collection of all projects
export const getPortfolioSchema = (
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>,
  siteUrl: string
) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Muhammad Waleed Khalil - Portfolio",
  description: "Portfolio showcasing full-stack development projects including SaaS platforms, AI systems, e-commerce solutions, and mobile applications.",
  author: {
    "@type": "Person",
    name: "Muhammad Waleed Khalil",
  },
  url: `${siteUrl}/works`,
  hasPart: projects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
  })),
});

// Skills Schema
export const getSkillsSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Waleed Khalil",
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "TypeScript",
    "JavaScript",
    "PHP",
    "React Native",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Firebase",
    "Docker",
    "Git",
    "CI/CD",
    "OpenAI API",
    "TensorFlow.js",
    "Natural Language Processing",
    "Computer Vision",
    "Full-Stack Development",
    "AI Integration",
    "Mobile Development",
    "DevOps",
  ],
});

// FAQ Schema for common questions
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// Service Schema
export const getServiceSchema = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Full-Stack Web Development",
  provider: {
    "@type": "Person",
    name: "Muhammad Waleed Khalil",
    url: siteUrl,
  },
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: `${siteUrl}/contact`,
  },
  offers: [
    {
      "@type": "Offer",
      name: "Web Development",
      description: "Custom web application development using Next.js, React, Laravel",
    },
    {
      "@type": "Offer",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile apps with React Native",
    },
    {
      "@type": "Offer",
      name: "AI Integration",
      description: "AI and machine learning integration for web and mobile applications",
    },
    {
      "@type": "Offer",
      name: "DevOps Services",
      description: "CI/CD, Docker, cloud deployment, and infrastructure management",
    },
  ],
});

// Review/Rating Schema (if you have testimonials)
export const getAggregateRatingSchema = (
  ratings: { rating: number; count: number }
) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Waleed Khalil",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: ratings.rating.toString(),
    reviewCount: ratings.count.toString(),
    bestRating: "5",
    worstRating: "1",
  },
});

// Helper function to generate JSON-LD script tag
export const generateJsonLd = (schema: any): string => {
  return JSON.stringify(schema);
};

// Combine multiple schemas for a page
export const combineSchemas = (...schemas: any[]) => {
  return schemas;
};
