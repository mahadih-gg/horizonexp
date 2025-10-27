"use client";

import { navLinks } from "@/navData";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import CloseIcon from "../icons/close-icon";
import MenuIcon from "../icons/menu-icon";
import RightIcon from "../icons/right-icon";
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

        <div className="hidden md:flex items-center justify-center gap-5 2xl:gap-7 pl-[18px] 2xl:pl-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-base 2xl:text-xl font-medium">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="https://app.horizonexp.com/login" target="_blank">
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="https://app.horizonexp.com/signup" target="_blank">
              Start for free
            </Link>
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-screen h-screen bg-primary/40 z-50"
            onClick={closeMobileMenu}
          >
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-background h-full w-[calc(100%-30px)] flex flex-col justify-between items-start py-5 px-8" onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full">
                <div className="relative flex items-center justify-end pb-9 mb-6 border-b border-primary/10">
                  <span className="absolute left-1/2 -translate-x-1/2!">
                    <BrandLogo />
                  </span>

                  <button className="text-primary-text text-2xl font-medium" onClick={closeMobileMenu}>
                    <CloseIcon />
                  </button>
                </div>
                <div className="w-full flex flex-col items-start justify-start gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div key={i}
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut", delay: i * 0.1 + 0.2 }}
                      className="w-full pointer-events-none"
                    >
                      <Link
                        href={link.href}
                        className="flex justify-between items-center text-primary-text text-2xl font-medium pointer-events-auto"
                        onClick={closeMobileMenu}
                      >
                        {link.label}

                        <RightIcon />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: navLinks.length * 0.1 }}
                className="w-full flex flex-col gap-8 border-t border-primary/10 py-5"
              >
                <Link
                  href="/login"
                  className="flex justify-between items-center text-primary-text text-2xl font-medium pointer-events-auto"
                  onClick={closeMobileMenu}
                >
                  Login
                  <RightIcon />
                </Link>

                <Link
                  href="https://app.horizonexp.com/signup"
                  target="_blank"
                  className="flex justify-between items-center text-primary-text text-2xl font-medium pointer-events-auto"
                  onClick={closeMobileMenu}
                >
                  Start for free
                  <RightIcon />
                </Link>

              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;