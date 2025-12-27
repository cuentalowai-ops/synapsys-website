import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'synapsys-cyan': '#00ffff',
        'synapsys-magenta': '#ff00ff',
        'synapsys-green': '#00ff00',
        'synapsys-black': '#050505',
        'synapsys-dark': '#0a0a0a',
        'synapsys-card': '#111111',
        'synapsys-text': '#e0e0e0',
        'synapsys-dim': '#808080',
      },
      backgroundImage: {
        'grid-pattern': 
          "linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)",
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
