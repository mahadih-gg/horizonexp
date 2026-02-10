import { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string
  textClassName?: string
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean
  /**
   * Content to be displayed in the marquee (used when items is not provided)
   */
  children?: React.ReactNode
  /**
   * Text items to scroll in the marquee. When provided, renders a text marquee.
   */
  items?: string[]
  /**
   * Separator between text items (e.g. " • " or " — ")
   * @default " • "
   */
  separator?: string
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number
}

export function Marquee({
  className,
  textClassName,
  reverse = false,
  pauseOnHover = false,
  children,
  items,
  separator = " • ",
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const content = items ? (
    <span className="inline-flex items-center whitespace-nowrap [gap:var(--gap)]">
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center [gap:var(--gap)]">
          <span className={textClassName}>{item}</span>
          {i < items.length - 1 && <span className="opacity-70">{separator}</span>}
        </span>
      ))}
    </span>
  ) : (
    children
  )

  return (
    <div
      {...props}
      className={cn(
        "group flex [gap:var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              items && "whitespace-nowrap",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {content}
          </div>
        ))}
    </div>
  )
}
