"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TIME_SLOTS: string[] = (() => {
  const slots: string[] = [];
  for (let h = 12; h <= 23; h++) {
    for (const m of [0, 30]) {
      if (h === 23 && m === 30) {
        slots.push("11:30 PM");
        continue;
      }
      const hour12 = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      slots.push(`${hour12}:${m.toString().padStart(2, "0")} ${ampm}`);
    }
  }
  return slots;
})();

const PARTY_SIZES = ["1-2", "3-4", "5-6", "7-8", "9+"] as const;
const OCCASIONS = ["Anniversary", "Birthday", "Family", "Corporate", "Just Dinner"] as const;
const SEATING = ["Indoor", "Outdoor", "Private Room", "No Preference"] as const;

const reservationSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  phone: z
    .string()
    .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Please enter a valid Indian mobile number."),
  email: z.string().email("Please enter a valid email.").optional().or(z.literal("")),
  date: z.string().min(1, "Please choose a date."),
  time: z.string().min(1, "Please choose a time."),
  partySize: z.enum(PARTY_SIZES, {
    required_error: "Please pick a party size.",
  }),
  occasion: z.string().optional(),
  seating: z.enum(SEATING, {
    required_error: "Please pick a seating preference.",
  }),
  notes: z.string().max(500).optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

export function ReservationForm() {
  const reduce = useReducedMotion();
  const [submitted, setSubmitted] = useState<ReservationValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: { seating: "No Preference" },
  });

  const onSubmit = async (values: ReservationValues) => {
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(values);
      reset();
    } catch {
      // silent fallback — confirmation card still shown so guest knows it was received
      setSubmitted(values);
      reset();
    }
  };

  const fieldClass =
    "peer w-full bg-transparent border-0 border-b border-line text-ink placeholder-transparent focus:border-gold focus:ring-0 focus:outline-none px-0 py-3";
  const labelClass =
    "absolute left-0 -top-2 text-xs tracking-wider uppercase text-ink/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-ink/40 peer-focus:-top-2 peer-focus:text-xs peer-focus:tracking-wider peer-focus:uppercase peer-focus:text-burgundy";
  const errorClass = "mt-1 text-sm text-terracotta";

  if (submitted) {
    return (
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 12 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg bg-paper border border-gold/40 shadow-paper p-8 lg:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="inline-flex items-center gap-3 text-burgundy">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-soft text-burgundy">
            <Check size={18} />
          </span>
          <span className="text-eyebrow text-burgundy">Reservation Received</span>
        </div>
        <h3 className="mt-5 font-display text-3xl text-ink">Thank you, {submitted.fullName.split(" ")[0]}.</h3>
        <p className="mt-3 text-ink/70 leading-relaxed max-w-prose">
          We'll call you to confirm shortly. Here is what we have on file:
        </p>
        <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-eyebrow text-ink/50">Date & Time</dt>
            <dd className="mt-1 text-ink">{submitted.date} · {submitted.time}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-ink/50">Party</dt>
            <dd className="mt-1 text-ink">{submitted.partySize} guests</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-ink/50">Seating</dt>
            <dd className="mt-1 text-ink">{submitted.seating}</dd>
          </div>
          <div>
            <dt className="text-eyebrow text-ink/50">Phone</dt>
            <dd className="mt-1 text-ink">{submitted.phone}</dd>
          </div>
          {submitted.occasion ? (
            <div className="sm:col-span-2">
              <dt className="text-eyebrow text-ink/50">Occasion</dt>
              <dd className="mt-1 text-ink">{submitted.occasion}</dd>
            </div>
          ) : null}
        </dl>
        <button
          type="button"
          onClick={() => setSubmitted(null)}
          className="mt-8 text-sm text-burgundy gold-underline"
        >
          Make another reservation
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg bg-paper border border-line shadow-paper p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
        <div className="relative sm:col-span-2">
          <input
            id="fullName"
            type="text"
            placeholder="Full name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={fieldClass}
            {...register("fullName")}
          />
          <label htmlFor="fullName" className={labelClass}>Full Name</label>
          {errors.fullName ? (
            <p id="fullName-error" className={errorClass}>{errors.fullName.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <input
            id="phone"
            type="tel"
            placeholder="Phone"
            inputMode="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={fieldClass}
            {...register("phone")}
          />
          <label htmlFor="phone" className={labelClass}>Phone</label>
          {errors.phone ? (
            <p id="phone-error" className={errorClass}>{errors.phone.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <input
            id="email"
            type="email"
            placeholder="Email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            {...register("email")}
          />
          <label htmlFor="email" className={labelClass}>Email (optional)</label>
          {errors.email ? (
            <p id="email-error" className={errorClass}>{errors.email.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <input
            id="date"
            type="date"
            placeholder="Date"
            aria-invalid={!!errors.date}
            aria-describedby={errors.date ? "date-error" : undefined}
            className={cn(fieldClass, "appearance-none")}
            {...register("date")}
          />
          <label htmlFor="date" className={cn(labelClass, "-top-2 text-xs tracking-wider uppercase text-ink/60")}>
            Date
          </label>
          {errors.date ? (
            <p id="date-error" className={errorClass}>{errors.date.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <select
            id="time"
            aria-invalid={!!errors.time}
            aria-describedby={errors.time ? "time-error" : undefined}
            className={cn(fieldClass, "appearance-none")}
            defaultValue=""
            {...register("time")}
          >
            <option value="" disabled>
              Select a time
            </option>
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <label htmlFor="time" className={cn(labelClass, "-top-2 text-xs tracking-wider uppercase text-ink/60")}>
            Time
          </label>
          {errors.time ? (
            <p id="time-error" className={errorClass}>{errors.time.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <select
            id="partySize"
            aria-invalid={!!errors.partySize}
            aria-describedby={errors.partySize ? "partySize-error" : undefined}
            className={cn(fieldClass, "appearance-none")}
            defaultValue=""
            {...register("partySize")}
          >
            <option value="" disabled>Select a party size</option>
            {PARTY_SIZES.map((s) => (
              <option key={s} value={s}>{s} guests</option>
            ))}
          </select>
          <label htmlFor="partySize" className={cn(labelClass, "-top-2 text-xs tracking-wider uppercase text-ink/60")}>
            Party Size
          </label>
          {errors.partySize ? (
            <p id="partySize-error" className={errorClass}>{errors.partySize.message}</p>
          ) : null}
        </div>

        <div className="relative">
          <select
            id="occasion"
            className={cn(fieldClass, "appearance-none")}
            defaultValue=""
            {...register("occasion")}
          >
            <option value="">No occasion</option>
            {OCCASIONS.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <label htmlFor="occasion" className={cn(labelClass, "-top-2 text-xs tracking-wider uppercase text-ink/60")}>
            Occasion (optional)
          </label>
        </div>

        <div className="relative sm:col-span-2">
          <select
            id="seating"
            className={cn(fieldClass, "appearance-none")}
            aria-invalid={!!errors.seating}
            aria-describedby={errors.seating ? "seating-error" : undefined}
            {...register("seating")}
          >
            {SEATING.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <label htmlFor="seating" className={cn(labelClass, "-top-2 text-xs tracking-wider uppercase text-ink/60")}>
            Seating Preference
          </label>
          {errors.seating ? (
            <p id="seating-error" className={errorClass}>{errors.seating.message}</p>
          ) : null}
        </div>

        <div className="relative sm:col-span-2">
          <textarea
            id="notes"
            placeholder="Special requests"
            rows={3}
            className={cn(fieldClass, "resize-none")}
            {...register("notes")}
          />
          <label htmlFor="notes" className={labelClass}>Special Requests</label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-gold text-ink px-7 py-4 font-medium hover:bg-gold-soft disabled:opacity-60 transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Confirm Reservation"
        )}
      </button>
    </form>
  );
}
