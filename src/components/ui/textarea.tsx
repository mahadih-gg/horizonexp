import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-primary/10 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-2xl border bg-transparent px-5 py-3 text-xl transition-[color] outline-none aria-invalid:ring-destructive/20 aria-invalid:border-destructive disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
