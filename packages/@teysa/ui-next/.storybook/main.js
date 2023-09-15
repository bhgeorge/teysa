module.exports = {
  stories: [
    '../src/components/**/*.stories.@(ts|tsx|js|jsx)',
    './components/**/*.stories.@(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
  ],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  framework: '@storybook/nextjs',
};
