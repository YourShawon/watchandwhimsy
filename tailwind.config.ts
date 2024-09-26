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
        green: "#198754",
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