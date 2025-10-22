import Link from "next/link";
import LinkedinIcon from "../icons/linkedin-icon";
import PinterestIcon from "../icons/pinterest-icon";
import TiktokIcon from "../icons/tiktok-icon";
import XIcon from "../icons/x-icon";
import YoutubeIcon from "../icons/youtube-icon";
import BrandLogo from "../svg/BrandLogo";
import { navLinks } from "./Navbar";

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
    <footer className="bg-primary py-20">
      <div className='container text-white'>
        <div className="flex items-center justify-between">
          <Link href="/">
            <BrandLogo variant="white" />
          </Link>

          <div className="flex items-center gap-7">
            {navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white text-lg">
                {link.label}
              </Link>
            ))}
          </div>

        </div>
        <div className="flex items-center justify-between py-10">
          <p className="text-white text-lg">
            Backed by Cloudflare Workers Launchpad Program <br />
            All rights reserved by Flagship Technology Inc.
          </p>

          <div className="flex items-center gap-5">
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-white text-lg">
                {link.icon}
              </Link>
            ))}
          </div>

        </div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-white text-lg"> &copy; {new Date().getFullYear()} Horizon.</span>
          <Link href="/privacy-policy" className="text-white text-lg underline">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;