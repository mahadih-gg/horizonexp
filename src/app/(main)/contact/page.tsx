import ConnectSection from "@/components/common/ConnectSection";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";
import type { Metadata } from "next";
import ContactSection from "./components/ContactSection";
import GetDemoSection from "./components/GetDemoSection";

const siteUrl = 'https://www.horizonexp.com';

export const metadata: Metadata = {
  title: "Contact Horizon | Get in Touch with Our Team",
  description: "Contact the Horizon team to learn more about our short-form video engagement platform. Get help with implementation, pricing, or enterprise solutions.",
  keywords: [
    "contact horizon",
    "horizon support",
    "video platform contact",
    "horizon sales",
    "enterprise video platform contact"
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Horizon | Get in Touch with Our Team",
    description: "Contact the Horizon team to learn more about our short-form video engagement platform. Get help with implementation, pricing, or enterprise solutions.",
    url: `${siteUrl}/contact`,
    siteName: "Horizon",
    images: [
      {
        url: `${siteUrl}/assets/images/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Contact Horizon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Horizon | Get in Touch with Our Team",
    description: "Contact the Horizon team to learn more about our short-form video engagement platform.",
    images: [`${siteUrl}/assets/images/opengraph.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const ContactPage = () => {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Contact", url: `${siteUrl}/contact` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <main>

        <GetDemoSection />

        <ContactSection />

        <ConnectSection
          title={<>Bring the short-form <br /> magic to your own site.</>}
          description={<>Go from static pages to a scroll-stopping video feed that drives <br /> engagement, discovery, and conversion.</>}
          cta={{
            primary: {
              label: "Start for free",
              href: "https://app.horizonexp.com/signup",
              target: "_blank",
              variant: "default",
              visible: true,
            },
            secondary: {
              label: "Get a demo",
              href: "/contact",
              variant: "secondary",
              visible: false,
            },
          }}
        />
      </main>
    </>
  );
};

export default ContactPage;