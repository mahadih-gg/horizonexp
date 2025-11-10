"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

interface TextRotateProps {
  words: string[]
  duration?: number
  className?: string
}

const TextRotate = ({
  words,
  duration = 2100,
  className
}: TextRotateProps) => {
  const [index, setIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Start animation after 2 second delay
    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, 2000)

    return () => clearTimeout(startTimeout)
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration, hasStarted])

  return (
    <div className={cn("overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: index === 0 ? 0 : 0.2,
              duration: 0.2,
              ease: "easeOut"
            }
          }}
          exit={{
            y: 40,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn"
            }
          }}
          className="text-grad-tertiary"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export { TextRotate }

