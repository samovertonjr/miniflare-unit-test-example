export default {
  preset: 'ts-jest/presets/default-esm',
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  testRegex: '((\\.|/*.)(spec))\\.ts?$',
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  testEnvironment: 'miniflare',
};
