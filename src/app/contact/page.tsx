import MainPage from "@/components/Contact/MainPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
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
  ...generateMetadata("contact"),
  openGraph: getOpenGraphTags("contact"),
  twitter: getTwitterTags("contact"),
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

function Contact() {
  // Generate structured data for the contact page
  const webPageSchema = getWebPageSchema(
    "Contact Muhammad Waleed Khalil - Full-Stack Developer",
    "Get in touch with Muhammad Waleed Khalil for full-stack development, AI integration, mobile app development, and DevOps services. Available for freelance and full-time work.",
    "/contact",
    SITE_URL,
  );

  // Breadcrumb schema
  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
    SITE_URL,
  );

  // Contact Point Schema
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Person",
      name: "Muhammad Waleed Khalil",
      email: "mwaleedkhalil@gmail.com",
      telephone: "+92-319-9648331",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-319-9648331",
        contactType: "Customer Service",
        email: "mwaleedkhalil@gmail.com",
        availableLanguage: ["English", "Urdu"],
        areaServed: "Worldwide",
      },
    },
  };

  return (
    <>
      {/* Structured Data for Contact Page */}
      <Script
        id="contact-webpage-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="contact-point-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
      <div className="px-[6vw]">
        <Navbar />
        <main>
          <MainPage />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
