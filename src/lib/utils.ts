export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(price: number | "Market Price") {
  if (price === "Market Price") return "Market Price";
  return `₹${price}`;
}
