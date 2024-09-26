import type { Config } from "tailwindcss"

import flowbite from "flowbite-react/tailwind"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    flowbite.content(),
	],
  prefix: "",
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        green: "#088178",
        "green-1x": "#e2e9e1 ",
        "green-2x": "#e8f6ea",
        "green-3x": "#D8F4E2",
        "green-4x": "#cce7d0",
        "green-5x": "#EEF5FF",
        "green-7x": "#465b52",
        "green-8x": "#046963",
        "light-green": "#3ed092",
        "white-1x": "#F1F1F1",
        "white-2x": "#f7f8f9",
        "white-3x": "#E5E7EB",
        "white-4x": "#dedfe2",
        "white-5x": "#e8e8e8",
        "black-solid": "#222",
        "black-1/10": "#0000001a",
        "black-1/4": "#00000040",
        "black-1x": "#1a1a1a",
        "black-2x": "#2a2a2a",
        "slate-4x": "#495057",
        "slate-5x": "#4f5d77",
        "slate-6x": "#687188",
        "gray-1x": "#9b9b9b",
        "gray-2x": "#90908e",
        "gray-3x": "#8e8e90",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        blue: "#0d6efd",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#d63384",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        teal: "#20c997",
        cyan: "#0dcaf0",
        white: "#fff",
        gray: "#6c757d",
        "gray-dark": "#343a40",
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        light: "#f8f9fa",
        dark: "#212529",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lato: "var(--font-lato)",
        spartan: ['Spartan'],
      },
      fontWeight: {
        spartanThin: "100",
        spartanLight: "300",
        spartanRegular: "400",
        spartanMedium: "500",
        spartanSemiBold: "600",
        spartanBold: "700",
        spartanExtraBold: "800",
        spartanBlack: "900",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down .7s ease-out",
        "accordion-up": "accordion-up .7s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), flowbite.plugin(),],
} satisfies Config

export default config