"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Tell us a bit more."),
});

type Values = z.infer<typeof schema>;

export function ContactForm() {
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Values>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: Values) => {
    // Stub — would post to a real backend in production
    console.log("[contact]", values);
    await new Promise((r) => setTimeout(r, 350));
    setDone(true);
    reset();
  };

  const fieldClass =
    "peer w-full bg-transparent border-0 border-b border-line text-ink placeholder-transparent focus:border-gold focus:ring-0 focus:outline-none px-0 py-3";
  const labelClass =
    "absolute left-0 -top-2 text-xs tracking-wider uppercase text-ink/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-ink/40 peer-focus:-top-2 peer-focus:text-xs peer-focus:tracking-wider peer-focus:uppercase peer-focus:text-burgundy";

  if (done) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg bg-paper border border-gold/40 shadow-paper p-8"
      >
        <div className="inline-flex items-center gap-3 text-burgundy">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-soft">
            <Check size={18} />
          </span>
          <span className="text-eyebrow text-burgundy">Message Sent</span>
        </div>
        <h3 className="mt-5 font-display text-2xl text-ink">Thank you for writing.</h3>
        <p className="mt-2 text-ink/70">We'll get back to you shortly.</p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className="mt-6 text-sm text-burgundy gold-underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg bg-paper border border-line shadow-paper p-8 lg:p-10"
    >
      <div className="space-y-7">
        <div className="relative">
          <input
            id="cname"
            type="text"
            placeholder="Name"
            className={fieldClass}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          <label htmlFor="cname" className={labelClass}>Name</label>
          {errors.name ? <p className="mt-1 text-sm text-terracotta">{errors.name.message}</p> : null}
        </div>
        <div className="relative">
          <input
            id="cemail"
            type="email"
            placeholder="Email"
            className={fieldClass}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          <label htmlFor="cemail" className={labelClass}>Email</label>
          {errors.email ? <p className="mt-1 text-sm text-terracotta">{errors.email.message}</p> : null}
        </div>
        <div className="relative">
          <textarea
            id="cmessage"
            rows={4}
            placeholder="Message"
            className={cn(fieldClass, "resize-none")}
            aria-invalid={!!errors.message}
            {...register("message")}
          />
          <label htmlFor="cmessage" className={labelClass}>Message</label>
          {errors.message ? <p className="mt-1 text-sm text-terracotta">{errors.message.message}</p> : null}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-9 inline-flex items-center justify-center rounded-md bg-burgundy text-cream border border-burgundy hover:border-gold px-7 py-4 font-medium transition-colors"
      >
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
