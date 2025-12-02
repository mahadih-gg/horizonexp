"use client"

import { motion } from "motion/react";
import Link from "next/link";
import { Button, type ButtonVariant } from "../ui/button";

type Props = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  cta?: {
    primary?: {
      label: string;
      href: string;
      target?: string;
      variant?: ButtonVariant;
    };
    secondary?: {
      label: string;
      href: string;
      target?: string;
      variant?: ButtonVariant;
    };
  };
}

const defaultCta = {
  primary: {
    label: "Start for free",
    href: "https://app.horizonexp.com/signup",
    target: "_blank",
    variant: "default",
  },
  secondary: {
    label: "Visit demo sites",
    href: "/demo",
    target: undefined,
    variant: "secondary",
  },
};

const ConnectSection = ({ title, description, cta = defaultCta as Props["cta"] }: Props) => {
  const primary = cta?.primary || defaultCta.primary;
  const secondary = cta?.secondary || defaultCta.secondary;
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
        <Button variant={primary.variant as ButtonVariant} asChild>
          <Link href={primary.href} target={primary.target as string}>
            {primary.label}
          </Link>
        </Button>

        <Button variant={secondary.variant as ButtonVariant} asChild>
          <Link href={secondary.href} target={secondary.target as string}>
            {secondary.label}
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ConnectSection;