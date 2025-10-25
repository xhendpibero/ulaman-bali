import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#faf9f7",
        },
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
      },
      backgroundImage: {
        "noise-soft":
          "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.04) 1px, transparent 0)",
      },
    },
  },
};

export default config;
