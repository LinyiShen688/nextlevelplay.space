/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Apple-inspired color palette
        'apple-blue': '#0071e3',
        'apple-dark-blue': '#0077ED',
        'apple-gray': '#f5f5f7',
        'apple-dark-gray': '#86868b',
        'apple-black': '#1d1d1f',
        'apple-red': '#ff3b30',
        'apple-orange': '#ff9500',
        'apple-yellow': '#ffcc00',
        'apple-green': '#34c759',
        'apple-purple': '#af52de',
        'apple-pink': '#ff2d55',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'apple': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'apple-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
