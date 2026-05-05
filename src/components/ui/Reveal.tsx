"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { fadeUp, ease } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  threshold?: number;
  as?: "div" | "section" | "article" | "li" | "span";
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
  threshold = 0.2,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants: Variants = reduce
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
      };

  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={reduce ? undefined : variants}
    >
      {children}
    </Component>
  );
}

export function RevealStagger({
  children,
  className,
  delay = 0.08,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "ul";
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "visible"}
      viewport={{ once: true, amount: 0.15 }}
      variants={
        reduce
          ? undefined
          : {
              hidden: {},
              visible: { transition: { staggerChildren: delay } },
            }
      }
    >
      {children}
    </Component>
  );
}

export const fadeUpItem = fadeUp;
