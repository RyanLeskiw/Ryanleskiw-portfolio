import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'text-light': '#f5f5f5',
        'accent-green': '#2d5a3d',
        'accent-green-light': '#58c77a',
      },
      fontFamily: {
        'slab-serif': ['"Courier Prime"', 'serif'],
        'sans': ['"Inter"', 'sans-serif'],
        'futuristic': ['"IBM Plex Mono"', '"Courier New"', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      letterSpacing: {
        'futuristic': '0.05em',
      },
    },
  },
  plugins: [],
}
export default config
