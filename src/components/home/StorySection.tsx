import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ImageFallback } from "@/components/ui/ImageFallback";

export function StorySection() {
  return (
    <section className="bg-paper border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg ring-1 ring-gold/40">
              <ImageFallback
                src="/images/ambiance/statues-entry.jpg"
                alt="Life-size bronze statue figures flanking the wooden entrance of the colonial-era bungalow that houses Zamindari Restaurant"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="absolute inset-0"
                imgClassName="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7">
            <Eyebrow className="mb-5">Our Story</Eyebrow>
            <h2 className="text-h2 font-display text-ink">
              A Bungalow That Remembers Every Meal.
            </h2>

            <div className="mt-8 space-y-6 text-ink/80 font-body text-base lg:text-lg leading-relaxed max-w-prose">
              <p>
                The building was a colonial-era residence long before it was a
                restaurant — terracotta tiles overhanging the verandah, teak floors
                that creak in the right places, and bronze figures keeping watch at
                the entrance. We restored what we could and left the rest to time.
              </p>
              <p>
                The kitchen is committed to recipes pulled from Telugu households —
                gongura paste pounded each morning, ulavacharu simmered slow,
                natu kodi from country birds, and ragi sangati shaped by hand.
                Whole spices, patient heat, generous portions.
              </p>
              <p>
                Outdoor seating under the tiled roof, a private dining room for
                quiet evenings, and a courtyard tourists call the most photogenic
                in Vizag. We hope you stay a while.
              </p>
            </div>

            <p className="mt-8 font-accent italic text-burgundy text-xl">
              — The Zamindari Family
            </p>

            <div className="mt-10">
              <Link
                href="/about"
                className="font-display text-lg text-burgundy gold-underline"
              >
                Read More About Us →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
