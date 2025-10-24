"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useState } from "react"

interface TextRotateProps {
  texts: string[]
  className?: string
}

const TextRotate = ({ texts, className }: TextRotateProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [texts.length])

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: "-100%" }}
        transition={{ duration: 0.35 }}
        className={cn("inline-block text-grad-tertiary pb-4 md:pb-6 2xl:pb-8", className)}
      >
        {texts[currentIndex]}
        {/* {texts[currentIndex].split("").map((char, index) => (
          <motion.span
            key={`${currentIndex}-${index}`}
            className="inline-block text-black/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03
            }}
            exit={{
              opacity: 1,
              y: -60,
              transition: { duration: 0.3, delay: 0 }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))} */}
      </motion.span>
    </AnimatePresence>
  )
}

export { TextRotate }

