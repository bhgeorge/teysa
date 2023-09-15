const {
  testTemplate,
  storybookTemplate,
} = require('@teysa/scaffold-templates');
const nextComponent = require('./scripts/templates/next-component');
const nextFormComponent = require('./scripts/templates/next-form-component');

module.exports = {
  scaffold: {
    dirs: [
      { name: 'Atomic', path: './src/components/atomic' },
      {
        name: 'Forms',
        path: './src/components/forms',
        templates: { '[name].tsx': nextFormComponent },
      },
    ],
    templates: {
      '[name].tsx': nextComponent,
      '[name].test.js': testTemplate,
      '[name].stories.js': storybookTemplate,
    },
  },
};
