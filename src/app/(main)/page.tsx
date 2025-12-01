import ConnectSection from "@/components/common/ConnectSection";
import type { Metadata } from "next";
import DemoSlider from "./components/DemoSlider";
import EverythingYouNeedSection from "./components/EverythingYouNeedSection";
import Hero from "./components/Hero";
import HorizonForEnterpriseSection from "./components/HorizonForEnterpriseSection";
import HorizonImpactSection from "./components/HorizonImpactSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";
import PowerYourMobileSection from "./components/PowerYourMobileSection";
import WhyHorizonSection from "./components/WhyHorizonSection";

const siteUrl = 'https://www.horizonexp.com';

export const metadata: Metadata = {
  title: "Horizon Short-form Video Engagement Platform",
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
    "video CMS",
    "short video platform",
    "video feed",
    "video player",
    "video engagement tool",
    "social video platform",
    "e-commerce video",
    "shoppable content",
    "video marketing",
    "video advertising platform"
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Horizon Short-form Video Engagement Platform",
    description: "Bring immersive short-form video experience to your site, store, or app that supercharges discovery, engagement and sales.",
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
};

export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <EngageMoreSection /> */}
      {/* <SeeHorizonSection /> */}
      <PowerYourMobileSection />
      <DemoSlider />
      <EverythingYouNeedSection />
      <HorizonImpactSection />
      <WhyHorizonSection />
      {/* <ReviewsSection /> */}
      <HorizonForEnterpriseSection />
      <LaunchHorizonSection />
      <ConnectSection
        title={<>Start free today.</>}
        description="Join the new generation of brands turning attention into sales with short-form engagement."
      />
    </main>
  );
}
