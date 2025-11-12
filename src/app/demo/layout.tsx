import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";
import type { Metadata } from "next";

const siteUrl = 'https://horizonexp.com';

export const metadata: Metadata = {
  title: "Horizon Demo | See Short-form Video in Action",
  description: "Experience Horizon's short-form video engagement platform with interactive demos for e-commerce, telecom, and sports industries. See how Horizon transforms engagement across industries.",
  keywords: [
    "horizon demo",
    "video platform demo",
    "short-form video demo",
    "interactive video demo",
    "video engagement demo",
    "e-commerce video demo",
    "telecom video demo",
    "sports video demo"
  ],
  alternates: {
    canonical: `${siteUrl}/demo`,
  },
  openGraph: {
    title: "Horizon Demo | See Short-form Video in Action",
    description: "Experience Horizon's short-form video engagement platform with interactive demos for e-commerce, telecom, and sports industries.",
    url: `${siteUrl}/demo`,
    siteName: "Horizon",
    images: [
      {
        url: `${siteUrl}/assets/images/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Horizon Demo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Demo | See Short-form Video in Action",
    description: "Experience Horizon's short-form video engagement platform with interactive demos for e-commerce, telecom, and sports industries.",
    images: [`${siteUrl}/assets/images/opengraph.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Demo", url: `${siteUrl}/demo` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      {children}
    </>
  );
}

