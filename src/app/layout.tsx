import type { Metadata } from "next";
import { satoshiRegular } from "@/fonts/font";
import { Provider } from "@/components/Provider";
import "./globals.css";
import LenisScroll from "@/components/LenisScroll";
import Scroll from "@/components/Scroll";
import Script from "next/script";
import { getPersonSchema, getOrganizationSchema } from "@/utils/structuredData";
import ContentProtection from "@/components/ContentProtection";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mwaleedkhalil.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Muhammad Waleed Khalil | Full-Stack Developer & AI Integration Specialist",
    template: "%s | Muhammad Waleed Khalil",
  },
  description:
    "Full-Stack Developer with 4+ years experience in Next.js, React, Laravel, and AI integration. Building scalable SaaS, e-commerce, and mobile solutions in Islamabad, Pakistan.",
  keywords: [
    "full-stack developer",
    "Next.js developer",
    "React developer",
    "Laravel developer",
    "MERN stack developer",
    "AI integration specialist",
    "software engineer Pakistan",
    "web developer Islamabad",
    "React Native developer",
    "Node.js developer",
    "TypeScript developer",
    "PHP developer",
    "JavaScript developer",
    "freelance developer Pakistan",
    "Muhammad Waleed Khalil",
    "portfolio",
    "web development",
    "mobile app development",
    "AI systems",
    "SaaS platforms",
    "e-commerce development",
  ],
  authors: [
    {
      name: "Muhammad Waleed Khalil",
      url: SITE_URL,
    },
  ],
  creator: "Muhammad Waleed Khalil",
  publisher: "Muhammad Waleed Khalil",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Muhammad Waleed Khalil - Full-Stack Developer",
    title:
      "Muhammad Waleed Khalil | Full-Stack Developer & AI Integration Specialist",
    description:
      "Building scalable, AI-enhanced web and mobile applications with Laravel, Next.js, React, and MERN stack. Available for freelance and full-time opportunities.",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Muhammad Waleed Khalil - Full-Stack Developer & AI Integration Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Muhammad Waleed Khalil | Full-Stack Developer & AI Integration Specialist",
    description:
      "Building scalable, AI-enhanced web and mobile applications. Specializing in Next.js, Laravel, React, and AI integration.",
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: "@mwaleedkhalil",
    site: "@mwaleedkhalil",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": "d9f163e4ef1c27f0",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "d9f163e4ef1c27f0",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate structured data
  const personSchema = getPersonSchema(SITE_URL);
  const organizationSchema = getOrganizationSchema(SITE_URL);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data - Person Schema */}
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        {/* Structured Data - Organization Schema */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        
        {/* Favicon - Google Search compliant (favicon.ico served automatically by App Router from src/app/favicon.ico) */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${satoshiRegular.className} scrollbar scrollLight dark:scrollDark duration-300 bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText`}
        suppressHydrationWarning
      >
        <LenisScroll>
          {/* GSAP SCROLLTRIGGER */}
          <Scroll>
            {/* ENABLES DARK AND LIGHT MODE */}
            <Provider>
              {/* CONTENT PROTECTION */}
              <ContentProtection />
              <div>{children}</div>
            </Provider>
          </Scroll>
        </LenisScroll>
      </body>
    </html>
  );
}
