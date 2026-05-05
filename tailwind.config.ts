import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--zamindari-bg-cream)",
        ink: "var(--zamindari-ink)",
        burgundy: "var(--zamindari-burgundy)",
        gold: "var(--zamindari-gold)",
        "gold-soft": "var(--zamindari-gold-soft)",
        charcoal: "var(--zamindari-charcoal)",
        terracotta: "var(--zamindari-terracotta)",
        paper: "var(--zamindari-paper)",
        line: "var(--zamindari-line)",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        paper: "0 2px 24px rgba(28, 24, 20, 0.06)",
        "paper-lg": "0 6px 36px rgba(28, 24, 20, 0.10)",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      borderRadius: {
        md: "6px",
      },
      keyframes: {
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        kenburns: "kenburns 20s ease-in-out infinite alternate",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
