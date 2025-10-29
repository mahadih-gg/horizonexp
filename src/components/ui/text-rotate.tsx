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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, duration)

    return () => clearInterval(interval)
  }, [words.length, duration])

  return (
    <div className={cn("overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 0.2,
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
          className="text-center text-grad-tertiary"
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  )
}

export { TextRotate }

