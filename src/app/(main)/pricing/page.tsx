import ConnectSection from "@/components/common/ConnectSection";
import BreadcrumbSchema from "@/components/StructuredData/BreadcrumbSchema";
import FAQSchema from "@/components/StructuredData/FAQSchema";
import type { Metadata } from "next";
import FAQSection from "./components/faq";
import FeaturesSection from "./components/FeaturesSection";
import ForEnterpriseSection from "./components/ForEnterpriseSection";
import OnboardingSection from "./components/OnboardingSection";
import PricingSection from "./components/PricingSection";

const siteUrl = 'https://www.horizonexp.com';

export const metadata: Metadata = {
  applicationName: "Horizon",
  title: "Horizon Pricing | Short-form Video Engagement Platform",
  description: "Choose the perfect Horizon plan for your business. Start free with our starter plan or scale with enterprise solutions. Transparent pricing with no hidden fees.",
  keywords: [
    "horizon pricing",
    "video platform pricing",
    "short-form video pricing",
    "video engagement pricing",
    "enterprise video platform pricing",
    "video platform cost"
  ],
  alternates: {
    canonical: `${siteUrl}/pricing`,
  },
  openGraph: {
    title: "Horizon Pricing | Short-form Video Engagement Platform",
    description: "Choose the perfect Horizon plan for your business. Start free with our starter plan or scale with enterprise solutions.",
    url: `${siteUrl}/pricing`,
    siteName: "Horizon",
    images: [
      {
        url: `${siteUrl}/assets/images/opengraph.webp`,
        width: 1200,
        height: 630,
        alt: "Horizon Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon Pricing | Short-form Video Engagement Platform",
    description: "Choose the perfect Horizon plan for your business. Start free with our starter plan or scale with enterprise solutions.",
    images: [`${siteUrl}/assets/images/opengraph.webp`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqData = [
  {
    question: "Do you offer a free trial?",
    answer: "Yes, we offer a 30-day free trial of our Premium plan. Enjoy premium features of Horizon without any payment during the trial period."
  },
  {
    question: "Is Horizon worth the price?",
    answer: "Since implementing Horizon increases CTR, session times, and product/service discovery while reducing bounce rates dramatically - it is very much worth it. Short-form in general is a very high ROI format to drive conversion."
  },
  {
    question: "Do your plan prices include tax fees?",
    answer: "When subscribing to one of our paid plans, you only pay the listed price - there are no hidden fees."
  },
  {
    question: "What happens if my total view count grows beyond my current plan?",
    answer: "If you exceed the view limit on a paid plan, you can upgrade to a higher plan or overages will be billed at the next renewal. Service will not be interrupted."
  },
  {
    question: "How are views calculated?",
    answer: "Views are counted when a video is played for at least 3 seconds. This ensures we don't count accidental clicks or test runs."
  },
  {
    question: "What happens if I need to upload more or longer videos than my current plan allows?",
    answer: "We offer plans with higher upload limits and longer video lengths. If you need even higher limits, contact us and we may be able to help you with a customized plan."
  },
  {
    question: "How do I pay?",
    answer: "We accept all major credit cards. All payments are processed securely through Stripe."
  },
  {
    question: "How do I change my plan?",
    answer: "You can upgrade or downgrade your plan anytime from the Workspace & Billing section of the Horizon Console. Upgrades take effect immediately with prorated billing. Downgrades take effect at your next billing cycle."
  },
  {
    question: "What kind of support do I receive with Horizon?",
    answer: "All plans include email support with 24-48 hour response times."
  },
  {
    question: "Can I see a demo of Horizon?",
    answer: "Yes! Please visit our live demo websites. And you can also request a demo walkthrough by contacting us."
  }
];

const PricingPage = () => {
  const breadcrumbItems = [
    { name: "Home", url: siteUrl },
    { name: "Pricing", url: `${siteUrl}/pricing` }
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqData} />
      <main>
        <PricingSection />

        <FeaturesSection />

        <FAQSection />

        <OnboardingSection />

        <ForEnterpriseSection />

        <ConnectSection
          title={<>Start free. <br /> Launch short-form video today.</>}
          description="Pick a plan, paste the snippet, and go live in minutes."
        />
      </main>
    </>
  );
};

export default PricingPage;