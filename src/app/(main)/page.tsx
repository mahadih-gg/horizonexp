import ConnectSection from "@/components/common/ConnectSection";
import type { Metadata } from "next";
import DemoSlider from "./components/DemoSlider";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import HorizonImpactSection from "./components/HorizonImpactSection";
import LaunchHorizonSection from "./components/LaunchHorizonSection";

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
        url: `${siteUrl}/assets/images/opengraph.webp`,
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
    images: [`${siteUrl}/assets/images/opengraph.webp`],
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
      <HorizonImpactSection />
      {/* <EngageMoreSection /> */}
      {/* <SeeHorizonSection /> */}
      {/* <PowerYourMobileSection /> */}
      <DemoSlider />
      {/* <ShortFormBenefitsSection /> */}
      <FeaturesSection />
      {/* <WhyHorizonSection /> */}
      {/* <ReviewsSection /> */}
      {/* <HorizonForEnterpriseSection /> */}
      <LaunchHorizonSection />
      <ConnectSection
        title={<>Ready to launch your short-form video feed?</>}
        description="Turn your existing videos into a swipe-native, TikTok-grade experience that lifts engagement and conversion."
      />
    </main>
  );
}
