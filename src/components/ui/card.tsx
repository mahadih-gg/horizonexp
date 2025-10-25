"use client"

import * as React from "react";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Text } from "./text";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-secondary text-background flex flex-col gap-6 rounded-3xl md:rounded-2xl 2xl:rounded-3xl p-10",
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
  extraContent?: React.ReactNode;
};

function CardHeader({ title, description, topLabel, centered = true, className, icon, extraContent }: CardHeaderProps) {
  return (
    <div className={cn('text-left', centered && 'text-center', className)}>
      {
        icon && (
          <div className="pb-3 2xl:pb-4">
            {icon}
          </div>
        )
      }
      {
        topLabel && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          // viewport={{ once: true, amount: 0.8 }}
          >
            <Text variant="top-label" className='pb-3 2xl:pb-4'>
              {topLabel}
            </Text>
          </motion.div>
        )
      }

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Text variant="card-heading">
          {title}
        </Text>
      </motion.div>
      {
        description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Text variant="card-subheading" className='pt-3 2xl:pt-4'>
              {description}
            </Text>
          </motion.div>
        )
      }
      {
        extraContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="pt-4 2xl:pt-6">
              {extraContent}
            </div>
          </motion.div>
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

