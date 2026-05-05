import { MapPin, Phone, Clock } from "lucide-react";
import { site } from "@/data/site";

export function ContactInfo() {
  const items = [
    {
      icon: MapPin,
      title: "Address",
      body: (
        <>
          {site.address.street}
          <br />
          {site.address.locality}
          <br />
          {site.address.city}, {site.address.region} {site.address.postal}
        </>
      ),
    },
    {
      icon: Phone,
      title: "Phone",
      body: (
        <a href={site.phoneHref} className="text-ink hover:text-burgundy transition-colors">
          {site.phone}
        </a>
      ),
    },
    {
      icon: Clock,
      title: "Hours",
      body: <>All days · 12:00 PM – 11:30 PM</>,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-lg bg-paper border border-line p-7 shadow-paper"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-gold-soft text-burgundy">
            <item.icon size={18} />
          </span>
          <h3 className="mt-4 font-display text-xl text-ink">{item.title}</h3>
          <p className="mt-2 text-ink/75 leading-relaxed">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
