/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to scan all your React components for class names.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Here we define the custom design system for "SpendWise AI".
      colors: {
        'primary': '#4F46E5',      // A strong, modern indigo for buttons and highlights
        'primary-hover': '#4338CA', // A slightly darker indigo for hover states
        'secondary': '#10B981',     // A vibrant green for success, savings, and positive indicators
        'danger': '#EF4444',       // A clear red for warnings or over-budget items
        'dark-bg': '#111827',       // The main dark background of the app
        'dark-card': '#1F2937',     // A slightly lighter background for cards and sidebars
        'light-text': '#F3F4F6',     // The main text color for high contrast
        'subtle-text': '#9CA3AF',    // A muted gray for subtitles, placeholders, and less important text
      },
      fontFamily: {
        // We're setting 'Inter' as the default font for a clean, modern look.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

