module.exports = {
  scaffold: {
    dirs: [{ name: 'Foo', path: './src/foo', storybook: 'Scaffold/' }],
    templates: {
      '[name].jsx': () => `Moo`,
    },
  },
};
