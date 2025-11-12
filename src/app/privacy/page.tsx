import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";
import type { Metadata } from "next";
import PrivacySection from "./components/PrivacySection";

const siteUrl = 'https://www.horizonexp.com';

export const metadata: Metadata = {
  title: "Horizon Privacy Policy | Data Protection & Privacy",
  description: "Read Horizon's privacy policy to understand how we collect, use, and protect your data. Learn about our commitment to data privacy and security.",
  keywords: [
    "horizon privacy policy",
    "horizon data protection",
    "video platform privacy",
    "horizon GDPR",
    "data privacy"
  ],
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: "Horizon Privacy Policy | Data Protection & Privacy",
    description: "Read Horizon's privacy policy to understand how we collect, use, and protect your data.",
    url: `${siteUrl}/privacy`,
    siteName: "Horizon",
    images: [
      {
        url: `${siteUrl}/assets/optimized/opengraph-1200w.webp`,
        width: 1200,
        height: 630,
        alt: "Horizon Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Privacy Policy | Data Protection & Privacy",
    description: "Read Horizon's privacy policy to understand how we collect, use, and protect your data.",
    images: [`${siteUrl}/assets/optimized/opengraph-1200w.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const PrivacyPage = () => {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Privacy Policy", url: `${siteUrl}/privacy` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>
        <PrivacySection />
      </main>
    </>
  );
};

export default PrivacyPage;

