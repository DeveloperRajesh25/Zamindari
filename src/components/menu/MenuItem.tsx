import type { MenuItem as MenuItemType } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

const badgeColor: Record<string, string> = {
  "Chef's Special": "bg-burgundy text-cream",
  Popular: "bg-gold text-ink",
  Spicy: "bg-terracotta text-cream",
  Signature: "bg-burgundy text-cream",
  "Guest Favourite": "bg-gold-soft text-ink",
};

export function MenuItem({ item }: { item: MenuItemType }) {
  return (
    <li className="grid grid-cols-[1fr_auto] gap-4 items-baseline py-4 border-b border-line/70 last:border-b-0">
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="font-display text-xl text-ink">{item.name}</h4>
          {item.badges?.map((b) => (
            <span
              key={b}
              className={`text-[10px] tracking-[0.18em] uppercase font-medium px-2 py-0.5 rounded-sm ${
                badgeColor[b] ?? "bg-line text-ink"
              }`}
            >
              {b}
            </span>
          ))}
        </div>
        {item.description ? (
          <p className="mt-1.5 text-ink/65 text-sm leading-relaxed max-w-prose">
            {item.description}
          </p>
        ) : null}
      </div>
      <div className="font-body text-eyebrow text-gold whitespace-nowrap pl-4">
        {formatPrice(item.price)}
      </div>
    </li>
  );
}
