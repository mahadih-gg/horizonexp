"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
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

  useEffect(() => {
    const word = words[index] || words[0];
    setCurrentWord(word);
  }, [index])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentWord}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          // type: "spring",
          // stiffness: 100,
          // damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -5,
          x: 5,
          filter: "blur(1px)",
          scale: 1.02,
        }}
        className={cn(
          "z-10 inline-block relative text-center text-foreground px-2",
          className
        )}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block text-black-gradient px-px"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
