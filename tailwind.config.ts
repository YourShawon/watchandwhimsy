import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {     
        "green-0x": '#088178',
        'green-1x': '#e2e9e1 ',
        'green-2x': '#e8f6ea', // border
        'green-3x': '#D8F4E2',
        'green-4x': '#cce7d0',
        'green-5x': '#EEF5FF',
        'green-7x': '#465b52',
        'green-8x': '#046963', // green hover
        'light-green': '#3ed092',
        'white-1x': '#F1F1F1',
        'white-2x': '#f7f8f9',
        'white-3x': '#E5E7EB',
        'white-4x': '#dedfe2',
        'white-5x': '#e8e8e8',
        'black-solid': '#222',
        'black-1/10': '#0000001a',
        'black-1/4': '#00000040',
        'black-1x': '#1a1a1a',
        'black-2x': '#2a2a2a',
        'slate-4x': '#495057',
        'slate-5x': '#4f5d77',
        'slate-6x': '#687188',
        'gray-1x': '#9b9b9b',
        'gray-2x': '#90908e',
        'gray-3x': '#8e8e90',

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',

        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
