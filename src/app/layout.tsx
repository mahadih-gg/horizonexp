import CookieConsent from "@/components/global/CookieConsent";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import Provides from "@/components/providers";
import "@thinkflagship/web-shorts/dist/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SRL5B83B95';
const GA_SCRIPT_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

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

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a platform for creating and managing short-form video engagement campaigns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roobert.variable} antialiased`}>
        <SmoothScroll />
        <Provides>
          <header className="sticky top-0 z-50 backdrop-blur-2xl! bg-background/16">
            <Navbar />
          </header>
          {children}
          <Footer />
        </Provides>

        <CookieConsent />

        <Script
          src={GA_SCRIPT_URL}
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Set default consent mode - deny until user accepts
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              
              // Check for existing consent
              if (typeof window !== 'undefined') {
                const consent = localStorage.getItem('cookie-consent');
                if (consent === 'accepted') {
                  gtag('consent', 'update', {
                    'analytics_storage': 'granted'
                  });
                }
              }
              
              gtag('config', '${GA_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
