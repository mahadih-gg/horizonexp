"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, MinusIcon, PlusIcon } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-primary/10", className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  iconType = 'chevron',
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  iconType?: 'chevron' | 'plus';
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 cursor-pointer rounded-md py-[22px] 2xl:py-[30px] md:py-6 text-left text-base md:text-lg 2xl:text-2xl font-medium transition-all outline-none disabled:pointer-events-none disabled:opacity-50",
          iconType === 'chevron' ? "[&[data-state=open]>svg]:rotate-180" : "[&[data-state=open]>div>svg:first-of-type]:opacity-0 [&[data-state=open]>div>svg:last-of-type]:opacity-100 [&[data-state=closed]>div>svg:first-of-type]:opacity-100 [&[data-state=closed]>div>svg:last-of-type]:opacity-0",
          className
        )}
        {...props}
      >
        {children}

        {
          iconType === 'chevron' ? (
            <ChevronDownIcon className="text-primary pointer-events-none size-4 md:size-5 2xl:size-6 shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <div className="relative shrink-0 size-4 md:size-5 2xl:size-6">
              <PlusIcon color="#98A1BC" className="text-primary pointer-events-none size-4 md:size-5 2xl:size-6 shrink-0 translate-y-0.5 transition-opacity duration-200 absolute inset-0 opacity-100" />
              <MinusIcon color="#98A1BC" className="text-primary pointer-events-none size-4 md:size-5 2xl:size-6 shrink-0 translate-y-0.5 transition-opacity duration-200 absolute inset-0 opacity-0" />
            </div>
          )
        }
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-primary-text text-base md:text-lg 2xl:text-2xl font-normal"
      {...props}
    >
      <div className={cn("pt-0 pb-[22px] 2xl:pb-[30px]", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }

