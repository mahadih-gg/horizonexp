"use client";

import { Button } from "@/components/ui/button";
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
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none">
      <div className="bg-white rounded-2xl 2xl:rounded-3xl shadow-lg py-4 px-10 md:py-6 lg:px-20 flex flex-col md:flex-row items-center gap-4 md:gap-6 max-w-4xl w-full pointer-events-auto">
        <p className="text-base md:text-base lg:text-xl flex-1 text-center md:text-left font-medium">
          We use cookies to ensure that we give you the best experience on our website.
        </p>
        <div className="flex gap-3 md:gap-4 w-full md:w-auto">
          <Button
            variant="secondary"
            onClick={handleReject}
            className="flex-1 md:flex-none px-5 2xl:px-10"
          >
            Reject
          </Button>
          <Button
            variant="default"
            onClick={handleAccept}
            className="flex-1 md:flex-none px-5 2xl:px-10"
          >
            Allow
          </Button>
        </div>
      </div>
    </div>
  );
}

