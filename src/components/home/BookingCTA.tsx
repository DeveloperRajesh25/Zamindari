import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GoldFlourish } from "@/components/ui/ElephantMark";
import { site } from "@/data/site";

export function BookingCTA() {
  return (
    <section className="relative bg-burgundy text-cream isolate overflow-hidden">
      <span className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 py-24 lg:py-28 text-center">
        <GoldFlourish className="mx-auto mb-6 w-48" />
        <h2 className="text-h1 font-display text-cream">Reserve Your Table Tonight.</h2>
        <p className="mt-5 mx-auto max-w-xl font-accent italic text-cream/80 text-xl leading-relaxed">
          Reservations recommended for lunch and dinner.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/reservations" variant="gold" size="lg">
            Book a Table
          </Button>
          <Button href={site.phoneHref} variant="ghost" size="lg">
            <Phone size={16} /> Call 99515 22111
          </Button>
        </div>
      </div>
    </section>
  );
}
