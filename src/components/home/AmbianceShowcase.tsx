"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/utils";

const tiles: Array<{ src: string; alt: string; tilt: string; aspect: string }> = [
  {
    src: "/images/ambiance/interior-1.jpg",
    alt: "Warm-lit interior of Zamindari with vintage lamps and dark teak chairs",
    tilt: "-rotate-1",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/ambiance/statues-entry.jpg",
    alt: "Bronze statue figures flanking the wooden entrance doors of Zamindari",
    tilt: "rotate-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/ambiance/tiled-roof.jpg",
    alt: "Terracotta-tiled overhang roof of the colonial bungalow at golden hour",
    tilt: "-rotate-1",
    aspect: "aspect-[5/6]",
  },
  {
    src: "/images/ambiance/outdoor-seating.jpg",
    alt: "Outdoor seating beneath the tiled overhang surrounded by greenery",
    tilt: "rotate-1",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/ambiance/private-dining.jpg",
    alt: "Private dining room set with white linen and warm lighting",
    tilt: "-rotate-1",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/ambiance/interior-2.jpg",
    alt: "Plated Andhra dish in close-up on a vintage table at Zamindari",
    tilt: "rotate-1",
    aspect: "aspect-[5/6]",
  },
];

export function AmbianceShowcase() {
  const reduce = useReducedMotion();
  return (
    <section className="relative isolate overflow-hidden bg-charcoal text-cream">
      <span className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow tone="gold" className="mb-5 justify-center inline-flex">
            Inside the Bungalow
          </Eyebrow>
          <h2 className="text-h2 font-display text-cream">Step Inside the Bungalow.</h2>
          <p className="mt-4 font-accent italic text-cream/75 text-lg leading-relaxed">
            A few quiet corners, captured between services.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.src}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-lg ring-1 ring-cream/10 bg-charcoal",
                tile.aspect,
                tile.tilt,
                i % 2 === 0 ? "lg:translate-y-6" : "lg:-translate-y-3",
                "transition-transform duration-500 hover:rotate-0 hover:translate-y-0 hover:-translate-y-2",
              )}
            >
              <ImageFallback
                src={tile.src}
                alt={tile.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="absolute inset-0"
                imgClassName="object-cover"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/gallery"
            className="font-display text-lg text-gold gold-underline"
          >
            See the Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
