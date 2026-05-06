import type { Metadata } from "next";
import {
  Trees,
  UtensilsCrossed,
  Soup,
  Accessibility,
  Car,
  CalendarCheck,
} from "lucide-react";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { LocationMap } from "@/components/home/LocationMap";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Zamindari is housed in a restored colonial-era bungalow in Maharani Peta. The kitchen cooks heirloom Andhra recipes with whole spices and patient heat.",
};

const values = [
  {
    title: "Native Recipes",
    body: "Konaseema, Telangana, coastal Andhra — the recipes our families taught us, served the way we eat them at home.",
  },
  {
    title: "Whole Spices, Slow Heat",
    body: "Every gravy is built from scratch each morning. We toast, grind, and temper our own masalas — no shortcuts.",
  },
  {
    title: "Generous, Always",
    body: "Portions are sized for sharing. Order one too many — there is always someone happy to take it home.",
  },
];

const experiences = [
  { icon: Trees, title: "Outdoor Seating", note: "Under the tiled overhang." },
  { icon: UtensilsCrossed, title: "Private Dining Room", note: "Quiet, by reservation." },
  { icon: Soup, title: "All You Can Eat", note: "Festive thali, on request." },
  { icon: Accessibility, title: "Wheelchair Accessible", note: "Step-free entry." },
  { icon: Car, title: "Free Parking", note: "Plenty, just outside." },
  { icon: CalendarCheck, title: "Reservations Accepted", note: "Walk-ins welcomed too." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-charcoal pt-20">
        <div className="absolute inset-0 -z-10">
          <ImageFallback
            src="/images/hero/interior-warm.jpg"
            alt="The exterior of Zamindari Restaurant — a restored colonial-era bungalow with warm interior lights, terracotta-tiled overhang, and bronze figures at the entrance"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0"
            imgClassName="object-cover opacity-20"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
            aria-hidden
          />
        </div>
        <div className="relative mx-auto w-full max-w-5xl px-6 lg:px-10 pb-20 lg:pb-28 pt-28">
          <Eyebrow tone="gold" className="mb-5">
            Our Story
          </Eyebrow>
          <h1 className="text-hero font-display text-cream max-w-3xl">
            A Heritage House. A Heirloom Kitchen.
          </h1>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow className="mb-5">The Bungalow</Eyebrow>
            <h2 className="text-h2 font-display text-ink">A Restored Colonial Home.</h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl">
            <Reveal>
              <p className="text-ink/85 font-body leading-relaxed text-lg">
                The bungalow sits on Nowroji Road, behind the port officers' quarters,
                a few minutes from RK Beach. It is the kind of building Vizag has
                fewer of every year — terracotta tiles overhanging the verandah,
                bronze figures at the entry, teak doors that announce themselves.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-ink/85 font-body leading-relaxed text-lg">
                We restored the property carefully. Where the floors needed repair we
                used reclaimed wood. Where the lighting was wrong we replaced it with
                ambient warmth. And where the silence was right we left it alone.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-16 max-w-3xl">
            <blockquote className="border-l-2 border-gold pl-8 font-accent italic text-2xl lg:text-3xl text-burgundy leading-snug">
              “Housed in a colonial-era bungalow, the interiors feel rustic, and the
              simple yet elegant decor is part of the story.”
            </blockquote>
            <p className="mt-4 pl-8 text-eyebrow text-ink/60">— A Local Guide review</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow className="mb-5">The Kitchen</Eyebrow>
            <h2 className="text-h2 font-display text-ink">What We Stand For.</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-lg border border-line bg-cream p-8 h-full">
                  <h3 className="font-display text-2xl text-burgundy">{v.title}</h3>
                  <p className="mt-4 text-ink/75 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <Eyebrow className="mb-5">The Experience</Eyebrow>
            <h2 className="text-h2 font-display text-ink">A Few Things to Know.</h2>
          </Reveal>

          <ul className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {experiences.map((e, i) => (
              <Reveal as="li" key={e.title} delay={(i % 3) * 0.06}>
                <div className="aspect-square rounded-lg border border-line bg-paper p-6 flex flex-col justify-between transition-colors hover:border-gold">
                  <span className="text-gold">
                    <e.icon size={24} strokeWidth={1.4} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-ink">{e.title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{e.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <LocationMap />
    </>
  );
}
