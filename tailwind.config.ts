import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep "grid-down" night sky — the base the sun rises out of
        navy: {
          950: "#060A13",
          900: "#0B1220",
          800: "#111A2E",
          700: "#1A2740",
          600: "#28395A",
        },
        // Sun / primary energy accent
        gold: {
          400: "#FFC24D",
          500: "#F4A522",
          600: "#D98A0E",
        },
        // Secondary warmth — dusk amber
        amber: {
          400: "#FF8A3D",
          500: "#F4713C",
        },
        // Text
        ivory: {
          100: "#F6F4EC",
          300: "#D8D6CC",
        },
        slate: {
          400: "#8B93A7",
          500: "#6B7387",
        },
        // Sparingly used success / eco accent
        emerald: {
          400: "#34D399",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "sunrise-radial":
          "radial-gradient(circle at 50% 15%, #FFC24D 0%, #F4A522 18%, #D98A0E 32%, rgba(217,138,14,0) 60%)",
        "grid-fade":
          "linear-gradient(180deg, rgba(6,10,19,0) 0%, #060A13 100%)",
      },
      keyframes: {
        "pulse-ray": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        "flow-dot": {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "8%": { opacity: "1" },
          "92%": { opacity: "1" },
          "100%": { offsetDistance: "100%", opacity: "0" },
        },
        "rise": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pulse-ray": "pulse-ray 4s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        drift: "drift 6s ease-in-out infinite",
        "spin-slow": "spin-slow 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
