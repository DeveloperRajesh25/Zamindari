"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ElephantMark } from "@/components/ui/ElephantMark";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const onHero = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !onHero;
  const navTextTone = solid ? "text-ink" : "text-cream";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        solid
          ? "bg-cream/95 backdrop-blur border-b border-black/20"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10 h-20">
        <Link
          href="/"
          aria-label="Zamindari Restaurant — home"
          className={cn(
            "flex items-center gap-3 transition-colors",
            solid ? "text-ink" : "text-cream",
          )}
        >
          <span className={cn("text-gold")}>
            <ElephantMark size={26} />
          </span>
          <span className="font-display text-xl tracking-tight">Zamindari</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm font-body transition-colors gold-underline",
                  navTextTone,
                  active && "text-gold",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/reservations" variant={solid ? "primary" : "gold"} size="md">
            Reserve a Table
          </Button>
        </div>

        <button
          className={cn(
            "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border",
            solid
              ? "border-line text-ink"
              : "border-cream/40 text-cream",
          )}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={20} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-50 bg-charcoal text-cream"
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-20 items-center justify-between px-6">
              <Link href="/" className="flex items-center gap-3 text-cream">
                <span className="text-gold">
                  <ElephantMark size={26} />
                </span>
                <span className="font-display text-xl">Zamindari</span>
              </Link>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-cream/30"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex h-[calc(100%-5rem)] flex-col justify-between px-8 pb-10">
              <motion.ul
                className="mt-8 flex flex-col gap-6"
                initial={reduce ? undefined : "hidden"}
                animate={reduce ? undefined : "visible"}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.07 } },
                }}
              >
                {navLinks.map((l) => (
                  <motion.li
                    key={l.href}
                    variants={
                      reduce
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0 },
                          }
                    }
                  >
                    <Link
                      href={l.href}
                      className="font-display text-4xl text-cream hover:text-gold transition-colors"
                    >
                      {l.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <div className="flex flex-col gap-3">
                <Button href="/reservations" variant="gold" size="lg">
                  Reserve a Table
                </Button>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-cream/40 px-7 py-4 text-cream"
                >
                  <Phone size={16} /> {site.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
