// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  setupFiles: [
    '<rootDir>/.test-setup.js'
  ]
}
