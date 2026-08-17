/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './index.html',
  ],
  theme: {
    extend: {
      backgroundBlendMode: {
      },

      colors: {
          brand: {
            green950: '#08291d',
            green900: '#0d3828',
            green800: '#15523a',
            green700: '#1d6b4c',
            green100: '#e8f3ed',
            green50: '#f3f8f5',
            gold600: '#b98928',
            gold500: '#d0a444',
            gold300: '#ead39a',
            wine700: '#7a1f2a',
            cream: '#fbf8f0',
            gold700: '#9b6a16',
            ink: '#1a2520',
            muted: '#67736d',
            footer: '#061f16',
          },
        },
      spacing: {
        45: '11.25rem', // 45 * 0.25rem = 11.25rem
        57: '14.25rem',
        74: '18.5rem',
        75: '18.75rem',
        76: '19.125rem'
      },

      fontSize: {
        base: '1rem', // Set base font size to 1rem
      },

      fontFamily: {
          serif: ['"Cormorant Garamond"', 'serif'],
          sans: ['"Nunito Sans"', 'sans-serif'],
        },


        boxShadow: {
          'brand-sm': '0 12px 30px rgba(8, 41, 29, 0.08)',
          'brand-lg': '0 28px 70px rgba(8, 41, 29, 0.15)',
        },
        keyframes: {
          heroZoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.055)' } },
          fadeUp: { '0%': { opacity: 0, transform: 'translateY(28px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
          floatY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
          bounceY: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
          pulseGold: {
            '0%': { boxShadow: '0 0 0 0 rgba(208,164,68,0.48)' },
            '70%': { boxShadow: '0 0 0 18px rgba(208,164,68,0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(208,164,68,0)' },
          },
        },
        animation: {
          heroZoom: 'heroZoom 18s ease-in-out infinite alternate',
          fadeUp: 'fadeUp 800ms ease both',
          floatY: 'floatY 4.5s ease-in-out infinite',
          bounceY: 'bounceY 1.8s infinite',
          pulseGold: 'pulseGold 2.2s infinite',
        }




      
    },
    
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



