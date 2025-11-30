import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import "@thinkflagship/horizon-web-shorts/styles.css";
import type { Metadata } from "next";

const siteUrl = 'https://www.horizonexp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Horizon Short-form Video Engagement Platform",
    template: "%s | Horizon"
  },
  description: "Skyrocket customer engagement, conversion, and retention with ultra-fast, shoppable short-form video experience",
  keywords: [
    "short-form video",
    "video engagement platform",
    "social commerce",
    "shoppable video",
    "video streaming",
    "video platform",
    "video engagement",
    "interactive video",
    "video monetization",
    "enterprise video platform",
    "video analytics",
    "video experience",
    "TikTok-style video",
    "Instagram Reels style",
    "video content management",
    "video CMS"
  ],
  authors: [{ name: "Horizon", url: siteUrl }],
  creator: "Flagship Technology Inc.",
  publisher: "Flagship Technology Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Horizon Short-form Video Engagement Platform",
    description: "Skyrocket customer engagement, conversion, and retention with ultra-fast, shoppable short-form video experience",
    url: siteUrl,
    siteName: "Horizon",
    images: [
      {
        url: `${siteUrl}/assets/optimized/opengraph-1200w.webp`,
        width: 1200,
        height: 630,
        alt: "Horizon Short-form Video Engagement Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Short-form Video Engagement Platform",
    description: "Bring immersive short-form video experience to your site, store, or app that supercharges discovery, engagement and sales.",
    images: [`${siteUrl}/assets/optimized/opengraph-1200w.webp`],
    creator: "@horizonera",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-2xl! bg-white/16">
        <Navbar />
      </header>
      {children}
      <Footer />
    </>
  );
}
