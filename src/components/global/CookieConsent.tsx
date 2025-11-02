"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date | Record<string, unknown>,
      config?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

const COOKIE_CONSENT_KEY = "cookie-consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);

    // Reload to initialize Google Analytics with consent
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);

    // Revoke consent for Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center pb-[18px] md:pb-[30px] 2xl:pb-10 pointer-events-none">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
        className="bg-white rounded-2xl 2xl:rounded-3xl py-4 px-5 md:py-[18px] md:px-[30px] 2xl:px-10 2xl:py-6 flex items-center gap-4 md:gap-6 max-w-[344px] md:max-w-[345px] 2xl:max-w-[460px] w-full pointer-events-auto"
        style={{
          boxShadow: "5px 15px 20px 0px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p className="text-xs md:text-[10px] 2xl:text-sm flex-1 text-center md:text-left font-medium">
          We use cookies to ensure that we give you the best experience on our website.
        </p>
        <Button
          variant="default"
          onClick={handleAccept}
          className="flex-none px-[18px] 2xl:px-6 h-7 md:h-6 2xl:h-[34px] text-xs md:text-[10px] 2xl:text-sm"
        >
          Allow
        </Button>
      </motion.div>
    </div>
  );
}

