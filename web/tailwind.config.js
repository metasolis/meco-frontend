const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        'meco-bcgd': '#000000',
        'meco-planet': '#545454',
        'meco-text': '#7ED957',
        'meco-slogan': '#E9A664',
      },
    },
  },
  plugins: [require('daisyui')],
};
