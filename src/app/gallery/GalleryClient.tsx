"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { cn } from "@/lib/utils";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  filter: "Interiors" | "Dishes" | "Outdoor" | "Moments";
};

const photos: Photo[] = [
  { src: "/images/ambiance/statues-entry.jpg", alt: "Bronze statue figures at the wooden entrance of the bungalow", caption: "Bronze keepers at the door.", filter: "Interiors" },
  { src: "/images/ambiance/interior-1.jpg", alt: "Vintage dining room interior with warm lamps and dark teak chairs", caption: "An evening table.", filter: "Interiors" },
  { src: "/images/ambiance/interior-2.jpg", alt: "Plated Andhra dish on a vintage Zamindari table", caption: "On the table.", filter: "Dishes" },
  { src: "/images/ambiance/private-dining.jpg", alt: "Private dining room with white linen and candlelight", caption: "The private room.", filter: "Interiors" },
  { src: "/images/ambiance/outdoor-seating.jpg", alt: "Outdoor seating beneath the tiled overhang surrounded by greenery", caption: "Under the tiles.", filter: "Outdoor" },
  { src: "/images/ambiance/tiled-roof.jpg", alt: "Terracotta-tiled overhang roof of the bungalow at golden hour", caption: "Terracotta and gold.", filter: "Outdoor" },
  { src: "/images/dishes/zamindari-kodi-kura.jpg", alt: "Zamindari Kodi Kura — chicken curry in burgundy gravy", caption: "Kodi Kura.", filter: "Dishes" },
  { src: "/images/dishes/mutton-nalli-biryani.jpg", alt: "Mutton Nalli Biryani in a copper handi", caption: "Nalli biryani.", filter: "Dishes" },
  { src: "/images/dishes/koramenu-fish.jpg", alt: "Banana-leaf wrapped grilled river fish", caption: "Koramenu, banana-leaf grilled.", filter: "Dishes" },
  { src: "/images/dishes/apricot-delight.jpg", alt: "Apricot Delight dessert with cream and pistachios", caption: "Apricot Delight.", filter: "Dishes" },
  { src: "/images/dishes/talvar-kebab.jpg", alt: "Char-grilled chicken kebab on a sword skewer", caption: "Sword kebabs.", filter: "Dishes" },
  { src: "/images/dishes/paya-shorba.jpg", alt: "Paya Shorba mutton-leg soup in brass bowl", caption: "Paya, peppered.", filter: "Dishes" },
  { src: "/images/dishes/crab-ghee-roast.jpg", alt: "Crab ghee roast in a dark masala", caption: "Crab Ghee Roast.", filter: "Dishes" },
  { src: "/images/dishes/ulavacharu-egg-biryani.jpg", alt: "Ulavacharu egg biryani in a copper bowl", caption: "Ulavacharu Egg Biryani.", filter: "Dishes" },
  { src: "/images/hero/bungalow-entrance.jpg", alt: "The bungalow entrance at dusk with warm lights", caption: "Dusk on Nowroji Road.", filter: "Outdoor" },
  { src: "/images/hero/interior-warm.jpg", alt: "Warm-lit interior corridor of the bungalow restaurant", caption: "A warm corridor.", filter: "Interiors" },
  { src: "/images/ambiance/moment-1.jpg", alt: "Guests sharing a meal at Zamindari", caption: "A shared meal.", filter: "Moments" },
  { src: "/images/ambiance/moment-2.jpg", alt: "Family moment over biryani on the verandah", caption: "On the verandah.", filter: "Moments" },
  { src: "/images/ambiance/moment-3.jpg", alt: "Evening service in the dining room with candlelight", caption: "Evening service.", filter: "Moments" },
  { src: "/images/ambiance/moment-4.jpg", alt: "Plated thali set for guests at a private celebration", caption: "A celebration plate.", filter: "Moments" },
];

const filters = ["All", "Interiors", "Dishes", "Outdoor", "Moments"] as const;
type Filter = (typeof filters)[number];

export function GalleryClient() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const filtered = useMemo(
    () => (filter === "All" ? photos : photos.filter((p) => p.filter === filter)),
    [filter],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
      if (e.key === "ArrowLeft")
        setOpenIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [openIndex, filtered.length]);

  const open = openIndex !== null ? filtered[openIndex] : null;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-md px-4 py-2 text-sm tracking-wide transition-colors",
              filter === f
                ? "bg-burgundy text-cream"
                : "bg-paper border border-line text-ink hover:border-gold",
            )}
            aria-pressed={filter === f}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-12 columns-2 lg:columns-3 gap-4 lg:gap-6 [column-fill:_balance]">
        {filtered.map((p, i) => (
          <button
            type="button"
            key={p.src}
            onClick={() => setOpenIndex(i)}
            className="group mb-4 lg:mb-6 block w-full break-inside-avoid overflow-hidden rounded-lg ring-1 ring-line bg-paper relative"
            style={{ aspectRatio: i % 5 === 0 ? "3 / 4" : i % 4 === 0 ? "4 / 5" : i % 3 === 0 ? "1 / 1" : "4 / 3" }}
            aria-label={`Open ${p.caption}`}
          >
            <ImageFallback
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="absolute inset-0"
              imgClassName="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="font-accent italic text-cream text-base">{p.caption}</span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-charcoal/95 flex items-center justify-center p-4 lg:p-10"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={open.caption}
          >
            <button
              type="button"
              className="absolute top-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/30 text-cream"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
              aria-label="Close gallery"
            >
              <X size={20} />
            </button>
            <button
              type="button"
              className="absolute left-4 lg:left-10 inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/30 text-cream hover:border-gold hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) =>
                  i === null ? null : (i - 1 + filtered.length) % filtered.length,
                );
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              type="button"
              className="absolute right-4 lg:right-10 inline-flex h-11 w-11 items-center justify-center rounded-md border border-cream/30 text-cream hover:border-gold hover:text-gold"
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex((i) => (i === null ? null : (i + 1) % filtered.length));
              }}
              aria-label="Next image"
            >
              <ChevronRight size={22} />
            </button>
            <motion.figure
              key={open.src}
              initial={reduce ? undefined : { opacity: 0, scale: 0.98 }}
              animate={reduce ? undefined : { opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageFallback
                src={open.src}
                alt={open.alt}
                fill
                sizes="100vw"
                className="absolute inset-0"
                imgClassName="object-contain"
              />
              <figcaption className="absolute inset-x-0 -bottom-12 text-center font-accent italic text-cream/85 text-lg">
                {open.caption}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
