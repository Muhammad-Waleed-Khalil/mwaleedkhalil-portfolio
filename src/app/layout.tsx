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
  process.env.NEXT_PUBLIC_SITE_URL || "https://waleedkhalil.vercel.app";

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
  icons: {
    icon: [
      { url: "/Adobe Express - file.png?v=1", sizes: "any" },
      { url: "/Adobe Express - file.png?v=1", sizes: "16x16", type: "image/png" },
      { url: "/Adobe Express - file.png?v=1", sizes: "32x32", type: "image/png" },
      { url: "/Adobe Express - file.png?v=1", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/Adobe Express - file.png?v=1", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [
      { url: "/Adobe Express - file.png?v=1", sizes: "any" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "google-site-verification-code-here",
    // Add your Google Search Console verification code after setting up
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
        
        {/* Favicon with cache busting */}
        <link rel="icon" type="image/png" href="/Adobe Express - file.png?v=1" />
        <link rel="shortcut icon" type="image/png" href="/Adobe Express - file.png?v=1" />
        <link rel="apple-touch-icon" href="/Adobe Express - file.png?v=1" />
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
