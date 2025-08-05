/** @type {import('tailwindcss').Config} */
module.exports = {
  // ⚠️ Aquí le indicas a Tailwind dónde buscar tus clases
  content: [
    "./src/**/*.{njk,html,js}",   // todas tus plantillas y scripts
    "./src/css/**/*.css"          // tu CSS con @tailwind y @apply
  ],
  theme: {
    extend: {
      // añade aquí paletas o tipografías extra si quieres
    },
  },
  plugins: [
    // Ejemplo: require('@tailwindcss/forms'),
  ],
};
