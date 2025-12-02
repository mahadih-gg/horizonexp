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

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center pb-[18px] md:pb-[30px] 2xl:pb-10 pointer-events-none">
      <motion.div
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 3, ease: "easeInOut" }}
        className="bg-white rounded-2xl 2xl:rounded-3xl py-4 px-5 md:py-[18px] md:px-[30px] 2xl:px-10 2xl:py-6 flex items-center gap-2 md:gap-3 max-w-[345px] md:max-w-[355px] 2xl:max-w-[460px] w-full pointer-events-auto"
        style={{
          boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <p className="text-sm 2xl:text-lg flex-1 text-left font-medium leading-tight">
          We use cookies to ensure the best user experience on our website.
        </p>
        <Button
          variant="default"
          onClick={handleAccept}
          className="flex-none px-[18px] 2xl:px-[25px] h-[25px] md:h-[25px] 2xl:h-[34px] text-sm 2xl:text-lg w-16 md:w-16 2xl:w-[85px]"
        >
          Allow
        </Button>
      </motion.div>
    </div>
  );
}

