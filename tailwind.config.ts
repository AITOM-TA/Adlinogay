import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAF6F1",
        "cream-warm": "#F4EDE2",
        peach: "#F5D9C8",
        "peach-deep": "#E8B89C",
        terracotta: "#D4A88C",
        "terracotta-deep": "#B8845F",
        sage: "#B8C5A8",
        "sage-deep": "#8A9978",
        ink: "#2C3A2E",
        "ink-soft": "#4A4A42",
        "ink-muted": "#8A7E72",
        brick: "#6B3A24",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
