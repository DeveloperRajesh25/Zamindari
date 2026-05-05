"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
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
    <section className="relative isolate flex min-h-[90vh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0 -z-10">
        <ImageFallback
          src="/images/hero/bungalow-entrance.jpg"
          alt="Bronze statue figures flanking the wooden entrance doors of Zamindari Restaurant at dusk, with warm lights spilling from a colonial bungalow"
          fill
          priority
          sizes="100vw"
          imgClassName={reduce ? "object-cover" : "object-cover animate-kenburns"}
          className="absolute inset-0"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-burgundy/40 to-burgundy/10"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-charcoal/40 to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10 pb-16 lg:pb-24 pt-32">
        <div className="max-w-3xl">
          <Eyebrow tone="gold" className="mb-6">
            Est. in a colonial bungalow · Maharani Peta
          </Eyebrow>

          <motion.h1
            className="text-hero font-display font-medium text-cream"
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
                  {word}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg lg:text-xl text-cream/85 font-body leading-relaxed"
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
            className="mt-12 flex items-center gap-3 text-cream/85 font-body"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.0 }}
          >
            <span className="flex items-center gap-1 text-gold">
              <Star size={16} fill="currentColor" /> {site.rating.value}
            </span>
            <span className="h-1 w-1 rounded-full bg-cream/40" />
            <span className="text-sm tracking-wide">
              {site.rating.count.toLocaleString()} reviews on Google
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
