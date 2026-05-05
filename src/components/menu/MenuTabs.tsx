"use client";

import { useEffect, useState } from "react";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";

export function MenuTabs() {
  const [active, setActive] = useState(menu[0]?.id ?? "");

  useEffect(() => {
    const sections = menu.map((c) => document.getElementById(c.id)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div className="sticky top-20 z-40 bg-cream/95 backdrop-blur border-b border-line">
      <nav
        aria-label="Menu categories"
        className="mx-auto max-w-7xl px-6 lg:px-10 py-4 overflow-x-auto"
      >
        <ul className="flex items-center gap-2 lg:gap-4 whitespace-nowrap min-w-max">
          {menu.map((cat) => {
            const isActive = active === cat.id;
            return (
              <li key={cat.id}>
                <a
                  href={`#${cat.id}`}
                  onClick={(e) => onClick(e, cat.id)}
                  className={cn(
                    "inline-block px-3 py-2 font-display text-base lg:text-lg transition-colors relative",
                    isActive ? "text-burgundy" : "text-ink/60 hover:text-ink",
                  )}
                >
                  {cat.name}
                  <span
                    className={cn(
                      "absolute left-3 right-3 -bottom-0.5 h-px transition-all duration-300",
                      isActive ? "bg-gold opacity-100" : "bg-gold opacity-0",
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
