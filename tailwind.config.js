/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        green :"#0aad0a",
      },
      screens: {
        xsm: '480px', // Extra small screens
        sm: '640px', // Small screens
        md: '768px', // Medium screens
        lg: '1024px', // Large screens
        xl: '1280px', // Extra large screens
        '2xl': '1536px', // 2x large screens
      },
    
    },
  },
  darkMode: 'class',
  plugins: [
    require('flowbite/plugin')
  ]
}

