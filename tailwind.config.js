/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './public/index.html',
  ],
  theme: {
    extend: {
      // width: {
      //   '50': '12.5rem', // 50px
      //   '35remw' : '35rem'
      // },
      // height:{
      //   '48r': '48rem'
      // },
      colors: {
        // customPurple: '#06310B'
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
  plugins: [],

  
}



