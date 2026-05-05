export type MenuBadge = "Chef's Special" | "Popular" | "Spicy" | "Signature" | "Guest Favourite";

export type MenuItem = {
  name: string;
  description?: string;
  price: number | "Market Price";
  badges?: MenuBadge[];
};

export type MenuSubsection = {
  subcategory: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  subtitle: string;
  subsections: MenuSubsection[];
};

export const menu: MenuCategory[] = [
  {
    id: "soups",
    name: "Soups",
    subtitle: "Slow-simmered, peppered, and warming.",
    subsections: [
      {
        subcategory: "From the Cauldron",
        items: [
          {
            name: "Miriyala Rasam",
            description: "Lentil-flavoured soup with pepper.",
            price: 115,
          },
          {
            name: "Mulakkada Rasam",
            description: "Lentil soup with drumstick and Indian spices.",
            price: 125,
          },
          {
            name: "Kodi Rasam",
            description: "Flavoured with chicken and Indian spices.",
            price: 145,
          },
          {
            name: "Paya Shorba",
            description: "Traditional Telangana mutton-leg soup.",
            price: 155,
            badges: ["Popular"],
          },
          {
            name: "Mulakkada Mamsam Rasam",
            description: "Drumstick pulp, mutton and spices.",
            price: 165,
          },
        ],
      },
    ],
  },
  {
    id: "appetizers",
    name: "Appetizers",
    subtitle: "Crisp edges, deep spice, and slow-built heat.",
    subsections: [
      {
        subcategory: "Veg",
        items: [
          {
            name: "Bangaladumpa Gunpodi Vepudu",
            description:
              "Baby potatoes stir-fried with curry leaves, gun powder, fennel and spices.",
            price: 260,
          },
          {
            name: "Mokkajonna Vada",
            description: "Crispy corn fritter with channa dal, rice flour and herbs.",
            price: 250,
          },
          {
            name: "Paneer Kobbari Pakodi",
            description: "Paneer cubes with grated coconut, maida, rice flour, deep-fried.",
            price: 275,
          },
          {
            name: "Jeedipappu Puttagodugulu",
            description: "Andhra-style fresh mushrooms and cashew, deep-fried with spices.",
            price: 285,
          },
          {
            name: "Puttagodugula Miriyala Vepudu",
            description: "Fresh mushroom stir-fried with curry leaves, fennel and black pepper.",
            price: 275,
            badges: ["Spicy"],
          },
          {
            name: "Veg Kheema Balls",
            description: "Minced vegetables rolled into balls, deep-fried.",
            price: 280,
          },
          {
            name: "Baby Corn Bazel",
            description: "Batter-fried baby corn with secret ingredients.",
            price: 299,
          },
          {
            name: "Aritaku Kothimeer Paneer",
            description:
              "Paneer marinated in kothimeer paste, banana-leaf wrapped, steam-fried.",
            price: "Market Price",
          },
        ],
      },
      {
        subcategory: "Chicken",
        items: [
          {
            name: "Konaseema Kodi Guddu Fry",
            description: "Boiled eggs wok-tossed with special Rayalaseema spices.",
            price: 245,
          },
          {
            name: "Kodi Guddu Kodi Vepudu",
            description: "Chicken cubes with scrambled eggs and curry leaves.",
            price: 330,
          },
          {
            name: "Kaju Kodi Pakodi",
            description: "Crispy fried chicken and cashews, South Indian spices.",
            price: 325,
          },
          {
            name: "Andhra Kodi Roast (Bone)",
            description: "Crispy fried chicken on bone, Andhra spices.",
            price: 315,
          },
          {
            name: "Karivepaku Kaju Kodi Roast",
            description: "Oil-fried chicken with cashews, curry-leaf powder.",
            price: 315,
          },
          {
            name: "Telangana Spicy Chicken",
            description: "Telangana stir-fried chicken cubes with curry leaves.",
            price: 325,
            badges: ["Spicy"],
          },
          {
            name: "Konaseema Fried Wings",
            description: "Oil-fried wings tossed with chilli powder.",
            price: 345,
          },
          {
            name: "Neyyi Kodi Roast (Bone)",
            description: "Deep-fried chicken with ghee and Indian spices.",
            price: 345,
          },
          {
            name: "Gongura Kodi Thalimpu",
            description: "Stir-fried chicken in sorrel paste and spices.",
            price: 325,
            badges: ["Chef's Special"],
          },
          {
            name: "Kodi Vepudu",
            description: "Batter-fried boneless chicken with Indian spices.",
            price: 325,
          },
        ],
      },
      {
        subcategory: "Mutton",
        items: [
          {
            name: "Mamsam Sukka",
            description: "Lamb chunks stir-fried with onion, tomato and Indian spices.",
            price: 385,
          },
          {
            name: "Golichina Pandu Mirchi Mamsam (B/L)",
            description: "Boneless mutton with red chillies and local spices.",
            price: 399,
            badges: ["Spicy"],
          },
          {
            name: "Konaseema Mamsam Vepudu (B/L)",
            description: "Lamb in Konaseema spices, curry leaves, onion.",
            price: 399,
          },
          {
            name: "Miryala Mamsam Vepudu",
            description: "Mutton stir-fried with curry leaves and black pepper.",
            price: 365,
          },
          {
            name: "Mutton Seekh Kabab",
            description:
              "Hand-pounded lamb with cheese, green chillies and spices, tandoor-grilled.",
            price: 399,
            badges: ["Popular"],
          },
        ],
      },
    ],
  },
  {
    id: "main-course",
    name: "Main Course",
    subtitle: "Gravies that have simmered all afternoon.",
    subsections: [
      {
        subcategory: "Veg",
        items: [
          { name: "Puttagodugula Batani Masala", price: 285 },
          { name: "Jeedipappu Batani Kurma", price: 295 },
          { name: "Zamindari Pappu Talimpu", price: 275, badges: ["Popular"] },
          { name: "Aloo Gadda Tomato Kurma", price: 255 },
          { name: "Paneer Jeedipappu Masala", price: 315 },
          { name: "Kayagurala Mandi", price: 260 },
          { name: "Kurma Kayaguralu", price: 260 },
          { name: "Tomato Paneer", price: 285 },
          { name: "Kothmir Paneer", price: 285 },
          { name: "Paneer Tikka Masala", price: 280 },
          { name: "Gutti Vankaya Kura", price: 275, badges: ["Chef's Special"] },
          { name: "Tomato Pappu", price: 245 },
          { name: "Gongura Pappu", price: 245 },
        ],
      },
      {
        subcategory: "Egg",
        items: [
          { name: "Kodi Guddu Pulusu", price: 225 },
          { name: "Kodi Guddu Kura", price: 225 },
        ],
      },
      {
        subcategory: "Chicken",
        items: [
          { name: "Andhra Kodi Kura", price: 325 },
          { name: "Gongura Kodi Kura", price: 325 },
          { name: "Konaseema Kodi Kura", price: 325 },
          { name: "Chicken Chettinadu", price: 335 },
          { name: "Zamindari Kodi Kura (B/L)", price: 335, badges: ["Signature"] },
          { name: "Malabar Chicken Curry", price: 335 },
          { name: "Natu Kodi Kura", price: 335 },
          { name: "Kodi Majjiga Pulusu", price: 325 },
        ],
      },
      {
        subcategory: "Mutton",
        items: [
          { name: "Gongura Mamsam", price: 399 },
          { name: "Zamindari Mamsam", price: 399, badges: ["Signature"] },
          { name: "Mutton Curry Boneless", price: 499 },
        ],
      },
      {
        subcategory: "Prawns",
        items: [
          { name: "Royyala Pulusu", price: 375 },
          { name: "Royyala Iguru", price: 375 },
        ],
      },
      {
        subcategory: "Fish",
        items: [
          { name: "Zamindari Chepala Pulusu", price: 315, badges: ["Chef's Special"] },
          { name: "Kerala Fish Curry", price: 345 },
        ],
      },
      {
        subcategory: "Crab",
        items: [
          { name: "Peetala Pulusu", price: 385 },
          { name: "Peetala Iguru", price: 385 },
        ],
      },
    ],
  },
  {
    id: "pulao-biryani",
    name: "Pulao & Biryani",
    subtitle: "Long-grain rice, seasoned ghee, and patient layering.",
    subsections: [
      {
        subcategory: "Veg",
        items: [
          {
            name: "Andhra Veg Pulao",
            description: "Long-grain rice and vegetables, Andhra style.",
            price: 275,
          },
          {
            name: "Jeedipappu Kothmira Pulao",
            description: "Cashew and coriander paste.",
            price: 295,
          },
          {
            name: "Jeedipappu Batani Pulao",
            description: "Cashew, peas and herbs.",
            price: 295,
          },
          {
            name: "Guthi Vankaya Pulao",
            description: "Chef's special whole brinjal with cashew paste.",
            price: 300,
            badges: ["Chef's Special"],
          },
          {
            name: "Zamindari Paneer Pulao",
            description: "Cottage cheese with ghee and tomato gravy.",
            price: 300,
          },
          {
            name: "Kothimeer Kaju Paneer Pulao",
            description: "Crispy cashew and paneer in coriander paste.",
            price: 315,
          },
          {
            name: "Kaju Tomato Biryani",
            description: "Crispy cashew with tomato cubes and purée.",
            price: 325,
          },
          {
            name: "Ulavacharu Veg Biryani",
            description: "Boiled veggies, horsegram lentil soup, basmati.",
            price: 325,
            badges: ["Popular"],
          },
        ],
      },
    ],
  },
  {
    id: "south-indian",
    name: "South Indian",
    subtitle: "The everyday meals of Telugu households.",
    subsections: [
      {
        subcategory: "Plates of the Region",
        items: [
          {
            name: "Muddapappu Avakai Annam",
            description:
              "Comforting Andhra steamed rice with muddapappu (dal) and avakai pickle.",
            price: 325,
          },
          {
            name: "Ragi Sangati",
            description:
              "Nutritious South Indian staple from ragi and rice — earthy and rich.",
            price: 249,
          },
          {
            name: "Sambhar Rice",
            description: "Rice cooked with flavourful sambhar.",
            price: 289,
          },
          {
            name: "Sambhar Rice with Kodi Vepudu",
            description: "Sambhar rice with spicy chicken fry.",
            price: 349,
          },
        ],
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    subtitle: "A sweet ending, lightly served.",
    subsections: [
      {
        subcategory: "House Sweets",
        items: [
          {
            name: "Apricot Delight",
            description: "Stewed apricots with a soft cream centre — a guest favourite.",
            price: 195,
            badges: ["Guest Favourite"],
          },
          {
            name: "Double ka Meetha",
            description: "Bread soaked in cardamom milk with saffron and dry fruits.",
            price: 175,
          },
          {
            name: "Qubani ka Meetha",
            description: "Hyderabadi apricot pudding with malai.",
            price: 195,
          },
        ],
      },
    ],
  },
];
