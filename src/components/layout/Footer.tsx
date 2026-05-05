import Link from "next/link";
import { Instagram, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { ElephantMark } from "@/components/ui/ElephantMark";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/90">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 text-cream">
              <span className="text-gold">
                <ElephantMark size={26} />
              </span>
              <span className="font-display text-2xl">Zamindari</span>
            </Link>
            <p className="mt-5 font-accent italic text-cream/85 text-lg leading-relaxed max-w-sm">
              Where Heritage Meets the Table.
              <br />
              Authentic Andhra cuisine, served inside a colonial bungalow.
            </p>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-gold gold-underline"
            >
              <Instagram size={16} />
              {site.instagram}
            </a>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow text-gold mb-5">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/90 hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/reservations"
                  className="text-cream/90 hover:text-gold transition-colors"
                >
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-eyebrow text-gold mb-5">Visit Us</h3>
            <address className="not-italic text-cream/90 leading-relaxed">
              {site.address.street}
              <br />
              {site.address.locality}
              <br />
              {site.address.city}, {site.address.region} {site.address.postal}
            </address>
            <a
              href={site.phoneHref}
              className="mt-4 inline-flex items-center gap-2 text-cream hover:text-gold transition-colors"
            >
              <Phone size={14} /> {site.phone}
            </a>
            <div className="mt-5 text-sm text-cream/85">
              <div className="text-eyebrow text-gold mb-2">Hours</div>
              <div>All days · 12:00 PM – 11:30 PM</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-eyebrow text-gold mb-5">Dine With Us</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/reservations"
                className="rounded-md bg-gold text-ink px-5 py-3 text-center font-medium hover:bg-gold-soft transition-colors"
              >
                Reserve a Table
              </Link>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-cream/30 px-5 py-3 text-center text-cream hover:border-gold hover:text-gold transition-colors"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>

        <Divider tone="gold" className="mt-16 mb-6 opacity-40" />
        <p className="text-sm text-cream/70 font-body">
          © {new Date().getFullYear()} Zamindari Restaurant · Crafted with care in
          Visakhapatnam
        </p>
      </div>
    </footer>
  );
}
