import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const textVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        "section-heading": "text-6xl font-medium tracking-tight",
        "section-subheading": "text-lg text-muted-foreground",
        "card-heading": "text-xl font-semibold tracking-tight",
        "card-subheading": "text-sm text-muted-foreground",
        "top-label": "text-xs font-medium text-muted-foreground uppercase tracking-wide",
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

