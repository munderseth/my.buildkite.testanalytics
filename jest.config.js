// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Indicates whether the coverage information should be collected
     collectCoverage: false,
     // --reporters=jest-junit
    "reporters": [
       'default',
       'buildkite-test-collector/jest/reporter'
    ],

    // Enable column + line capture for Test Analytics
    testLocationInResults: true,

    // The root directory that Jest should scan for tests and modules within
    rootDir: "./tests",
    // Test timeout: 60000*10 = 10min
    testTimeout: 600000
  };

