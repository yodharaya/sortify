import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D1F8EF",
          300: "#A1E3F9",
          500: "#578FCA",
          700: "#3674B5",
        },
        shade: {
          gray: "#C9C9CB",
          white: "#F1F2F4",
        },
        success: {
          500: "#047857"
        },
        error: {
          500: "#D92D20"
        },
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
