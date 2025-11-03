import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T | null>;
  inView: boolean;
  hasTriggered: boolean;
}

export const useInView = <T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> => {
  const {
    threshold = 0.3,
    rootMargin = "0px 0px -100px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;

          if (isIntersecting && !hasTriggered) {
            setInView(true);
            setHasTriggered(true);
          } else if (!triggerOnce && !isIntersecting) {
            setInView(false);
          } else if (triggerOnce && isIntersecting && hasTriggered) {
            setInView(true);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  return {
    ref,
    inView,
    hasTriggered,
  };
};
