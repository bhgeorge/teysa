module.exports = {
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
    '(stories|mock-data).js',
    'icons/',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
};
