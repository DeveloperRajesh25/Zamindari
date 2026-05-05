"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (paused || reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % reviews.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reduce]);

  const current = reviews[index];

  return (
    <section
      className="bg-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Guest reviews"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeading
          align="center"
          eyebrow="Loved by Guests"
          title={
            <>
              What 3,591+ Diners Have <br className="hidden md:inline" /> to Say.
            </>
          }
        />

        <div className="relative mt-14 mx-auto max-w-3xl min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={current.name + current.date}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-lg bg-paper border-l-[3px] border-l-gold border border-line shadow-paper p-8 lg:p-12"
            >
              <div className="flex items-center gap-1 text-gold mb-5" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <blockquote className="font-accent italic text-xl lg:text-2xl text-ink/85 leading-relaxed">
                “{current.quote}”
              </blockquote>
              <figcaption className="mt-7 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-ink/80">
                <span className="font-display text-lg text-ink">{current.name}</span>
                {current.role ? (
                  <span className="text-eyebrow text-burgundy">{current.role}</span>
                ) : null}
                <span className="text-sm text-ink/50">· {current.date}</span>
                <span className="ml-auto text-xs text-ink/50 tracking-wider uppercase">
                  via {current.source}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Choose a review">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-8 bg-gold" : "w-2 bg-ink/20 hover:bg-ink/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
