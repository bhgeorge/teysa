const teysaConfig = require('./src/styles/tailwind.config.js');

// All config should be handled in src/styles/tailwind.config.js
module.exports = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/preview.js', './.storybook/components/*.tsx'],
  ...teysaConfig,
};
