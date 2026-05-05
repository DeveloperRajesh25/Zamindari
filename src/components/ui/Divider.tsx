import { cn } from "@/lib/utils";

export function Divider({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "line" | "cream";
}) {
  const color =
    tone === "gold" ? "bg-gold/60" : tone === "cream" ? "bg-cream/30" : "bg-line";
  return <span className={cn("block h-px w-full", color, className)} aria-hidden />;
}
