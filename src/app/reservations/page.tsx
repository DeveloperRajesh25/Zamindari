import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, AlertCircle } from "lucide-react";
import { ReservationForm } from "@/components/shared/ReservationForm";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Divider } from "@/components/ui/Divider";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Zamindari Restaurant — indoor, outdoor, or in our private dining room. Open 12:00 PM – 11:30 PM, all days.",
};

export default function ReservationsPage() {
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 text-center">
          <Eyebrow className="mb-5 inline-flex justify-center">Reservations</Eyebrow>
          <h1 className="text-h1 font-display text-ink">Save a Seat at the Bungalow.</h1>
          <p className="mt-5 mx-auto max-w-2xl font-accent italic text-ink/70 text-lg">
            Tell us when you'd like to dine and how to find you.
          </p>
        </div>
      </section>

      <section className="bg-cream pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-lg bg-paper border border-line shadow-paper p-8 lg:p-10 sticky top-28">
              <Eyebrow className="mb-5">What to Expect</Eyebrow>
              <h2 className="font-display text-2xl text-ink">A Few Notes Before You Arrive.</h2>

              <div className="mt-7 flex items-start gap-4">
                <span className="text-gold mt-1"><Clock size={18} /></span>
                <div className="flex-1">
                  <h3 className="font-display text-lg text-ink">Hours</h3>
                  <ul className="mt-2 space-y-1 text-sm text-ink/75">
                    {site.hours.map((h) => (
                      <li key={h.day} className="flex justify-between">
                        <span>{h.day}</span>
                        <span className="text-ink/55">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Divider tone="line" className="my-7" />

              <div className="space-y-3 text-sm text-ink/75 leading-relaxed">
                <p className="flex items-start gap-3">
                  <span className="text-gold mt-1"><AlertCircle size={16} /></span>
                  <span>
                    Reservations are recommended for lunch and dinner — especially on
                    weekends.
                  </span>
                </p>
                <p className="flex items-start gap-3 pl-7">
                  Be aware: there is usually a wait during peak hours, even with a
                  booking. We try to keep it short.
                </p>
                <p className="flex items-start gap-3 pl-7">
                  Our private dining room is available — please mention it in the
                  special requests box.
                </p>
              </div>

              <Divider tone="line" className="my-7" />

              <p className="text-sm text-ink/65 mb-3">Or reach us directly:</p>
              <div className="flex flex-col gap-3">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 px-5 py-3 hover:border-gold hover:text-burgundy transition-colors"
                >
                  <Phone size={16} /> Call {site.phone}
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold text-ink px-5 py-3 hover:bg-gold-soft transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp Us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
