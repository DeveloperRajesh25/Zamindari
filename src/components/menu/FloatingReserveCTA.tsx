"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";

export function FloatingReserveCTA() {
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 500);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 rounded-md bg-burgundy text-cream border border-burgundy hover:border-gold px-5 py-3 font-medium shadow-paper-lg transition-all"
          >
            <Calendar size={16} /> Reserve a Table
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
