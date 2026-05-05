import type { Metadata } from "next";
import { Instagram } from "lucide-react";
import { ContactInfo } from "@/components/shared/ContactInfo";
import { ContactForm } from "./ContactForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Zamindari Restaurant — address, phone, hours, and a quick message form. We're in Maharani Peta, Visakhapatnam.",
};

const mapEmbed =
  "https://www.google.com/maps?q=Zamindari+Restaurant+Maharani+Peta+Visakhapatnam&output=embed";

const instaTiles = [
  "/images/dishes/zamindari-kodi-kura.jpg",
  "/images/ambiance/statues-entry.jpg",
  "/images/dishes/mutton-nalli-biryani.jpg",
  "/images/ambiance/private-dining.jpg",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center max-w-3xl">
          <Eyebrow className="mb-5 inline-flex justify-center">Contact</Eyebrow>
          <h1 className="text-h1 font-display text-ink">We'd Love to Hear from You.</h1>
          <p className="mt-5 mx-auto max-w-2xl font-accent italic text-ink/70 text-lg">
            For reservations, private events, press, or just to say hello.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ContactInfo />
        </div>
      </section>

      <section className="bg-paper border-y border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-lg ring-1 ring-line">
            <iframe
              title="Zamindari Restaurant location on Google Maps"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full map-warm-tint"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center">
            <Eyebrow className="mb-5 inline-flex justify-center">Write to Us</Eyebrow>
            <h2 className="text-h2 font-display text-ink">A Note for the Bungalow.</h2>
          </div>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <Eyebrow tone="gold" className="mb-4">
                On Instagram
              </Eyebrow>
              <h2 className="text-h2 font-display text-cream">{site.instagram}</h2>
            </div>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gold gold-underline self-start"
            >
              <Instagram size={16} /> Follow on Instagram
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {instaTiles.map((src, i) => (
              <a
                key={src}
                href={site.instagramHref}
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square block overflow-hidden rounded-lg ring-1 ring-cream/10 group"
              >
                <ImageFallback
                  src={src}
                  alt={`Latest Instagram post ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="absolute inset-0"
                  imgClassName="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
