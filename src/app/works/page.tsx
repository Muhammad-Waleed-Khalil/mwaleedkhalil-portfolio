import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Works from "@/components/Home/Works";
import { Metadata } from "next";
import {
  generateMetadata,
  getOpenGraphTags,
  getTwitterTags,
  SITE_URL,
} from "@/utils/seoConfig";
import Script from "next/script";
import {
  getWebPageSchema,
  getBreadcrumbSchema,
  getPortfolioSchema,
} from "@/utils/structuredData";
import { allProjects } from "@/utils/projectsData";

export const metadata: Metadata = {
  ...generateMetadata("works"),
  openGraph: getOpenGraphTags("works"),
  twitter: getTwitterTags("works"),
  alternates: {
    canonical: `${SITE_URL}/works`,
  },
};

function WorksPage() {
  // Generate structured data for the works page
  const webPageSchema = getWebPageSchema(
    "Portfolio Projects - Muhammad Waleed Khalil",
    "Explore portfolio projects including MOC-PULSE AI Interview System, PMRU Government Dashboard, IntelliDelve SaaS, and e-commerce platforms built with Next.js, Laravel, and React.",
    "/works",
    SITE_URL,
  );

  // Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/works" },
    ],
    SITE_URL,
  );

  // Portfolio schema with all projects
  const portfolioSchema = getPortfolioSchema(allProjects, SITE_URL);

  return (
    <>
      {/* Structured Data for Works Page */}
      <Script
        id="works-webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <Script
        id="works-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="works-portfolio-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <div className="px-[6vw]">
        <Navbar />
        <main className="min-h-screen">
          <div className="py-[10vh]">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Featured Projects
            </h1>
            <p className="text-lg md:text-xl opacity-80 mb-8 max-w-3xl">
              Explore my portfolio of full-stack applications, AI systems, and
              mobile solutions built with modern technologies including Next.js,
              Laravel, React, and React Native.
            </p>
          </div>
          <Works />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default WorksPage;
