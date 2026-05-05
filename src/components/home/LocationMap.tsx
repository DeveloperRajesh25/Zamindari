import { Phone, MessageCircle, MapPin, Clock, Car } from "lucide-react";
import { site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Divider } from "@/components/ui/Divider";

const mapEmbed =
  "https://www.google.com/maps?q=Zamindari+Restaurant+Maharani+Peta+Visakhapatnam&output=embed";

export function LocationMap() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeading
          eyebrow="Find Us"
          title="A Bungalow on Nowroji Road."
          subtitle="Tucked just behind the port officers' quarters in Maharani Peta — a few minutes from RK Beach."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="relative lg:col-span-7 aspect-[4/3] lg:aspect-auto lg:min-h-[460px] overflow-hidden rounded-lg ring-1 ring-line">
            <iframe
              title="Zamindari Restaurant location on Google Maps"
              src={mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full map-warm-tint"
            />
          </div>

          <aside className="lg:col-span-5 rounded-lg bg-paper border border-line shadow-paper p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <span className="text-gold mt-1"><MapPin size={20} /></span>
              <div>
                <h3 className="font-display text-xl text-ink">Address</h3>
                <p className="mt-2 text-ink/80 leading-relaxed">{site.fullAddress}</p>
              </div>
            </div>

            <Divider tone="line" className="my-7" />

            <div className="flex items-start gap-4">
              <span className="text-gold mt-1"><Clock size={20} /></span>
              <div className="flex-1">
                <h3 className="font-display text-xl text-ink">Hours</h3>
                <ul className="mt-2 space-y-1 text-ink/80 text-sm">
                  {site.hours.map((h) => (
                    <li key={h.day} className="flex justify-between">
                      <span>{h.day}</span>
                      <span className="text-ink/60">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Divider tone="line" className="my-7" />

            <div className="flex items-start gap-4">
              <span className="text-gold mt-1"><Car size={20} /></span>
              <p className="text-ink/80 text-sm leading-relaxed">
                Plenty of free parking — for both four and two wheelers — just outside.
              </p>
            </div>

            <Divider tone="line" className="my-7" />

            <div className="flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 rounded-md border border-ink/15 px-5 py-3 hover:border-gold hover:text-burgundy transition-colors"
              >
                <Phone size={16} /> {site.phone}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-md bg-gold text-ink px-5 py-3 hover:bg-gold-soft transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
