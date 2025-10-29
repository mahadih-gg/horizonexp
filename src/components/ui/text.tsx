import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        "hero-heading": "text-[56px] md:text-[72px] 2xl:text-[96px] font-medium leading-none text-primary-text tracking-[-0.04em]",
        "heading": "text-[48px] md:text-[56px] 2xl:text-[76px] font-medium leading-none text-primary-text tracking-[-0.04em]",
        "section-heading": "text-4xl md:text-[42px] 2xl:text-6xl font-medium tracking-tight text-primary-text",
        "section-subheading": "text-lg 2xl:text-2xl text-primary-text font-medium",
        "card-heading": "text-[28px] md:text-[30px] 2xl:text-5xl font-medium tracking-tight leading-none",
        "card-subheading": "text-lg md:text-base 2xl:text-xl text-primary-text font-medium",
        "top-label": "text-base 2xl:text-xl font-medium md:font-semibold text-black-gradient",
        "body": "text-base md:text-[15px] 2xl:text-xl text-primary-text",
      },
    },
    defaultVariants: {
      variant: "section-subheading",
    },
  }
)

function Text({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants>) {
  const getElement = (): keyof React.JSX.IntrinsicElements => {
    switch (variant) {
      case "hero-heading":
        return "h1"
      case "heading":
        return "h1"
      case "section-heading":
        return "h2"
      case "section-subheading":
        return "p"
      case "card-heading":
        return "h3"
      case "card-subheading":
        return "p"
      case "top-label":
        return "p"
      case "body":
        return "p"
      default:
        return "p"
    }
  }

  const Element = getElement()

  return React.createElement(
    Element,
    {
      "data-slot": "text",
      className: cn(textVariants({ variant, className })),
      ...props,
    },
    children
  )
}

export { Text, textVariants }

