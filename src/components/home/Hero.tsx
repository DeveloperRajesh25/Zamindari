"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { site } from "@/data/site";

const headline = ["An", "Heirloom", "of", "Andhra", "Flavours."];

export function Hero() {
  const reduce = useReducedMotion();

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0 -z-10">
        <ImageFallback
          src="/images/hero/bungalow-entrance.jpg"
          alt="Bronze statue figures flanking the wooden entrance doors of Zamindari Restaurant at dusk, with warm lights spilling from a colonial bungalow"
          fill
          priority
          sizes="100vw"
          imgClassName={
            reduce
              ? "object-cover opacity-10"
              : "object-cover opacity-10 animate-kenburns"
          }
          className="absolute inset-0"
        />
        {/* Left-to-right black gradient: heavy on the left, fading toward the right */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
          aria-hidden
        />
      </div>

      {/* Decorative right rail — editorial meta */}
      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 lg:flex flex-col items-center gap-4">
        <span className="h-16 w-px bg-gold/40" />
        <span className="rotate-90 whitespace-nowrap text-eyebrow text-gold/70 tracking-[0.32em]">
          Estd · Vizag
        </span>
        <span className="h-16 w-px bg-gold/40" />
      </div>

      {/* Top label */}
      <div className="pointer-events-none absolute left-0 right-0 top-28 mx-auto max-w-7xl px-6 lg:px-10 hidden lg:flex items-center gap-4">
        <span className="h-px w-10 bg-gold/60" />
        <span className="text-eyebrow text-gold/80 tracking-[0.28em]">
          Maharani Peta · Since the colonial era
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pb-20 lg:pb-28 pt-32">
        <div className="max-w-3xl">
          <motion.div
            className="mb-7 flex items-center gap-3"
            initial={reduce ? undefined : { opacity: 0, x: -12 }}
            animate={reduce ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <span className="h-px w-12 bg-gold" />
            <span className="text-eyebrow text-gold tracking-[0.24em]">
              Est. in a colonial bungalow
            </span>
          </motion.div>

          <motion.h1
            className="text-hero font-display font-medium text-cream"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
            initial={reduce ? undefined : "hidden"}
            animate={reduce ? undefined : "visible"}
            variants={
              reduce
                ? undefined
                : { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
            }
          >
            {headline.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden align-baseline pr-[0.25em]"
              >
                <motion.span
                  className="inline-block"
                  variants={reduce ? undefined : wordVariants}
                >
                  {i === 3 ? <em className="font-accent italic text-gold">{word}</em> : word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-8 max-w-2xl text-lg lg:text-xl text-zinc-300 font-body leading-relaxed"
            style={{ textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            Slow-cooked recipes from Telugu households, served inside a restored vintage
            bungalow that has fed Vizag for years.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
          >
            <Button href="/reservations" variant="gold" size="lg">
              Reserve a Table
            </Button>
            <Button href="/menu" variant="ghost" size="lg">
              Explore the Menu →
            </Button>
          </motion.div>

          <motion.div
            className="mt-14 flex flex-wrap items-center gap-6 text-cream/90 font-body"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <span className="flex items-center gap-2 text-gold">
              <Star size={16} fill="currentColor" />
              <span className="font-display text-lg leading-none">{site.rating.value}</span>
            </span>
            <span className="h-1 w-1 rounded-full bg-gold/60" />
            <span className="text-sm tracking-wide text-cream/80">
              {site.rating.count.toLocaleString()} reviews · Google
            </span>
            <span className="hidden sm:inline h-1 w-1 rounded-full bg-gold/60" />
            <span className="hidden sm:inline text-sm tracking-wide text-cream/80">
              All-day · 12:00 – 23:30
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-2 text-cream/60"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        aria-hidden
      >
        <span className="text-eyebrow tracking-[0.32em] text-gold/70">Scroll</span>
        <span className="relative block h-12 w-px overflow-hidden bg-cream/15">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={reduce ? undefined : { y: ["-100%", "200%"] }}
            transition={
              reduce
                ? undefined
                : { duration: 2.4, ease: "easeInOut", repeat: Infinity }
            }
          />
        </span>
      </motion.div>
    </section>
  );
}
