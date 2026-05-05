import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "cream" | "ink";
}) {
  const toneClass =
    tone === "gold" ? "text-gold" : tone === "cream" ? "text-cream/80" : "text-ink/70";
  return (
    <span
      className={cn(
        "text-eyebrow inline-flex items-center gap-2 font-body",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
