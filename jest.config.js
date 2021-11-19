import { defaults } from 'jest-config';
export default {
  // roots: ['<rootDir>/src'],
  // moduleFileExtensions: ['ts', 'js'],
  // testRegex: '((\\.|/*.)(spec))\\.mjs?$',
  // collectCoverageFrom: ['src/**/*.{ts,js}'],
  testEnvironment: 'miniflare',
  testMatch: ['**/dist/test/**/*.mjs'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'mjs'],
};
