import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "ink",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "cream";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow tone={tone === "cream" ? "gold" : "gold"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2
        className={cn(
          "text-h2 font-display font-medium",
          tone === "cream" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 font-accent italic text-lg leading-relaxed",
            tone === "cream" ? "text-cream/80" : "text-ink/70",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
