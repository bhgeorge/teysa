const { componentTemplate, testTemplate, storybookTemplate } = require('@teysa/scaffold-templates');

module.exports = {
  scaffold: {
    dirs: [
      { name: 'Atomic', path: './src/components/atomic' },
      { name: 'Forms', path: './src/components/forms' },
    ],
    templates: {
      '[name].tsx': componentTemplate,
      '[name].test.js': testTemplate,
      '[name].stories.js': storybookTemplate,
    },
  },
};
