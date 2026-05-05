import type { MenuCategory } from "@/data/menu";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { GoldFlourish } from "@/components/ui/ElephantMark";
import { MenuItem } from "./MenuItem";

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section
      id={category.id}
      className="scroll-mt-32 border-t border-line pt-16 lg:pt-24"
    >
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-h2 font-display text-ink">{category.name}</h2>
        <p className="mt-3 font-accent italic text-ink/65 text-lg">{category.subtitle}</p>
        <GoldFlourish className="mx-auto mt-5 w-32" />
      </div>

      <div className="mt-12 space-y-12">
        {category.subsections.map((sub) => (
          <div key={sub.subcategory}>
            <Eyebrow tone="ink" className="text-ink/60 mb-5">
              {sub.subcategory}
            </Eyebrow>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
              {sub.items.map((item) => (
                <MenuItem key={item.name} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
