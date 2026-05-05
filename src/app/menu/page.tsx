import type { Metadata } from "next";
import { menu } from "@/data/menu";
import { MenuTabs } from "@/components/menu/MenuTabs";
import { MenuSection } from "@/components/menu/MenuSection";
import { FloatingReserveCTA } from "@/components/menu/FloatingReserveCTA";
import { ElephantOrnament } from "@/components/ui/ElephantMark";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "The Menu",
  description:
    "Authentic Andhra and South Indian dishes — soups, appetizers, gravies, biryanis, and desserts from Telugu households. Slow-cooked, generously served.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[50vh] items-center bg-charcoal text-cream overflow-hidden pt-20">
        <span className="grain absolute inset-0" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(201,169,97,0.18),transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 py-20 text-center">
          <ElephantOrnament className="mx-auto text-gold mb-4" size={160} />
          <Eyebrow tone="gold" className="mb-4 inline-flex justify-center">
            From Our Kitchen
          </Eyebrow>
          <h1 className="text-h1 font-display text-cream">The Menu</h1>
          <p className="mt-5 mx-auto max-w-2xl font-accent italic text-cream/80 text-lg lg:text-xl leading-relaxed">
            A journey through Telugu kitchens — slow, spiced, and soulful.
          </p>
        </div>
      </section>

      <MenuTabs />

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pb-24 lg:pb-32">
        <p className="mt-10 text-eyebrow text-ink/50 text-center">
          Prices are exclusive of applicable GST.
        </p>

        <div className="mt-10 space-y-20">
          {menu.map((cat) => (
            <MenuSection key={cat.id} category={cat} />
          ))}
        </div>
      </div>

      <FloatingReserveCTA />
    </>
  );
}
