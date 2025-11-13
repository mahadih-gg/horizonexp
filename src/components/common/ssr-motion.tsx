// src/components/common/ssr-motion.tsx
"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type MotionProps,
} from "motion/react";
import * as React from "react";

type VariantName = "fade" | "slide-up" | "slide-right" | "slide-left" | "pop";

type BaseProps = {
  variant?: VariantName;
  once?: boolean;
  delay?: number;           // seconds
  duration?: number;        // seconds
  viewportAmount?: number;  // 0..1
};

type PolymorphicProps<E extends React.ElementType> = {
  as?: E;
} & Omit<React.ComponentPropsWithoutRef<E>, "as">;

/**
 * We rely on MotionProps instead of HTMLMotionProps<any>.
 * That keeps things generic (polymorphic `as`) without `any`.
 */
type SSRMotionProps<E extends React.ElementType> = PolymorphicProps<E> &
  BaseProps &
  // Allow standard MotionProps but let us redefine "transition" explicitly
  Omit<MotionProps, "transition"> & {
    transition?: MotionProps["transition"];
  };

// ---------- utils

const useMounted = () => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return mounted;
};

const preset = (name: VariantName, reduced: boolean) => {
  const hiddenCommon = { opacity: 0 };
  const visibleCommon = { opacity: 1 };

  switch (name) {
    case "fade":
      return { hidden: hiddenCommon, visible: visibleCommon };
    case "slide-up":
      return reduced
        ? { hidden: hiddenCommon, visible: visibleCommon }
        : { hidden: { ...hiddenCommon, y: 24 }, visible: { ...visibleCommon, y: 0 } };
    case "slide-right":
      return reduced
        ? { hidden: hiddenCommon, visible: visibleCommon }
        : { hidden: { ...hiddenCommon, x: -24 }, visible: { ...visibleCommon, x: 0 } };
    case "slide-left":
      return reduced
        ? { hidden: hiddenCommon, visible: visibleCommon }
        : { hidden: { ...hiddenCommon, x: 24 }, visible: { ...visibleCommon, x: 0 } };
    case "pop":
      return reduced
        ? { hidden: hiddenCommon, visible: visibleCommon }
        : { hidden: { ...hiddenCommon, scale: 0.96 }, visible: { ...visibleCommon, scale: 1 } };
  }
};

const mergeTransition = (
  duration?: number,
  delay?: number,
  base?: MotionProps["transition"]
): MotionProps["transition"] => ({
  duration: duration ?? 0.6,
  delay: delay ?? 0,
  ease: [0.22, 1, 0.36, 1],
  ...(base || {}),
});

// ---------- components

/**
 * SSRMotion
 * - Hooks are called on every render (no rules-of-hooks violations).
 * - Server: renders a plain element (no motion props) to avoid mismatch.
 * - Client: upgrades to motion element and applies motion props.
 */
export function SSRMotion<E extends React.ElementType = "div">(
  props: SSRMotionProps<E>
) {
  const {
    as,
    children,
    className,
    style,
    variant = "fade",
    once = true,
    delay,
    duration,
    viewportAmount = 0.2,
    // optional motion overrides
    initial,
    animate,
    whileInView,
    exit,
    variants,
    transition,
    ...rest
  } = props;

  const mounted = useMounted();
  const prefersReduced = useReducedMotion();
  const Component = (as || "div") as React.ElementType;

  // Always define to keep hook order stable
  const MotionComponent = React.useMemo(
    () => motion(Component as React.ComponentType),
    [Component]
  );

  const presetVariants = variants ?? preset(variant, !!prefersReduced);
  const finalTransition = mergeTransition(duration, delay, transition);

  const safeInitial = initial ?? "hidden";
  const safeAnimate = animate ?? undefined; // set animate="visible" for mount-time animation
  const safeWhileInView = whileInView ?? "visible";

  // Pick which element we render; types stay generic (no `any`)
  const Element: React.ElementType = mounted ? MotionComponent : Component;

  // Only pass motion props when mounted (otherwise they’d end up on DOM)
  const motionOnlyProps: Partial<MotionProps> & {
    viewport?: { once?: boolean; amount?: number };
  } = mounted
      ? {
        initial: safeInitial,
        animate: safeAnimate,
        whileInView: safeWhileInView,
        exit,
        variants: presetVariants,
        transition: finalTransition,
        viewport: { once, amount: viewportAmount },
      }
      : {};

  return (
    <Element className={className} style={style} {...motionOnlyProps} {...rest}>
      {children}
    </Element>
  );
}

/**
 * SSRStagger
 * - Staggers children with variants.
 * - Server: plain element; Client: motion wrapper.
 */
export function SSRStagger<E extends React.ElementType = "div">({
  as,
  children,
  delay = 0,
  stagger = 0.08,
  className,
  style,
  ...rest
}: PolymorphicProps<E> & {
  delay?: number;
  stagger?: number;
}) {
  const mounted = useMounted();
  const Component = (as || "div") as React.ElementType;
  const MotionComponent = React.useMemo(
    () => motion(Component as React.ComponentType),
    [Component]
  );
  const Element: React.ElementType = mounted ? MotionComponent : Component;

  const motionOnlyProps: Partial<MotionProps> & {
    viewport?: { once?: boolean; amount?: number };
  } = mounted
      ? {
        variants: {
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        },
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
      : {};

  return (
    <Element className={className} style={style} {...motionOnlyProps} {...rest}>
      {children}
    </Element>
  );
}

/**
 * SSRReveal
 * - Presence-based show/hide with simple fade (+y if motion allowed).
 */
export function SSRReveal({
  show,
  children,
  duration = 0.25,
  unmountOnExit = true,
}: {
  show: boolean;
  children: React.ReactNode;
  duration?: number;
  unmountOnExit?: boolean;
}) {
  const mounted = useMounted();
  const prefersReduced = useReducedMotion();

  // Hooks were already run; branching return is safe now.
  if (!mounted) {
    return show ? <div>{children}</div> : null;
  }

  const v = prefersReduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
      hidden: { opacity: 0, y: 8 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 8 },
    };

  return (
    <AnimatePresence initial={false}>
      {(show || !unmountOnExit) && (
        <motion.div
          key={show ? "on" : "off"}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={v}
          transition={{ duration }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
