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
        'brand-dark': '#11021d',
        'brand-purple': '#1a0533',
        'brand-purple-light': '#2d1054',
        'brand-accent': '#6412A6',
      },
      fontFamily: {
        'sans': ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
