import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'var(--font-dm-sans)', 'sans-serif'],
        display: ['Cabinet Grotesk', 'var(--font-sora)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        'surface-elevated': '#1A1A1A',
        border: '#1F1F1F',
        'border-hover': '#2A2A2A',
        accent: {
          DEFAULT: '#D4AF37',
          hover: '#C4A030',
          muted: 'rgba(212, 175, 55, 0.08)',
          glow: 'rgba(212, 175, 55, 0.12)',
        },
        body: '#999999',
        text: {
          primary: '#FAFAFA',
          secondary: '#777777',
          muted: '#444444',
        },
      },
    },
  },
  plugins: [],
}

export default config
