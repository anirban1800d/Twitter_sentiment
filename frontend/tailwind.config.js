/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nexus: {
          accent: '#8b5cf6',
          border: '#1e293b',
        },
      },
      boxShadow: {
        nexus: '0 20px 70px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
}
