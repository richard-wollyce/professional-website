import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAF8",
        foreground: "#1C1C1C",
        accent: "#B08D72",
        secondary: "#D6C5B5",
        surface: "#FFFFFF",
        border: "#E6DDD4",
        muted: "#655C54",
        sage: "#DCE7E0",
        sky: "#DCE5EB",
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 24px 80px -42px rgba(28, 28, 28, 0.35)",
        card: "0 18px 60px -35px rgba(28, 28, 28, 0.22)",
      },
      keyframes: {
        "soft-pulse": {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)",
          },
          "50%": {
            transform: "scale(1.04)",
            boxShadow: "0 0 0 16px rgba(37, 211, 102, 0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "soft-pulse": "soft-pulse 2.4s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      backgroundImage: {
        "editorial-glow":
          "radial-gradient(circle at top, rgba(176, 141, 114, 0.2), transparent 45%)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
