import React from "react";
import Intro from "@/components/About/Intro";
import AboutMe from "@/components/About/AboutMe";
import MoreDetail from "@/components/About/MoreDetail";
import Resume from "@/components/About/Resume";
import Mockups from "@/components/About/Mockups";
import Closing from "@/components/About/Closing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import {
  generateMetadata,
  getOpenGraphTags,
  getTwitterTags,
  SITE_URL,
} from "@/utils/seoConfig";
import Script from "next/script";
import { getWebPageSchema, getBreadcrumbSchema } from "@/utils/structuredData";

export const metadata: Metadata = {
  ...generateMetadata("about"),
  openGraph: getOpenGraphTags("about"),
  twitter: getTwitterTags("about"),
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
};

function About() {
  // Generate structured data for the about page
  const webPageSchema = getWebPageSchema(
    "About Muhammad Waleed Khalil - Full-Stack Developer",
    "Learn about Muhammad Waleed Khalil, a full-stack developer with 4+ years of experience specializing in Laravel, MERN, Next.js, and AI integration. Based in Islamabad, Pakistan.",
    "/about",
    SITE_URL,
  );

  // Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
    SITE_URL,
  );

  return (
    <>
      {/* Structured Data for About Page */}
      <Script
        id="about-webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <div className="px-[6vw]">
        <Navbar />
        <main>
          <Intro />
          <AboutMe />
          <MoreDetail />
          <Resume />
          <Mockups />
          <Closing />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default About;
