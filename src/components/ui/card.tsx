import * as React from "react";

import { cn } from "@/lib/utils";
import { Text } from "./text";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-secondary text-background flex flex-col gap-6 rounded-3xl border p-10",
        className
      )}
      {...props}
    />
  )
}

type CardHeaderProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  topLabel?: string | React.ReactNode;
  centered?: boolean;
  className?: string;
  icon?: React.ReactNode;
};

function CardHeader({ title, description, topLabel, centered = true, className, icon }: CardHeaderProps) {
  return (
    <div className={cn('text-left', centered && 'text-center', className)}>
      {
        icon && (
          <div className="pb-4">
            {icon}
          </div>
        )
      }
      {
        topLabel && (
          <Text variant="top-label" className='pb-4'>
            {topLabel}
          </Text>
        )
      }
      <Text variant="card-heading">
        {title}
      </Text>
      {
        description && (
          <Text variant="card-subheading" className='pt-4'>
            {description}
          </Text>
        )
      }
    </div>
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
};

