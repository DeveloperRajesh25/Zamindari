const pills = [
  "Authentic Andhra Cuisine",
  "Colonial-Era Bungalow",
  "Outdoor & Private Dining",
  "Plenty of Free Parking",
  "3,591+ Happy Guests",
];

export function HeritageStrip() {
  return (
    <section
      className="border-y border-line bg-cream"
      aria-label="What guests value about Zamindari"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-eyebrow text-ink/70">
          {pills.map((pill, i) => (
            <li key={pill} className="flex items-center gap-8">
              <span>{pill}</span>
              {i < pills.length - 1 ? (
                <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-gold" aria-hidden />
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
