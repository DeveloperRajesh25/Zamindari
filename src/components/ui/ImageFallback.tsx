"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { resolveImage } from "@/data/images";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  imgClassName?: string;
};

function filenameFromSrc(src: string) {
  const parts = src.split("/");
  return parts[parts.length - 1] ?? src;
}

export function ImageFallback({
  src,
  alt,
  className,
  fill,
  width,
  height,
  sizes,
  priority,
  caption,
  imgClassName,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const resolvedSrc = resolveImage(src);
  const wrapperStyle = fill ? undefined : { width, height };

  // If the caller already passed a positioning utility, don't add `relative`.
  // Tailwind generates `.relative` after `.absolute` in the stylesheet, so
  // hardcoding `relative` here would override the caller's `absolute` and
  // collapse the wrapper to its text-content height.
  const hasPosition = /(?:^|\s)(?:absolute|fixed|relative|sticky)(?:\s|$)/.test(
    className ?? "",
  );

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        !hasPosition && "relative",
        "flex items-center justify-center overflow-hidden",
        "bg-[radial-gradient(ellipse_at_30%_20%,#E8D9B0_0%,#C9A961_45%,#5A1A1A_100%)]",
        className,
      )}
      style={wrapperStyle}
    >
      <span className="grain absolute inset-0 pointer-events-none" />
      <span
        className={cn(
          "relative z-10 px-6 text-center font-display italic text-cream/95 text-sm sm:text-base tracking-wide transition-opacity duration-500",
          loaded && !errored ? "opacity-0" : "opacity-100",
        )}
      >
        {caption ?? filenameFromSrc(src)}
      </span>
      {!errored ? (
        fill ? (
          <Image
            src={resolvedSrc}
            alt=""
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              "object-cover transition-opacity duration-500 z-20",
              loaded ? "opacity-100" : "opacity-0",
              imgClassName,
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
          />
        ) : (
          <Image
            src={resolvedSrc}
            alt=""
            width={width ?? 1200}
            height={height ?? 800}
            sizes={sizes}
            priority={priority}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 z-20",
              loaded ? "opacity-100" : "opacity-0",
              imgClassName,
            )}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
          />
        )
      ) : null}
    </div>
  );
}
