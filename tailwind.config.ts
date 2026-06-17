import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#050505',
          2: '#0D0D0F',
          3: '#161618',
        },
        accent: '#1F4FFF',
        'accent-dim': '#102B5C',
        muted: '#6B7280',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', '-apple-system', 'Helvetica', 'sans-serif'],
      },
      maxWidth: {
        card: '420px',
      },
      animation: {
        'fade-up': 'fadeUp 320ms cubic-bezier(0.2, 0.8, 0.2, 1) backwards',
        shimmer: 'shimmer 5s ease-in-out infinite',
        'border-spin': 'borderSpin 3s linear infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { left: '-70%' },
          '35%, 100%': { left: '115%' },
        },
        borderSpin: {
          to: { '--ba': '360deg' } as Record<string, string>,
        },
        pulseRing: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '0.2' },
        },
      },
    },
  },
  plugins: [],
}

export default config
