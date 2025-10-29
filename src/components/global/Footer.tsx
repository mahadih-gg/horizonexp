import { cn } from "@/lib/utils";
import { navLinks } from "@/navData";
import Link from "next/link";
import LinkedinIcon from "../icons/linkedin-icon";
import PinterestIcon from "../icons/pinterest-icon";
import TiktokIcon from "../icons/tiktok-icon";
import XIcon from "../icons/x-icon";
import YoutubeIcon from "../icons/youtube-icon";
import BrandLogo from "../svg/BrandLogo";

const socialLinks = [
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/horizon",
  },
  {
    icon: <XIcon />,
    label: "X",
    href: "https://www.x.com/horizon",
  },
  {
    icon: <YoutubeIcon />,
    label: "Youtube",
    href: "https://www.youtube.com/horizon",
  },
  {
    icon: <TiktokIcon />,
    label: "Tiktok",
    href: "https://www.tiktok.com/horizon",
  },
  {
    icon: <PinterestIcon />,
    label: "Pinterest",
    href: "https://www.pinterest.com/horizon",
  },
];

const Footer = () => {
  return (
    <footer className="bg-primary pt-20 md:pt-20 pb-[60px] md:pb-20">
      <div className='container text-white'>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0">
          <Link href="/">
            <BrandLogo variant="white" />
          </Link>

          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-7">
            <Link href="/" className="text-white text-base 2xl:text-lg">
              Home
            </Link>
            {navLinks?.map((link, index) => (
              <Link key={index} href={link.href} className="text-white text-base 2xl:text-lg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-0 py-10">
          <p className="text-white text-sm 2xl:text-lg">
            Backed by Cloudflare Workers Launchpad Program <br />
            All rights reserved by Flagship Technology Inc.
          </p>

          <SocialLinks className="hidden md:flex" />

        </div>
        <div className="flex items-center justify-start md:justify-between gap-5">
          <span className="text-white text-sm 2xl:text-lg"> &copy; {new Date().getFullYear()} Horizon.</span>
          <Link href="/privacy-policy" className="text-white text-sm 2xl:text-lg underline">Privacy Policy</Link>
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
        <Link key={index} href={link.href}>
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Footer;