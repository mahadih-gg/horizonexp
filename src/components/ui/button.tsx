import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm md:text-base 2xl:text-xl font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none",
  {
    variants: {
      variant: {
        // default: "bg-primary text-primary-foreground hover:bg-primary/90",
        default: "shine-hover bg-primary text-primary-foreground hover:-translate-y-1! transition duration-300 ease-in-out",
        destructive: "bg-destructive text-primary-foreground hover:bg-destructive/90",
        outline: "border border-primary bg-background shadow-xs hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[46px] md:h-10 2xl:h-[54px] px-[18px] 2xl:px-6",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]

