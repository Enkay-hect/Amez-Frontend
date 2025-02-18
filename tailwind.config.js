/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundBlendMode: {
      },
      colors: {
      },
      spacing: {
        45: '11.25rem', // 45 * 0.25rem = 11.25rem
        74: '18.5rem',
        75: '18.75rem',
        76: '19.125rem'
      },
      fontSize: {
        base: '1rem', // Set base font size to 1rem
      },
      fontFamily: {
        // sans: 'var(--pisole-font-sans-serif)', 
      },
    },
    // screens: {
      // 'xm': '480px',
      // 'sm': '640px'

      // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    // },
  },
  variants: {
    // extend: {
    //   borderColor: ['active', 'focus'], 
    // },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],

  
}



