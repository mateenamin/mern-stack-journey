/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",

//     Tailwind ko batao — "Meri files yahan hain!"
// Tailwind in files mein dhundta hai — kaunsi classes use ho rahi hain
// Jo classes use nahi hoti — delete kar deta hai — file chhoti rehti hai!
  ],
  darkMode: 'class',
//   Dark mode class se control hoga!
// HTML pe dark class lagao — sab dark ho jayega
  theme: {
    extend: {},
  },
  plugins: [],
}