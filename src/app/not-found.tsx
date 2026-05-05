import Link from "next/link";
import { ElephantOrnament } from "@/components/ui/ElephantMark";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-cream pt-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-10 text-center py-20">
        <ElephantOrnament className="mx-auto text-gold mb-6" size={180} />
        <Eyebrow className="mb-5 inline-flex justify-center">404 — Not Found</Eyebrow>
        <h1 className="text-h1 font-display text-ink">This dish isn't on the menu.</h1>
        <p className="mt-5 font-accent italic text-ink/70 text-lg lg:text-xl">
          The page you're looking for has been taken off the table. Let's get you back
          to something we can serve.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-burgundy text-cream border border-burgundy hover:border-gold px-7 py-4 font-medium transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-md border border-ink/15 px-7 py-4 hover:border-gold hover:text-burgundy transition-colors"
          >
            View the Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
