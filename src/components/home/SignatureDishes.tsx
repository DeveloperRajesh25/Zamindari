"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

type Dish = {
  name: string;
  description: string;
  price?: string;
  image: string;
  alt: string;
  badge?: string;
};

const featured: Dish = {
  name: "Zamindari Kodi Kura",
  description:
    "Our chef's signature chicken curry — slow-cooked in a burgundy gravy of toasted spices and cashew.",
  price: "₹335",
  image: "/images/dishes/zamindari-kodi-kura.jpg",
  alt: "Zamindari Kodi Kura — chicken curry in a deep burgundy gravy with toasted spices",
  badge: "Signature",
};

const sideTiles: Dish[] = [
  {
    name: "Mutton Nalli Biryani",
    description: "Long-grain basmati layered with marrow-rich mutton and saffron.",
    price: "₹399",
    image: "/images/dishes/mutton-nalli-biryani.jpg",
    alt: "Mutton Nalli Biryani served in a copper handi with mint and onions",
  },
  {
    name: "Koramenu Grill Fish",
    description: "Fresh river fish wrapped in banana leaf and grilled in coastal spices.",
    image: "/images/dishes/koramenu-fish.jpg",
    alt: "Koramenu Grill Fish wrapped in banana leaf with charred edges",
    badge: "Chef's Special",
  },
  {
    name: "Apricot Delight",
    description: "Stewed apricots with a soft cream centre — light, fragrant, and faintly tart.",
    price: "₹195",
    image: "/images/dishes/apricot-delight.jpg",
    alt: "Apricot Delight dessert with cream and crushed pistachios",
    badge: "Guest Favourite",
  },
];

const bottomRow: Dish[] = [
  {
    name: "Talvar Chicken Kebab",
    description: "Char-grilled skewers, hand-pounded with green chilli and spices.",
    image: "/images/dishes/talvar-kebab.jpg",
    alt: "Talvar Chicken Kebab on a sword skewer with smoke rising",
  },
  {
    name: "Paya Shorba",
    description: "A traditional Telangana mutton-leg soup, peppered and warming.",
    price: "₹155",
    image: "/images/dishes/paya-shorba.jpg",
    alt: "Paya Shorba soup in a brass bowl",
  },
  {
    name: "Crab Ghee Roast",
    description: "Coastal crab roasted in clarified butter, curry leaves and red chilli.",
    price: "₹385",
    image: "/images/dishes/crab-ghee-roast.jpg",
    alt: "Peetala Iguru — crab roast in a dark ghee-laden masala",
  },
  {
    name: "Ulavacharu Egg Biryani",
    description: "Horsegram broth slow-folded into basmati with farm eggs.",
    image: "/images/dishes/ulavacharu-egg-biryani.jpg",
    alt: "Ulavacharu egg biryani plated in a copper bowl",
  },
];

function Tile({
  dish,
  className,
  imageClassName,
}: {
  dish: Dish;
  className?: string;
  imageClassName?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }
      }
      className={cn(
        "group relative overflow-hidden rounded-lg border border-line bg-paper shadow-paper",
        className,
      )}
    >
      <div className={cn("relative w-full overflow-hidden", imageClassName ?? "aspect-[4/3]")}>
        <ImageFallback
          src={dish.image}
          alt={dish.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
          className="absolute inset-0"
          imgClassName="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {dish.badge ? (
          <span className="absolute left-4 top-4 rounded-md bg-cream/90 px-3 py-1 text-eyebrow text-burgundy">
            {dish.badge}
          </span>
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-ink gold-underline inline-block">
          {dish.name}
        </h3>
        <p className="mt-2 font-accent italic text-ink/70 text-lg leading-snug">
          {dish.description}
        </p>
        {dish.price ? (
          <div className="mt-4 text-eyebrow text-gold">{dish.price}</div>
        ) : null}
      </div>
    </motion.article>
  );
}

export function SignatureDishes() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeading
          eyebrow="Our Kitchen's Pride"
          title="Dishes That Earned Their Reputation."
          subtitle="A short list of plates that bring guests back — chosen for the way they taste, and the way they look on the table."
        />

        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={
            reduce
              ? undefined
              : { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
          }
          className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <Tile
            dish={featured}
            className="lg:row-span-2 lg:col-span-1"
            imageClassName="aspect-[4/5]"
          />
          {sideTiles.map((d) => (
            <Tile key={d.name} dish={d} className="lg:col-span-1" />
          ))}
        </motion.div>

        <motion.div
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          variants={
            reduce
              ? undefined
              : { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
          }
          className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {bottomRow.map((d) => (
            <Tile key={d.name} dish={d} imageClassName="aspect-square" />
          ))}
        </motion.div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/menu"
            className="font-display text-lg text-burgundy gold-underline"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
