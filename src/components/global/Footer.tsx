"use client"

import { cn } from "@/lib/utils";
import { navLinks } from "@/navData";
import { useFooterStore } from "@/store/footerStore";
import Link from "next/link";
import { useEffect, useRef } from "react";
import LinkedinIcon from "../icons/linkedin-icon";
import XIcon from "../icons/x-icon";
import YoutubeIcon from "../icons/youtube-icon";
import FooterLogo from "./FooterLogo";

const socialLinks = [
  {
    icon: <LinkedinIcon className="size-[24px] md:size-[18px] 2xl:size-[24px]" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/horizonera",
  },
  {
    icon: <XIcon className="size-[24px] md:size-[18px] 2xl:size-[24px]" />,
    label: "X",
    href: "https://x.com/horizonera",
  },
  {
    icon: <YoutubeIcon className="size-[24px] md:size-[18px] 2xl:size-[24px]" />,
    label: "Youtube",
    href: "https://www.youtube.com/@Thehorizonera",
  },
  // {
  //   icon: <TiktokIcon className="size-[24px] md:size-[18px] 2xl:size-[24px]" />,
  //   label: "Tiktok",
  //   href: "https://www.tiktok.com/@horizonexp.com",
  // },
  // {
  //   icon: <PinterestIcon />,
  //   label: "Pinterest",
  //   href: "https://www.pinterest.com/horizonexp",
  // },
];

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {

  const footerRef = useRef<HTMLElement>(null);
  const { isTouchingTop, setIsTouchingTop } = useFooterStore();

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the footer's top edge is at or above the viewport top
          // boundingClientRect.top <= 0 means the footer has scrolled past the top
          const isTouching = entry.boundingClientRect.top <= 0;
          setIsTouchingTop(isTouching);
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    // Also use scroll listener for more accurate detection
    const handleScroll = () => {
      if (!footer) return;
      const rect = footer.getBoundingClientRect();
      const isTouching = rect.top <= 0;
      setIsTouchingTop(isTouching);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    observer.observe(footer);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setIsTouchingTop]);

  return (
    <footer
      ref={footerRef}
      data-touching-top={isTouchingTop}
      className="bg-gradient-footer pt-[37px] md:pt-[150px] 2xl:pt-[200px] pb-[78px] 2xl:pb-[105px]"
    >
      <div className='container text-white'>
        <Link href="/">
          <FooterLogo />
        </Link>
        <div className="pt-[72px] md:pt-[150px] 2xl:pt-[200px] flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-0 sm:gap-[30px] lg:gap-[30px] 2xl:gap-[42px]">
            <Link href="/" className="text-white text-base 2xl:text-lg">
              Home
            </Link>
            {navLinks?.slice(0, -1)?.map((link, index) => (
              <Link key={index} href={link.href} className="text-white text-base 2xl:text-lg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10 md:gap-0 py-10">
          <p className="text-white text-sm 2xl:text-lg">
            Backed by Cloudflare Workers Launchpad Program <br />
            All rights reserved by Flagship Technology Inc.
          </p>

          <SocialLinks className="hidden md:flex" />

        </div>
        <div className="flex items-center justify-start md:justify-between gap-5">
          <span className="text-white text-sm 2xl:text-lg"> &copy; {CURRENT_YEAR} Horizon</span>
          <Link href="/privacy" className="text-white text-sm 2xl:text-lg underline">Privacy Policy</Link>
        </div>

        <div className="pt-10 flex md:hidden">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-5", className)}>
      {socialLinks.map((link, index) => (
        <Link key={index} href={link.href} target="_blank">
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Footer;