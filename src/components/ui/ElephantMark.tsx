import { cn } from "@/lib/utils";

export function ElephantMark({
  className,
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block", className)}
      aria-hidden
    >
      <path d="M10 38c0-9 7-17 17-17 7 0 10 4 13 6 3 2 6 1 8 1 4 0 6 3 6 6 0 4-3 6-3 9 0 3 2 4 2 7 0 3-3 4-6 4h-3" />
      <path d="M19 47v6m6-6v8m12-8v8m6-8v6" />
      <path d="M43 26c2 1 4 3 4 5" />
      <path d="M26 26c-1-3 0-6 3-7" />
      <circle cx="22" cy="32" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function ElephantOrnament({
  className,
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("opacity-70", className)}
      aria-hidden
    >
      <path d="M20 60 Q 40 40 60 60 T 100 60 T 140 60 T 180 60" />
      <path d="M30 70 Q 50 50 70 70 T 110 70 T 150 70 T 175 70" opacity="0.5" />
      <circle cx="100" cy="30" r="2.4" fill="currentColor" />
      <path d="M88 35 Q 100 22 112 35" />
    </svg>
  );
}

export function GoldFlourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 16"
      className={cn("h-3 w-auto text-gold", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M2 8 H 100" />
      <circle cx="106" cy="8" r="3" />
      <path d="M114 8 Q 120 2 124 8 Q 128 14 132 8" />
      <circle cx="138" cy="8" r="3" />
      <path d="M144 8 H 238" />
    </svg>
  );
}
