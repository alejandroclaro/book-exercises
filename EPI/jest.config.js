/**
 * Javascript and Typescript unit tests configuration.
 *
 * @author alejandro.claro
 * @date   2020-10-17
 *
 * @copyright 2020 Alejandro Claro
 *
 * @license MIT
 */

const Path = require('path');

const common = {
  'moduleFileExtensions': [ 'js', 'ts', 'json', 'node' ],
  'moduleNameMapper': {
    '^@src/(.*)$': '<rootDir>/src/$1'
  },
  'transform': {
    '.*\\.(ts)$': 'ts-jest'
  },
  'globals': {
    'ts-jest': {
      'tsConfig': Path.resolve('tsconfig.json'),
      'babelConfig': false,
      'diagnostics': {
        'warnOnly': true
      }
    }
  }
};

module.exports = {
  'projects': [
    {
      'displayName': '<< Node process >>',
      'testMatch': [ '<rootDir>/tests/**/*.test.{js,ts}' ],
      ...common
    }
  ],
  'reporters': [
    'default',
    [
      'jest-junit', {
        'suiteName': 'Unit tests',
        'outputDirectory': './build/tests',
        'outputName': 'unit-tests.junit.xml',
        'uniqueOutputName': 'false'
      }
    ]
  ],
  'collectCoverage': true,
  'collectCoverageFrom': [ 'src/**/*.{js,ts}', '!**/node_modules/**' ],
  'coverageDirectory': './build/coverage',
  'coverageReporters': [ 'lcovonly', 'html', 'text-summary' ],
  'verbose': true
};
