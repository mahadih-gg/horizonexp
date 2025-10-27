"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

const ConnectSection = ({ title, description }: Props) => {
  return (
    <section className="container py-section">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl 2xl:text-[76px] font-medium tracking-tight text-primary-text text-center">
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-lg 2xl:text-2xl text-primary-text text-center font-medium pt-8 pb-10">
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-4"
      >
        <Button asChild>
          <Link href="https://app.horizonexp.com/signup" target="_blank">
            Start for free
          </Link>
        </Button>

        <Button variant="secondary" asChild>
          <Link href="https://demo.horizonexp.com/" target="_blank">
            Visit demo sites
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ConnectSection;