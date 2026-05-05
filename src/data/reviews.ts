export type Review = {
  name: string;
  role?: string;
  date: string;
  rating: 5;
  quote: string;
  source: "Google";
};

export const reviews: Review[] = [
  {
    name: "Sourav Chakraborty",
    role: "Local Guide",
    date: "4 months ago",
    rating: 5,
    quote:
      "A superb amalgamation of traditional preparations with a rustic vintage ambience. Ample parking for both four and two wheelers, and the staff is genuinely helpful.",
    source: "Google",
  },
  {
    name: "Ravi Kishore",
    role: "Local Guide",
    date: "5 months ago",
    rating: 5,
    quote:
      "A truly pleasant dining experience. The restaurant carries a traditional charm with elegant ambience and courteous staff — a welcoming atmosphere that complements the richness of the food.",
    source: "Google",
  },
  {
    name: "Arun Sahu",
    role: "Local Guide",
    date: "4 months ago",
    rating: 5,
    quote:
      "Tried the chicken pulao — superb, full of flavour, perfectly cooked. Old-style charm, food quality really stands out, and service is smooth and professional.",
    source: "Google",
  },
  {
    name: "Sri Vardhan Reddy",
    date: "6 months ago",
    rating: 5,
    quote:
      "Visited this colonial-style place and had a really good experience. Banana-leaf-wrapped fish, mutton pulao and apricot delight — everything was perfectly cooked.",
    source: "Google",
  },
  {
    name: "Suxant",
    role: "Local Guide",
    date: "7 months ago",
    rating: 5,
    quote:
      "Looks like an old colonial property converted into a restaurant — one of the most popular in Vizag. Ambience was great and the service was quick.",
    source: "Google",
  },
  {
    name: "Gautam Banerjee",
    role: "Local Guide",
    date: "2 months ago",
    rating: 5,
    quote:
      "That's what authentic Andhra food tastes like. I had the best biryani of Vizag here. A must-visit.",
    source: "Google",
  },
  {
    name: "Enchanting India",
    role: "Local Guide",
    date: "9 months ago",
    rating: 5,
    quote:
      "Housed in a bungalow that gives a feeling of the colonial era. Interiors look rustic, and the decor and furniture are simple yet very elegant.",
    source: "Google",
  },
  {
    name: "Vani Sharma",
    role: "Local Guide",
    date: "2 months ago",
    rating: 5,
    quote:
      "Coriander pulao and baby potato in gunpowder — amazing, and the portion size was huge. Service was very fast and the staff courteous. 10/10.",
    source: "Google",
  },
];
