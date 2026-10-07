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
        wellness: {
          50: "#F2F7F4",
          100: "#E3EFE7",
          200: "#C7DFD0",
          300: "#9FC7AC",
          400: "#6FA984",
          500: "#448960",
          600: "#326E4C",
          700: "#27573C",
          800: "#1A452D",
          900: "#0F3823", // Deep Emerald
          950: "#092316",
        },
        primary: {
          DEFAULT: "#0F4A32",
          hover: "#0B3D28",
          light: "#186345",
        },
        accent: {
          DEFAULT: "#2B8255",
          light: "#EAF4EE",
        },
        cream: {
          50: "#FCFAF6",
          100: "#FAF7F2",
          200: "#F3ECE1",
          300: "#E9DFD0",
        },
        charcoal: {
          900: "#1C2420",
          800: "#2A3630",
          700: "#3E4C44",
          600: "#5B6C62",
          500: "#7B8C82",
        },
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1EBE5D",
          dark: "#128C7E",
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'wellness': '0 8px 30px -4px rgba(15, 74, 50, 0.08)',
        'wellness-lg': '0 14px 40px -6px rgba(15, 74, 50, 0.12)',
        'card': '0 4px 20px 0 rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};

export default config;
