import Link from "next/link";
import BrandLogo from "../svg/BrandLogo";
import { Button } from "../ui/button";

export const navLinks = [
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Demo",
    href: "/demo",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-5">
      <Link href="/">
        <BrandLogo />
      </Link>

      <div className="flex items-center gap-7">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-base 2xl:text-xl font-medium">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost">Login</Button>
        <Button>Start for free</Button>
      </div>
    </nav>
  );
};

export default Navbar;