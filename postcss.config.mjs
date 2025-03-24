/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;

// PostCSS is a tool for transforming CSS with JavaScript plugins.
// It's used behind the scenes in tools like Tailwind CSS, Next.js