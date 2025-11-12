import CookieConsent from "@/components/global/CookieConsent";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import CloseIcon from "@/components/icons/close-icon";
import Provides from "@/components/providers";
import StructuredData from "@/components/StructuredData";
import "@thinkflagship/web-shorts/dist/styles.css";
import { CircleCheck } from "lucide-react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";

const roobert = localFont({
  src: [
    {
      path: "../../public/assets/font/roobert/RoobertLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertHeavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/assets/font/roobert/RoobertBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/assets/font/roobert/RoobertSemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-roobert",
  display: "swap",
});

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
    <html lang="en">
      <body className={`${roobert.variable} antialiased`}>
        <StructuredData />
        <SmoothScroll />
        <Provides>
          <header className="sticky top-0 z-50 backdrop-blur-2xl! bg-background/16">
            <Navbar />
          </header>
          {children}
          <Footer />
        </Provides>

        <CookieConsent />
        <Toaster
          position="bottom-right"
          toastOptions={{
            success: {
              icon: <CircleCheck className="min-w-fit size-5 2xl:size-6 text-[var(--toast-success-icon)]" />,
              iconTheme: {
                primary: 'var(--toast-success-icon)',
                secondary: '#fff',
              },
            },
            error: {
              icon: <CloseIcon className="min-w-fit size-5 2xl:size-6 text-[var(--toast-error-icon)]" />,
              iconTheme: {
                primary: 'var(--toast-error-icon)',
                secondary: '#fff',
              },
            },
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SRL5B83B95"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SRL5B83B95');
          `}
        </Script>
      </body>
    </html>
  );
}
