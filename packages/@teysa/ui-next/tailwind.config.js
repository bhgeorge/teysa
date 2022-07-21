const teysaConfig = require('./src/styles/tailwind.config.js');

const devOnlyContent = [
  './src/**/*.stories.js',
  './.storybook/preview.js',
  './.storybook/components/**/*.tsx',
];

let content = ['./src/**/*.{ts,tsx}'];

if (process.env.NODE_ENV !== 'production') {
  content = content.concat(devOnlyContent);
}

// All config should be handled in src/styles/tailwind.config.js
module.exports = {
  content,
  ...teysaConfig,
};
