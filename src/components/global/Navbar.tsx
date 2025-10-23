"use client";

import { navLinks } from "@/navData";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../icons/menu-icon";
import BrandLogo from "../svg/BrandLogo";
import { Button } from "../ui/button";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="container flex items-center justify-between py-3 md:py-4 2xl:py-5">

        <div className="flex items-center justify-start">
          <button className="inline-block md:hidden mr-4" onClick={toggleMobileMenu}>
            <MenuIcon />
          </button>

          <Link href="/">
            <BrandLogo />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-5 2xl:gap-7">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base 2xl:text-xl font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost">Login</Button>
          <Button>Start for free</Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-background/10 backdrop-blur-sm! z-50"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-background h-full w-2/3" onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4">
                <BrandLogo />

                <button className="text-primary-text text-2xl font-medium" onClick={closeMobileMenu}>
                  X
                </button>
              </div>
              <div className="flex flex-col items-start justify-start p-4">
                {navLinks.map((link, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.1 }}
                  >
                    <Link href={link.href} className="text-primary-text text-2xl font-medium py-4 block">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut", delay: navLinks.length * 0.1 }}
                  className="flex flex-col gap-2"
                >
                  <Button variant="ghost">Login</Button>
                  <Button>Start for free</Button>
                </motion.div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;