"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="container pt-page pb-section">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[120px] md:text-[180px] 2xl:text-[240px] font-medium leading-none text-primary-text tracking-[-0.04em]">
              404
            </h1>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl 2xl:text-6xl font-medium text-primary-text pt-6 md:pt-8 2xl:pt-10"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg 2xl:text-2xl text-primary-text text-center pt-4 md:pt-6 2xl:pt-8 pb-7 md:pb-[30px] 2xl:pb-10 font-medium leading-tight max-w-2xl"
          >
            The page you're looking for doesn't exist or has been moved.
            <br className="hidden md:block" />
            Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-3 md:gap-4 flex-wrap"
          >
            <Button asChild>
              <Link href="/">
                Go Home
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/demo">
                Visit Demo Sites
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;

