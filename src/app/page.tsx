import React from "react";
import MainPage from "@/components/Home/MainPage";
import { Metadata } from "next";
import {
  generateMetadata,
  getOpenGraphTags,
  getTwitterTags,
} from "@/utils/seoConfig";
import Script from "next/script";
import { getWebPageSchema, getPortfolioSchema } from "@/utils/structuredData";
import { featuredProjects } from "@/utils/projectsData";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://waleedkhalil.vercel.app";

export const metadata: Metadata = {
  ...generateMetadata("home"),
  openGraph: getOpenGraphTags("home"),
  twitter: getTwitterTags("home"),
  alternates: {
    canonical: SITE_URL,
  },
};

export default function Home() {
  // Generate structured data for the home page
  const webPageSchema = getWebPageSchema(
    "Muhammad Waleed Khalil - Full-Stack Developer & AI Integration Specialist",
    "Full-Stack Developer portfolio showcasing expertise in Next.js, Laravel, MERN stack, React Native, and AI integration. 4+ years of experience building scalable SaaS, e-commerce, and government platforms.",
    "/",
    SITE_URL,
  );

  // Generate portfolio schema with featured projects
  const portfolioSchema = getPortfolioSchema(featuredProjects, SITE_URL);

  return (
    <>
      {/* Structured Data for Home Page */}
      <Script
        id="webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <MainPage />
    </>
  );
}
