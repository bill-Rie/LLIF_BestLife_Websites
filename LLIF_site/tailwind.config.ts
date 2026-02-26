import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:       '#0B1D33',
        'navy-light': '#132B4A',
        'navy-mid': '#1A3A5C',
        slate:      '#3D5A80',
        sky:        '#89B0D3',
        'sky-light':'#B8D4E8',
        gold:       '#D4A853',
        'gold-light':'#E8C97A',
        'gold-pale':'#FDF5E6',
        cream:      '#FAFAF7',
        green:      '#2D8A56',
        'green-light':'#E8F5EE',
        // remap Tailwind grays to match original design
        'gray-50':  '#F8F9FA',
        'gray-100': '#F1F3F5',
        'gray-200': '#E9ECEF',
        'gray-300': '#DEE2E6',
        'gray-400': '#ADB5BD',
        'gray-500': '#6C757D',
        'gray-600': '#495057',
        'gray-700': '#343A40',
        'gray-800': '#212529',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'clamp-hero': 'clamp(36px, 5vw, 56px)',
        'clamp-h1':   'clamp(32px, 4vw, 48px)',
        'clamp-h2':   'clamp(28px, 3.5vw, 40px)',
        'clamp-cta':  'clamp(28px, 3vw, 38px)',
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
}

export default config
