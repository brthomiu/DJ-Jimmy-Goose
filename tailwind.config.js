/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dj1: "url('/app/assets/dj1.webp')",
        dj2: "url('/app/assets/dj2.webp')",
        dj3: "url('/app/assets/dj3.jpeg')",
        party1: "url('/app/assets/party1.jpeg')",
        party2: "url('/app/assets/party2.jpeg')",
        party3: "url('/app/assets/party3.jpeg')",
        toast: "url('/app/assets/toast.webp')",
        venue: "url('/app/assets/venue.jpeg')",
      },
    },
  },
  plugins: [],
};
