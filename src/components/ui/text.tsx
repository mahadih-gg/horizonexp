import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        "section-heading": "text-4xl md:text-[42px] 2xl:text-6xl font-medium tracking-tight text-primary-text",
        "section-subheading": "text-lg 2xl:text-2xl text-primary-text",
        "card-heading": "text-[28px] md:text-[30px] 2xl:text-5xl font-medium tracking-tight",
        "card-subheading": "text-base 2xl:text-xl text-primary-text",
        "top-label": "text-base 2xl:text-xl font-semibold text-primary-text",
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
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & {
    asChild?: boolean
  }) {
  const getElement = (): keyof React.JSX.IntrinsicElements => {
    switch (variant) {
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

