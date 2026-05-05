import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GalleryClient } from "./GalleryClient";
import { GoldFlourish } from "@/components/ui/ElephantMark";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look inside Zamindari Restaurant — the colonial bungalow, our private dining room, outdoor seating, and a few of the dishes guests come back for.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Eyebrow className="mb-5 inline-flex justify-center">A Look Inside</Eyebrow>
          <h1 className="text-h1 font-display text-ink">Through Our Doors.</h1>
          <p className="mt-5 mx-auto max-w-2xl font-accent italic text-ink/70 text-lg lg:text-xl">
            A few photographs from across the bungalow — interiors, plates, and
            quiet moments between services.
          </p>
          <GoldFlourish className="mx-auto mt-7 w-44" />
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <GalleryClient />
        </div>
      </section>

      <section className="bg-burgundy text-cream">
        <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 text-center">
          <h2 className="text-h2 font-display text-cream">Plan Your Visit.</h2>
          <p className="mt-4 font-accent italic text-cream/85 text-lg">
            Best seen in person, over a long lunch.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center rounded-md bg-gold text-ink px-7 py-4 font-medium hover:bg-gold-soft transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-cream/40 px-7 py-4 text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
