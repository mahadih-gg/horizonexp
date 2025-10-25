"use client"

import { animate, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
}

const CounterAnimation = ({ from = 0, to, duration = 1.2, suffix = "" }: CounterProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [current, setCurrent] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCurrent(latest),
      });
      return controls.stop;
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className="text-black-gradient">
      {Number.isInteger(to) ? Math.round(current) : current.toFixed(1)}
      {suffix}
    </span>
  );
};

export default CounterAnimation;