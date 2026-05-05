// Centralized remote image map.
//
// Every image path used across the site routes through this map.
// To swap any photo, change the URL on the right — no component edits needed.
// Drop a real photo into public/images/<path> with the same filename and remove
// the entry below to use it instead.

const u = (id: string, w = 1600, q = 78) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const remoteImages: Record<string, string> = {
  // Hero / banners
  "/images/hero/bungalow-entrance.jpg": u("photo-1414235077428-338989a2e8c0", 1800, 80),
  "/images/hero/interior-warm.jpg": u("photo-1517248135467-4c7edcad34c4", 1800, 80),

  // Dishes
  "/images/dishes/zamindari-kodi-kura.jpg": u("photo-1606471191009-63994c53433b", 1400),
  "/images/dishes/mutton-nalli-biryani.jpg": u("photo-1563379091339-03b21ab4a4f8", 1400),
  "/images/dishes/koramenu-fish.jpg": u("photo-1559339352-11d035aa65de", 1400),
  "/images/dishes/apricot-delight.jpg": u("photo-1488477181946-6428a0291777", 1400),
  "/images/dishes/talvar-kebab.jpg": u("photo-1599487488170-d11ec9c172f0", 1400),
  "/images/dishes/paya-shorba.jpg": u("photo-1547592180-85f173990554", 1400),
  "/images/dishes/crab-ghee-roast.jpg": u("photo-1559847844-5315695dadae", 1400),
  "/images/dishes/ulavacharu-egg-biryani.jpg": u("photo-1631515243349-e0cb75fb8d3a", 1400),

  // Ambiance
  "/images/ambiance/statues-entry.jpg": u("photo-1545987796-200677ee1011", 1400),
  "/images/ambiance/private-dining.jpg": u("photo-1552566626-52f8b828add9", 1400),
  "/images/ambiance/outdoor-seating.jpg": u("photo-1559925393-8be0ec4767c8", 1400),
  "/images/ambiance/tiled-roof.jpg": u("photo-1564507592333-c60657eea523", 1400),
  "/images/ambiance/interior-1.jpg": u("photo-1559329007-40df8a9345d8", 1400),
  "/images/ambiance/interior-2.jpg": u("photo-1592861956120-e524fc739696", 1400),
  "/images/ambiance/moment-1.jpg": u("photo-1525610553991-2bede1a236e2", 1400),
  "/images/ambiance/moment-2.jpg": u("photo-1503764654157-72d979d9af2f", 1400),
  "/images/ambiance/moment-3.jpg": u("photo-1565967511849-76a60a516170", 1400),
  "/images/ambiance/moment-4.jpg": u("photo-1556909114-f6e7ad7d3136", 1400),

  // Open Graph
  "/images/og-image.jpg": u("photo-1414235077428-338989a2e8c0", 1200, 80),
};

export function resolveImage(src: string): string {
  return remoteImages[src] ?? src;
}
