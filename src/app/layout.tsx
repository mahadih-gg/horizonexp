import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import SmoothScroll from "@/components/global/SmoothScroll";
import Provides from "@/components/providers";
import "@thinkflagship/web-shorts/dist/styles.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
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
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </Provides>
      </body>
    </html>
  );
}
