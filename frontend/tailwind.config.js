/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        'hero-primary': '#0D47D9', // full background
        'hero-card': '#0039B3',    // inner card
        'hero-subtle': '#DDE9FF'   // subtitle text
      },
      boxShadow: {
        'hero': '0 10px 30px rgba(3, 3, 94, 0.18)',
        'inner': 'inset 0 6px 18px rgba(0,0,0,0.06)'
      },
      borderRadius: {
        'xl-28': '28px'
      }
    },
  },
  plugins: [],
}

